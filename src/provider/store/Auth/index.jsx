import {useReducer} from 'react';
import authReducer from '../../reducers/Auth'

export const InitialState = {
    isLoading:false
}
export default () => {
    const [state, dispatch] = useReducer(authReducer, InitialState);
    const handleLogin = data => dispatch({type: 'LOG_IN', payload: data})
    return {
        ...state,
        dispatch,
        handleLogin
    }
}