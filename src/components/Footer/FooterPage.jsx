import React from 'react';
import {MdEmail} from 'react-icons/md'


const FooterPage = () => {
    return ( 
       <div className="text-center">
           <div className="flex-wrap p-6 bg-indigo-900 items-left">
            
            <div className="inline-block">
                    <h5 className="text-teal-200 hover:text-white">Help and Privacy</h5>
                    <p className="text-teal-200 hover:text-white">Terms and Conditions</p>
                    <p className="text-teal-200 hover:text-white">Contact Us</p>
                    <p className="text-teal-200 hover:text-white">About</p>
                    <p className="text-center text-teal-200 hover:text-white"><span className="flex justify-center mr-2"><MdEmail size={'1.5rem'} />  officialEduGrid@gmail.com</span></p>
                    <p className="text-teal-200 md:flex">&copy;EduGridNIgeria 2020, ALL RIGHT RESERVED. </p>

            
            </div>
        
        </div>
         
       </div>
    )
}
 
export default FooterPage;