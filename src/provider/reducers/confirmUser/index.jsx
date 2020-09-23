
import { CONFIRM_USER, LOAD_USER, REGISTER_SUCCESFULLY } from '../../actions';


export const initialState = {
    user: []
}

const confirmReducer = (state = initialState, action) => {
            switch (action.type) {
                case CONFIRM_USER: 
                return {
                  user: [...state.user, action.payload] 
                }  
                    case LOAD_USER:return {
                      user: [...state.user, action.payload] 
                    } 

                    case REGISTER_SUCCESFULLY: return {
                      user: [...state.user, action.payload] 
                    } 
            
                default: return state
            }
}
 
export default confirmReducer;