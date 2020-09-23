import React, {useContext} from 'react'
import {StoreContext} from '../../provider/store';



const AvatarComp = ({status}) => {
      const {auth} = useContext(StoreContext);    
      

  const {name, imageUrl , email} = auth.authDetails
    return ( 
        
       <>
         { auth.authDetails ?  
            (<div className="md:flex bg-white rounded-lg shadow sm:shadow-md my-8 mx-6 sm:mt-4 xl:shadow-2xl p-6">
                  <img className="h-16 w-16 md:h-24 md:w-24 rounded-full  mx-auto md:mx-0 md:mr-6" alt="Profile_image" src={imageUrl} />
                <div className="text-center md:text-left">
                    <h2 className="text-lg text-blue-700 capitalize">{name} </h2>
                    <div className="text-purple-500">{status} </div>
                  <div className="text-blue-600">{email} </div>
                    
                </div>
           </div>)
             : null}



     
       </>
     );
}
 
export default AvatarComp;