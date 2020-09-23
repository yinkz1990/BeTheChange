import {ADD_CONTENT, ADD_FAVOURITE, DELETE_COURSES,DELETE_COURSE, REMOVE_FAVOURITE, GET_AUTHOR, GET_COURSE, GET_USER_COURSES, GET_FAVOURITES, ADD_RATING, GET_COURSES} from '../../actions'
export const initialCourseState = {
    courses: [],
    authors: [],
    author: [],
    favCourses: [],
    stars: [],
    userCourses: [],
    course: []
  }

const CourseReducer= (state=initialCourseState, action)=>{
    switch(action.type){
          case ADD_CONTENT: 
            return {
              ...state, courses: action.payload
            }  
            case ADD_FAVOURITE: return{
              ...state, favCourses: action.payload
            } 
            case REMOVE_FAVOURITE: return {
              ...state, favCourses:state.favCourses.filter(fav =>fav.id !== action.payload)
            }
            case ADD_RATING: return {
              ...state, stars: action.payload
            }
            
            case GET_COURSE: return {
              ...state, course: action.payload
            }
            case DELETE_COURSE: return {
              ...state, course: state.courses.filter(a => a.id !== action.payload)
            }
            case GET_COURSES: return {
              ...state, courses: action.payload
            }
            case DELETE_COURSES: return {
              ...state, courses: state.courses.filter(course => course.id !== action.payload)
            }
            case GET_AUTHOR: return {
              ...state, author:action.payload
            }
            case GET_USER_COURSES: return {
              ...state, userCourses: action.payload
            }
            case GET_FAVOURITES: return {
              ...state, favCourses:action.payload
            }
         default:
           return state
  }
}      
export default CourseReducer


