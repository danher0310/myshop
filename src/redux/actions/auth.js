import axios from "axios";
import { SINGUP_SUCCESS, SINGUP_FAIL } from "../constanst/auth";


export const signup = (username, first_name, last_name, email, password,re_password) => async dispatch =>{
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
        if(res.status === 201){
            dispatch({
                type: SINGUP_SUCCESS,
                payload: res.data
            })
        }
        else{
            dispatch({
                type: SINGUP_FAIL
            })
        }
    } catch (err) {
        dispatch({
            type: SINGUP_FAIL
           
        })
    }
}
    