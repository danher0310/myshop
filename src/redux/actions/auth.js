import axios from "axios";
import { SINGUP_SUCCESS, SINGUP_FAIL } from "../constanst/auth";


export const singup = (username, first_name, last_name, email, password,repassword) => async dispatch =>{
    const config = {
        headers: {
            'Content-type': 'application/json'
        }        
    }
    const body = JSON.stringify({
        username,
        first_name, 
        last_name,
        email,
        password,
        repassword
    })
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
    