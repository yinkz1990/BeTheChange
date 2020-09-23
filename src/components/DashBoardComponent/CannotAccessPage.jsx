import React from 'react';
import access from '../../utils/img/Access.jpg'



const CannotAccessPage = () => {
    return ( 
        <div className="container my-24 text-center">
                 <h1 className="-mt-5 text-lg font-bold text-center text-red-500 ">Access Denied!</h1>
             <div className="justify-center md:flex">
                 <div>
                    <img src={access} alt="access_denied" />
                 </div>
             <div className="mt-20 mb-4">
                <h2 className="mb-2 font-bold">Ooops! You cannot access this Page unless you are logged In.</h2>
                <p >Click the <strong>Login with Google Button </strong> to gain access </p>
            </div>
            
            </div>
        </div>
           
     );
}
 
export default CannotAccessPage;