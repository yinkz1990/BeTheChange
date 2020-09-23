import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from '../../DashBoardComponent/Button'
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {StoreContext} from '../../../provider/store'
import { Link } from 'react-router-dom';


toast.configure()
const FavouriteCourses = ({coverImage, title, description, author, id}) => {
    const history = useHistory();
        const {course} = useContext(StoreContext)
   
    const {getCourse, deleteCourse} = course;

    useEffect(()=>{
        getCourse(id);
    },[id])

  
    const onDeleteCourse = async()=>{
        await deleteCourse(id);
        history.go(0);
    }
    return ( 
        <>
            <div className="justify-center mx-2 mb-4 sm:container md:shadow-xl sm:shadow-md md:flex hover:-translate-y-1 hover:scale-105">

                    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
                        <img className="w-full h-64" key={id} src={coverImage} alt="course_image"/>

                    <div className="px-6 py-4"> 
                    <div className="mb-2 text-xl font-bold text-center text-purple-900 capitalize">{title} <div>
                       <div className="inline-block px-3 py-1 text-sm font-semibold text-center text-gray-700 text-purple-600 rounded-full">Author: {author} </div>
                   </div>
                    </div>
                        <p className="text-base text-gray-700">
                            {description}
                        </p>
                    
                    </div>

                    <div className="py-2 text-center">
                    <Link to={`/courses/${id}`}>
                         <Button
                                label={'View Course'}
                                className={"px-4 py-2 mb-6 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none"}
                          />
                    </Link>
                    </div>
                   
                    <div className="text-center">
                    <Button 
                        label={"Delete Course"}
                        className={"px-4 py-2 mb-6 font-bold text-white bg-red-700 rounded shadow hover:bg-red-500 focus:shadow-outline focus:outline-none"}
                        onSubmit={onDeleteCourse}
                     />
                    </div>


                    
              


            </div>
        </div>
        </>
     );
    };
 
export default FavouriteCourses;