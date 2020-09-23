import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'


const StarRating = () => {
    const [rating,setRating] = useState(null);
    const [hover, setHover] = useState(null)
   
    return ( 
        <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((star, i)=>{
                const ratingValue = i + 1
                return (<label key={ratingValue} >
                    <input 
                    className="hidden"
                    type="radio" 
                    name="rating"  
                    value={ratingValue} 
                    onClick={()=>setRating(ratingValue)} 
                    
                    />
                 <FaStar 
                 className="star" 
                 color={ratingValue <= (hover || rating) ? "#ffc107":"#e4e5e9"}
                  size={30} 
                  onMouseEnter={()=>setHover(ratingValue)}
                  onMouseLeave={()=>setHover(null)}
                  />
                 </label>)
            })}
            <div className="ml-4">{rating ? `${rating} stars`: null} </div>
                        
        </div>
     );
}
 
export default StarRating;