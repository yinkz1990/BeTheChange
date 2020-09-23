import React from 'react';
import errorImage from '../../utils/img/error6.webp'



const NotFound = () => {
    return ( 
        <>   
        <h2 className="text-center mt-8 text-red-600 -mb-8 font-bold text-lg">Page Not Found</h2>
        <div className="w-screen my-4 md:flex justify-center">
           <img src={errorImage} alt="Page_Not_Found" />
        </div>
        </>
     );
}
 
export default NotFound;