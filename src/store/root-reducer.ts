import {combineReducers} from 'redux';
import loginReducer from '../features/login/reducer';
const rootReducer = combineReducers({
    login : loginReducer
});

export default rootReducer;
