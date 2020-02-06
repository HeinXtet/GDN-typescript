import { combineReducers } from 'redux';
import loginReducer from '../features/auth/reducer';
import checkIpReducer from '../features/splash/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    ip: checkIpReducer
});

export default rootReducer;
