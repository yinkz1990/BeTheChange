import {useReducer} from 'react';
import axios from 'axios';
import confirmReducer from '../../reducers/confirmUser'
import { initialState } from '../../reducers/confirmUser';
import { CONFIRM_USER, LOAD_USER, REGISTER_SUCCESFULLY } from '../../actions';


export default () => {
    const [state, dispatch] = useReducer(confirmReducer, initialState);


    const confirmUser = data =>dispatch({type: CONFIRM_USER, payload:data});
    const load = id =>dispatch({type: LOAD_USER, payload:id});
    const register = id =>dispatch({type:REGISTER_SUCCESFULLY, payload: id})

    const ENDPOINT = 'https://app-server20.herokuapp.com/users';

    const registerUser = async(user,token)=>{
        try{
            const response = await axios.post(ENDPOINT, user, {
                headers: {
                  "Content-Type": "application/json",
                },
              });

              localStorage.setItem("user_id", response.data.id);
                localStorage.setItem("userToken", token)

                register(response.data)
        }catch(e){
            console.log(e)
        }
    }

    const loadUser = async(id)=>{
        try {
            
            const response = await axios.get(`${ENDPOINT}/${id}`);
            load(response.data)

        } catch (error) {
            console.log(error)
        }
   
    }

    const checkUser = async (user, token)=>{
        try{
            const response = await axios.get(`${ENDPOINT}?email=${user.email}`);
            if (response.data.length === 1) {
                localStorage.setItem("user_id", response.data[0].id);
                localStorage.setItem("userToken", token);
                loadUser(localStorage.getItem('user_id'));
                confirmUser(response.data)
        }else{ 
            registerUser(user,token)
        }

        }catch(e){
            console.log(e)
        }
    }
     
    return {
        ...state, checkUser
    }
}
