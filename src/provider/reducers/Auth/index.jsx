import {LOG_IN} from '../../actions'

const InitialState = {
  authDetails: [],
  isLoggedIn : false
}
const authStore = (state=InitialState, action) => {  
    switch (action.type) {
      case LOG_IN: return{
        ...state, authDetails: action.payload,
        isLoggedIn: true
      }    
      default: return state
    }
}
export default authStore;


