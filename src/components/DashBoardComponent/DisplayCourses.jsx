import React,{useState,useEffect, useContext} from 'react';
import { StoreContext } from '../../provider/store';
import axios from 'axios';
import { toast} from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPlayer from 'react-player';
import NetworkError from '../OtherPages/NetworkError';
import StarRating from '../OtherPages/StarRating'
import Button from './Button';



toast.configure()
const DisplayCourses = (props) => {
    const id = (props.match.params.id)
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [contents, setContents ] = useState([]);

   const {course} = useContext(StoreContext);

   const {addCourseToFav} = course
  

    useEffect(()=>{
       
        axios.get(`https://app-server20.herokuapp.com/courses/${id}`)
        .then(response=>{
            setLoading(false);
            setContents(response.data);
            setError('');  
        }).catch(error=>{

            setLoading(false);
            setContents([]);
            toast.error('Something went Wrong, Check your network connection')
            
        })
    }, []);

    
    const user_id = parseInt(localStorage.getItem("user_id"));

    const addToFavourite = async() =>{
           await addCourseToFav(user_id, id)
            
    }
    return ( 
        <div className="mx-2">     
                {loading ? <div className='flex justify-center my-40 spinner'></div> : null}
                {error ? <NetworkError /> : null}
              <div className="mt-6 text-xl font-bold text-center text-purple-900 md:mb-4">{contents.title} </div>
            <div className="flex justify-center md:mb-6">
                    <ReactPlayer 
                    width="720px"
                     height="320px" 
                     controls
                     url={contents.video} />
            </div>

            <div>
            <h3 className="flex justify-center my-2 font-sans text-lg text-purple-500 text-ceter">Course Description</h3>
                <p className="justify-center mb-4 text-black"> {contents.description} </p>
            <p className="flex justify-center mb-2 text-base text-purple-700">Instructor: </p>
            <p  className="flex justify-center mb-4 text-base text-purple-700">{contents.author}</p>
            </div>
            
            <div className="flex justify-center mx-auto mb-4">
            <span className="m-4">Rate This Course: <StarRating /></span>
            </div>
            
            <div className="flex justify-center">
                <Button label={'Add To Favourites'}
                className={"px-4 py-2 mb-6 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none"}
                 onSubmit={addToFavourite} />
            </div>
        </div>
     );
}
 
export default DisplayCourses;