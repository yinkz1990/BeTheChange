import React from 'react';
import Button from '../DashBoardComponent/Button';
import { Link } from 'react-router-dom';





const LearnWithUs = ({ pics}) => {
    return ( 
        <>
           <div className="container justify-between justify-around px-2 mb-2 md:px-4 lg:m-3 lg:flex ">
                <div className="xl:mr-10 md:flex-shrink-0">
                    <img  className="object-cover transition duration-500 ease-in-out transform md:w-full hover:-translate-y-1 hover:scale-110" src={pics} alt="Learn_With_Us"/>
                   
            </div>
            <div className="mt-4 align-middle md:mt-0 md:ml-6">
                <h4 className="mb-4 text-lg font-bold text-indigo-600">Created for Teachers by Teachers</h4>
                <p className="mt-2 mb-10 text-gray-600"> 
                We believe that teachers know their students best. We also believe that when teachers are given the right resources 
                to inform and deliver effective instructions, every student benefits. With a collection of incredible powerful content created by 
                fellows of Teach For Nigeria, We solve education inequity in various learning environment. We rely heavily on the input and creative 
                talents of these Fellows to create our resources made available for everyone's use for free.
                </p>
                
               <div className="text-center">
                    <Link to="/courses"> <Button label={'Start Learning'}                     
                        className={"px-4 py-2 mb-6 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-400 focus:shadow-outline focus:outline-none"}
                    /></Link>
                </div>
            </div>      
               
            </div>
           
        </>
     );
}
 
export default LearnWithUs;