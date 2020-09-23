import React from 'react';
import DashBoard from './DashBoard';
import { Helmet} from 'react-helmet';

const InstructorsDashBoard = () => {
    
    return ( 
        <>
          <Helmet>
               <title>EduGrid | Instructor DashBoard</title>
          </Helmet>
             <DashBoard/>
        </>
     );
}
 
export default InstructorsDashBoard;