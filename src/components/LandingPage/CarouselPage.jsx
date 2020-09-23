import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import bg1 from '../../utils/img/bg1.jpg';
import bg2 from '../../utils/img/bg2.jpg';
import bg3 from '../../utils/img/bg3.jpg';
import bg4 from '../../utils/img/bg4.jpg';
import bg5 from '../../utils/img/bg5.jpg';
import bg6 from '../../utils/img/bg6.jpg';
import bg7 from '../../utils/img/bg7.jpg';
import palms4 from '../../utils/img/palms4.jpg';

 
const CarouselPage = () => {
    return ( 
        <>
            <Carousel  showArrows={true} autoPlay={true}  showStatus={false} infiniteLoop={true} showThumbs={false} dynamicHeight={true}>
                <div>
                    <img src={bg1} alt="slide_photos" />
                    <div className="text-center text-white bg-indigo-600 md:-mt-64 sm:-mt-16">
                        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">Get started</button>
                     </div>
                   
                
                </div>
                <div>
                    <img src={bg2} alt="slide_photos" />
                    <div className="text-center text-white bg-indigo-600 md-mt-64">
                    <div className="text-center text-white bg-indigo-600 md-mt-64">
                        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">Get started</button>
                        
                    </div>
                        
                    </div>
                
                </div>
                <div>
                    <img src={bg3} alt="slide_photos" />
                    <div className="text-center text-white bg-indigo-600 md:-mt-64">
                        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">Get started</button>
                        
                    </div>
                    
                </div>
                <div>
                    <img src={bg4} alt="slide_photos" />
                    <div className="text-center text-white bg-indigo-600 md:-mt-64">
                        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">Get started</button>
                        
                    </div>
                
                </div>
                <div>
                    <img src={bg5} alt="slide_photos" />
                    <div className="text-center text-white bg-indigo-600 md:-mt-64">
                        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">Get started</button>
                        
                    </div>
                    
                </div>
                <div>
                    <img src={bg6} alt="slide_photos" />
                    <div className="text-center text-white bg-indigo-600 md:-mt-64">
                        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">Get started</button>
                        
                    </div>
                    
                </div>
                <div>
                    <img src={bg7} alt="slide_photos" />
                    <div className="text-center text-white bg-indigo-600 md:-mt-64">
                        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">Get started</button>
                        
                    </div>
                    
                </div>
                <div>
                    <img src={palms4} alt="slide_photos" />
                    <div className="text-center text-white bg-indigo-600 md:-mt-64 sm:-mt-16">
                        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">Get started</button>
                        
                    </div>
                </div>
            </Carousel>
        </>
     );
}
 
export default CarouselPage;