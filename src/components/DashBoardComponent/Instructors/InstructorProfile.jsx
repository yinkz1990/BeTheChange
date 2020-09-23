import React from 'react'
import AvatarComp from '../AvatarComp';
import Form from './Form'
import FormikForm from './FormikForm';



const InstructorProfile = () => {
    return ( 
        <div>
            <AvatarComp status={'Instructor'} />
            <h2 className="my-6 font-bold text-center text-indigo-500">CREATE CONTENT </h2>
            <FormikForm/>
        </div>
     );
}
 
export default InstructorProfile;