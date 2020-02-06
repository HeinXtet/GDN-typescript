import {combineReducers} from 'redux';
import loginReducer from '../features/auth/reducer';
const rootReducer = combineReducers({
    login : loginReducer
});

export default rootReducer;
