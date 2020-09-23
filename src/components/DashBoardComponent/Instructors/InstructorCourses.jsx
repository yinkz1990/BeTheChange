import React, {  useEffect,useContext, useState} from  'react';
import {StoreContext} from '../../../provider/store'
import UpdateCourse from './UpdateCourse'


const InstructorCourses = () => {
    const { course } = useContext(StoreContext);
    const {userCourses, getUserCourse} = course;
    const [loading, setLoading] = useState(true);

    const id = localStorage.getItem('user_id');
    useEffect(()=>{
        getUserCourse(id)
       setLoading(false)
    }, [])

           
    return ( 
     <>
        <div className="py-6 text-xl font-bold text-center text-black bg-pink-100 ">My Courses</div>
        
            {loading ? <div className='flex justify-center my-40 spinner'></div> : null}
            
            <div className="bg-purple-100 md:grid md:grid-cols-3 md:gap-4">
            {userCourses.length === 0 && 
            <div className="flex justify-center my-6">
                <h3 className="text-center">You haven't created any course content!</h3>
                </div>}
            {Array.isArray(userCourses) && userCourses.length !== 0 ? userCourses.map((course) =>
            <UpdateCourse
                    title={course.title}
                    coverImage={course.image}
                    author={course.author} 
                    description={course.description} 
                    video={course.video}
                    key={course.id} 
                    id={course.id}
            />)     
           : null }

        </div>                                                      
    </>
     );
}
 
export default InstructorCourses;