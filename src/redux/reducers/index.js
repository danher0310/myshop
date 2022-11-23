import { combineReducers } from 'redux';
import Auth from './auth.js';
import Alert from './alerts.js';
export default combineReducers({
    Auth,
    Alert
    
})