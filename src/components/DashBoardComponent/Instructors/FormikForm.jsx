import React, {useState, useEffect} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../DashBoardComponent/Button'
import axios from 'axios';
import {useHistory} from 'react-router'
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
const FormikForm =()=>{
      const [imageUrl, setImageUrl] = useState('')
      const [imageUpload, setImageUpload] = useState('');
      const [videoUpload, setVideoUpload] = useState('');
      const [videoLink, setVideoLink] = useState('');
      const history = useHistory();

      useEffect(()=>{            
        axios.post("https://api.imgur.com/3/image",imageUpload, {
                      headers:{
                        Authorization: "Client-ID db563de1e18b82b"
                      }
                    }).then(response=> {
                      setImageUrl(response.data.data.link);
                      console.log(response)
                    })
                    .catch(error => {
                      console.log(error)
                     //setError('Something went wrong')
                    })                         
      },[imageUpload]);
      
      useEffect(()=>{
        const uploadPreset = 'zbjwvsyj';
        
        const url = 'https://api.cloudinary.com/v1_1/dev-sam/video/upload'; 
        const fd = new FormData();
          fd.append("file", videoUpload);
          fd.append("upload_preset", uploadPreset);

          axios.post(url,fd)
          .then(response =>{
          setVideoLink(response.data.secure_url)  
          
          })
          .catch(error=>{
            console.log("something went wrong. please re-upload the course video");
          })
      },[videoUpload])

      const user_id = parseInt(localStorage.getItem("user_id"));
     
        return ( 
            <Formik
                initialValues = {{
                video: undefined,
                title:'',
                description:'',
                image:undefined,
                author:''
              }}

              validate={(values)=>{
                const errors = {};

                if(values.video !== undefined){
               
              if(values.video.size >  99000000){
                errors.video = "Video file is too large. Upload a video less than 99MB :)"
              }
            }
              else{
                errors.video = "Please upload a course video"
              }


              if(values.image !== undefined){
               
                if(values.image.size  > 3000000){
                  errors.image = "Image file is too large. Upload an Image less than 3MB"
                }
              }
                else{
                  errors.image = "Please upload a course cover image"
                }
              return errors
              }}

              validationSchema = {Yup.object().shape({
                title: Yup.string().required('Course Title is required'),
                description: Yup.string().required('Course Description is required'),
                author: Yup.string().required('Author Field is Required')
              })}

                
              onSubmit ={async (values) =>{
                

              //   let formData = new FormData();

              //   formData.append("title", values.title);
              //   formData.append("description", values.description);
              //   formData.append("author", values.author);
              //   formData.append("video", videoLink);
              //   formData.append("image", imageUrl);
              //  formData.append("user_id", user_id)

               const courseData = {
                "title": values.title,
                "description": values.description,
                "author": values.author,
                "image": imageUrl,
                "video": videoLink,
                "user_id": user_id
               } 


                try {
                  const response = await axios.post('https://app-server20.herokuapp.com/courses',courseData,{
                   
                    })
                    toast.success('You have succesfully created a content');
                    console.log(response)
                } catch (error) {
                 
                  console.log(error)
                }

                history.push('/')
                
              }}>



               

              {({ errors, status,handleSubmit,setFieldValue, touched }) => (

                <div className="justify-center md:flex sm:items-center">
                <Form className="container max-w-md px-4 md:w-full" onSubmit={handleSubmit}>
            
               <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="video">
                          Course Video
                    </label>
                </div> 
                <div className="md:w-2/3">
                  
                  <input 
                    type="file"
                    name="video"
                    placeholder="course video"
                    accept="video/*"
                    onChange={(event) => {setFieldValue("video", event.currentTarget.files[0]);
                      setVideoUpload(event.target.files[0]);
                      }}
                      className={"w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-indigo-500" + (errors.video && touched.video) ? " is-invalid": ""}
                    />
                    <ErrorMessage name="video" component="div" className="text-xs italic text-red-500" />
                  
                </div>
              </div> 
  
  
              <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="title">
                          Course Title
                    </label>
                </div>
                <div className="md:w-2/3">
                  <Field name="title" className={"shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" + (errors.author && touched.author ? " is-invalid": "")}
                    type="text"  placeholder="Principles of Web Development"    />
                  <ErrorMessage name="title" component="div" className="text-xs italic text-red-500" />
                </div>
              </div>
              
  
              <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="description">
                          Course Description
                    </label>
                </div>
                <div className="md:w-2/3">
                  <Field name="description" as="textarea" className={"shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" + (errors.author && touched.author ? " is-invalid": "")}
                    type="text" cols="50" rows="5"  placeholder="Course Description"   />
                  <ErrorMessage name="description" component="div" className="text-xs italic text-red-500" />
                </div>
              </div>
  
                <div className="mb-6 md:flex md:items-center">
                 <div className="md:w-1/3">
                     <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="image">
                         Course Cover Image
                     </label>
                 </div>
                 <div className="md:w-2/3">
                   <input 
                    type="file"
                    name="image"
                    placeholder="Course Cover Image"
                    accept="image/*"
                    onChange={(event) => {setFieldValue("image", event.currentTarget.files[0]);
                      setImageUpload(event.target.files[0]);
                      }}
                      className={"w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-indigo-500" + (errors.video && touched.video) ? " is-invalid": ""}
                    />
                   <ErrorMessage name="image" component="div" className="text-xs italic text-red-500" />
                 </div>
               </div> 
  
  
              <div className="mb-6 md:flex md:items-center">
                <div className="md:w-1/3">
                    <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="author">
                        Course Author
                    </label>
                </div>
                <div className="md:w-2/3">
                  <Field name="author" className={"shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" + (errors.author && touched.author ? " is-invalid": "")}
                    type="text"   placeholder="E.g Samuel Ayegbusi"   />
                  <ErrorMessage name="author" component="div" className="text-xs italic text-red-500" />
                </div>
              </div>


              <Button
             
              className={"px-4 py-2 mb-6 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none"}
              label={'Add Content'}
          />
            </Form>
               </div>
                )}
            </Formik>
         );
    
}
 
export default FormikForm;