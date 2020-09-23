import React from 'react';
import { Helmet} from 'react-helmet';
import StudentComponent from './StudentComponent'

const StudentDashBoard = () => {
   
    return ( 
        <>
            <Helmet>
               <title>EduGrid | Student Dashboard</title>
            </Helmet>
           <StudentComponent />
        </>
     );
}
 
export default StudentDashBoard;