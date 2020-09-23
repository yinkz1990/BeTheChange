import React from 'react';
import Button from '../DashBoardComponent/Button';
import teacher from '../../utils/img/teacher2.jpeg'
import { Link } from 'react-router-dom';

const TeachWithUs = () => {
    return ( 
    
   <>
     <div className="container px-2 my-5 transition duration-500 ease-in-out transform shadow sm:shadow-md xl:shadow-2xl hover:-translate-y-1 hover:scale-103">
        <div className="justify-between lg:flex md:m-6 lg:wrap sm:p-10">

            <div className="md:mt-4 md:mr-16 md:mt-0 md:ml-6">
                    <div className="my-2 text-sm font-bold tracking-wide text-indigo-600 uppercase sm:pt-4 sm:mt-2">
                            Teach on EduGrid
                </div>

                <p className="mt-2 mb-10 text-gray-600">
                    Top instructors from around the world inspire fellow teachers on EduGrid. We provide the tools and skills to share the knowledge of what you love. 
                </p>

                <div className="text-center">
                    <Link to="/instructor">
                            <Button label={'Start Teaching'}
           
                             className={'px-4 py-2 mb-6 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none'}
                              />
                    </Link> 
                </div>
        
            </div>
            <div className="md:flex-shrink-0">
                  <img className="object-cover sm:object-cover md:w-full" src={teacher} alt="Learn_With_us" />
            </div>
     </div>
    </div>

    </>
    
        

     );
}
 
export default TeachWithUs;
