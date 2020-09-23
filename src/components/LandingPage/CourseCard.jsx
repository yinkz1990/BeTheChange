import React from 'react';

const CourseCard = ({label,icon}) => {
    return ( 
        <>
             <div className="px-2 mb-4 overflow-hidden bg-white rounded shadow-xl sm:shadow-md hover:bg-blue-600 hover:text-white">
                <div className="flex justify-center mt-4 ">{icon} </div>
                     <div className="px-6 py-4">
                         <div className="mb-2 font-bold text-center text-bold">{label} </div>
                    </div>
             </div>
        </>
     );
}
 
export default CourseCard;