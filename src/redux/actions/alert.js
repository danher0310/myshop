import { 
    SET_ALERT, 
    REMOVE_ALERT 
} from "../constanst/auth";

export const setAlert = (msg, alertType, timeout = 1000000) => dispatch =>{
    dispatch({
        type: SET_ALERT,
        payload: {msg, alertType}
    });
    setTimeout ( () => dispatch({type: REMOVE_ALERT}), timeout)

}