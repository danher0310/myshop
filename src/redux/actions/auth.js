import axios from "axios";
import { json } from "react-router-dom";
import { 
    SINGUP_SUCCESS, 
    SINGUP_FAIL, 
    ACTIVATION_FAIL, 
    ACTIVATION_SUCCESS, 
    SET_AUTH_LOADING, 
    REMOVE_AUTH_LOADING, 
    LOGIN_SUCCESS,
    LOGIN_FAIL,


} from "../constanst/auth";

import { setAlert } from "./alert";
export const signup = (username, first_name, last_name, email, password,re_password) => async dispatch =>{
    dispatch({
        type: SET_AUTH_LOADING
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }        
    }
    const body = JSON.stringify({
        username,
        first_name, 
        last_name,
        email,
        password,
        re_password
    })
    console.log(body)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config)
        console.log('aqui')
        console.log(res)
        if(res.status === 201){
            dispatch({
                type: SINGUP_SUCCESS,
                payload: res.data
            })
            
            dispatch(setAlert('We send you a email, please check your email account','green' ))
        }

        else{
            dispatch({
                type: SINGUP_FAIL
            })
            dispatch(setAlert('Something is wrong, please try again','red' ))
        }

        dispatch({
            type: SET_AUTH_LOADING
        });
    } catch (err) {
        dispatch({
            type: SINGUP_FAIL,     
            payload:err.response.data, 
                
        });
          
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
        console.log(err.response.data)
        const response = JSON.stringify(err.response.data)
        // for(let i in response[i]){
        //     console.log(response[i])
        // }+
       
        console.log(response)

        
        // dispatch(
        //     JSON.parse(err.request.response, (key, value) => {
        //         console.log(value)
            
        //         setAlert(value,'red' )
                
        //     })
        // )
        // JSON.parse(err.request.response, (key, value) => {
            
        //     console.log(value)
            
        // })
        dispatch(setAlert(err.request.response,'red' ))
    }
    
}

export const login = ( email, password) => async dispatch=> {

    dispatch({
        type: SET_AUTH_LOADING
    });
    const config= {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({
        email, 
        password
    })
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create`, body, config)
        if (res.status === 200){

        }
    } catch (error) {
        
    }

}

export const activate = (uid, token) => async dispatch =>{
    dispatch({
        type: SET_AUTH_LOADING
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }  
    };
    const body = JSON.stringify({
        uid,
        token 
        
    });
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config)
        if(res.status === 204){
            dispatch({
                type: ACTIVATION_SUCCESS,
                payload: res.data
            })
            dispatch(setAlert('Your account is active','green' ))
        }
        else{
            dispatch({
                type: ACTIVATION_FAIL,
                
            })
            dispatch(setAlert('Something is wrong, please try again','red' ))
        }
        dispatch({
            type: REMOVE_AUTH_LOADING,
            
        });
    } catch (error) {
        dispatch({
            type: ACTIVATION_FAIL
        })
        dispatch({
            type: REMOVE_AUTH_LOADING
        });
        dispatch(setAlert('We can not connected with the server, try again','red' ))
        
    }
}
