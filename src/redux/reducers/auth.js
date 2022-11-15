import { SINGUP_SUCCESS, SINGUP_FAIL } from "../constanst/auth";

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'), 
    isAuthenticated: null, 
    user: null, 
    loading: false
    
}

export default function Auth( state = initialState, action){
    const {type, payload } = action;

    switch(type){
        case SINGUP_SUCCESS:
        case SINGUP_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access:null,
                refresh:null,
                isAuthenticated: false, 
                user: null, 
            }
            
        default:
            return state
    }
}
