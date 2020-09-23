import React from 'react'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom';
import { IconContext} from 'react-icons'
import { FaBrain,FaBookOpen, FaPeopleCarry , FaBusinessTime} from 'react-icons/fa';
import {GiPublicSpeaker,GiStumpRegrowth,GiTalk, GiTeacher} from 'react-icons/gi'

import { MdGroup} from 'react-icons/md';




const TopCourses = () => {
    return ( 
        <div className="px-4 pb-5 my-2 bg-gray-200 md:pt-4">
            <h2 className="py-3 my-4 ml-8 text-3xl font-extrabold text-red-900 md:my-4">Top Courses</h2>
            
                
            <div className="grid-cols-4 gap-5 md:grid">
                
            <IconContext.Provider value={{size:"3rem", color:'orange'}}>
            <Link to="/search?q=web">
            <CourseCard 
                label={'Emotional Intelligence'} 
                icon={<FaBrain  />} 
            />
            </Link>

            <Link to="/search?q=business">
            <CourseCard 
                label={'Transformational Leadership'}
                icon={<FaBusinessTime />}
             />
             </Link>

            <Link to="/search?q=market">
            <CourseCard 
                label={'Public Speaking'}
                icon={<GiPublicSpeaker/>} 
             />
             </Link>

                <Link to="/search?q=manage">
                    <CourseCard
                        label={'Effective Communication'}
                        icon={<GiTalk />} 
                    />
                </Link>

                <Link to="/search?q=finance">
                    <CourseCard
                        label={'Transformational Leadership'}
                        icon={<GiTeacher />}
                    />
                </Link>

            <Link to="/search?q=design">
            <CourseCard
                label={'Lesson Planning'} 
                icon={<FaBookOpen />}
             />
             </Link>

            <Link to="/search?q=customer">
            <CourseCard
                label={'Growth Mindset'}
                icon={<GiStumpRegrowth />} 
            />
            </Link>

            <Link to="/search?q=human">
            <CourseCard
                label={'Human Resource'} 
                icon={<MdGroup />}
             />
             </Link>

            <Link to="/search?q=photo">
            <CourseCard 
                label={'Collaboration'} 
                icon={<FaPeopleCarry />}
             />
            </Link>
       
       </IconContext.Provider>
            </div>
            
        </div>
     );
}
 
export default TopCourses;