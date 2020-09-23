import React from 'react';
import { Helmet} from 'react-helmet'
import Offers from '../LandingPage/Offers';


const Courses = () => {
    return ( 
        <>
            <Helmet>
               <title>EduGrid | Courses</title>
            </Helmet>
            <Offers label={"Available Courses"} />
        </>
     );
}
 
export default Courses;