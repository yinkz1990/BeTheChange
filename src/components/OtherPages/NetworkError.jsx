import React from 'react';
import network from '../../utils/img/nice2.gif'


const NetworkError = () => {
    return ( 
        <div>   
               <div className="bg-white -my-4 w-screen md:flex justify-center">
                   <img src={network} alt="access_denied" />
               </div>
        </div>
     );
}
 
export default NetworkError;