import React, { lazy,Suspense, useContext } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import FooterPage from './components/Footer/FooterPage';
import { StoreContext } from './provider/store';
import Skeleton from 'react-loading-skeleton'


const NotFound = lazy(()=> import('./components/OtherPages/NotFound'));
const Courses = lazy(()=>import ('./components/CoursesComponent/Courses'));
const InstructorsDashBoard  = lazy(()=>import ('./components/DashBoardComponent/Instructors/InstructorsDashBoard'));
const StudentDashBoard  = lazy(()=>import ('./components/DashBoardComponent/studentDashBoard/StudentsDashBoard'));
const CannotAccessPage = lazy(()=>import ('./components/DashBoardComponent/CannotAccessPage'));
const LandingPage = lazy(()=>import('./components/LandingPage/LandingPage'));
const EachCourses = lazy(()=>import( './components/DashBoardComponent/EachCourses'));
const InstructorProfile = lazy(()=>import('./components/DashBoardComponent/Instructors/InstructorProfile'));
const SearchCourse = lazy(()=>import('./components/CoursesComponent/SearchCourse'));


function App() {

  const {auth} = useContext(StoreContext)
  const {isLoggedIn} = auth

  return (
    <div >
    
     <Router>
         <Navbar />
       <Switch>   
       <Suspense fallback={<div classname="bg-indigo-200"> <Skeleton count={30} height={30} /></div>}>
                          
              <Route path='/courses/:id'  component={EachCourses} />
              <Route path='/courses' exact render={()=> <Courses />} />
              <Route path='/search'  component={SearchCourse} />
              <Route path="/instructor/create"  render={()=> isLoggedIn ? <InstructorProfile  /> : <CannotAccessPage />} />
              <Suspense fallback={<div className='flex justify-center my-40 md:my-64 spinner'></div>}>
              <Route path='/instructor' exact  render={()=> isLoggedIn ?  (<InstructorsDashBoard  />) :  (<CannotAccessPage/>)}/>
              </Suspense>
              <Suspense fallback={<div className='flex justify-center my-40 md:my-64 spinner'></div>}>
              <Route path='/student'   render={()=> isLoggedIn?  (<StudentDashBoard />) :  (<CannotAccessPage/>)}/>
              </Suspense>
              <Route path='/' exact component={LandingPage} />
              <Route path='/denied'  component={CannotAccessPage} />  
              <Route path="/not-found" component={NotFound} />
       </Suspense>
        </Switch>
       <FooterPage />
     </Router>
    </div>
  );
}

export default App;