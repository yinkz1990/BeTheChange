import React from 'react';
import AvatarComp from '../AvatarComp';
import InstructorCourses from './InstructorCourses';
import Button from '../Button';
import { Link } from 'react-router-dom';



const DashBoard = () => {
    return ( 
        <div className="py-4 bg-pink-100">
            <AvatarComp status={'Instructor'} />
            <div className="flex justify-center mt-4">
                <Link to="/instructor/create">
                    <Button
                     label={'Create New Course'}
                     className={"px-4 py-2 mb-6 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none"}
                    />
                </Link> 
           </div>
                <InstructorCourses />

           </div>
     );
}
 
export default DashBoard;