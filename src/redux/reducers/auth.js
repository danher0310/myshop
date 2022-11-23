import { 
    SINGUP_SUCCESS, 
    SINGUP_FAIL, 
    ACTIVATION_FAIL, 
    ACTIVATION_SUCCESS,
    SET_AUTH_LOADING, 
    REMOVE_AUTH_LOADING  
} from "../constanst/auth";

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
        case SET_AUTH_LOADING:
            return{
                ...state,
                loading: true
            }
            
        case REMOVE_AUTH_LOADING:
            return{
                ...state,
                loading: false
            }
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return{
                ...state
            }

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

