import React from 'react';
import { Helmet} from 'react-helmet';
import CarouselPage from './CarouselPage';
import LearnWithUs from './LearnWithUs';
import teach from '../../utils/img/teacher1.jpg'
import TopCourses from './TopCourses';
import TeachWithUs from './TeachWithUs';


const LandingPage = () => {
    return ( 
        <> 
          <Helmet>
            <title>EduGrid | Home</title>
          </Helmet>
            <CarouselPage /> 
            <TopCourses />
            <LearnWithUs  pics={teach} />
            <TeachWithUs />
        </>
     );
}
 
export default LandingPage;