import { createReducer } from 'typesafe-actions';
import { checkAvailableIp } from './actions';
import { combineReducers } from 'redux';
import { IpModel } from 'IpModel';



export const errorInCheckAvailableIp = createReducer(null as String)
    .handleAction([checkAvailableIp.failure], (state, action) => action.payload)


export const successInCheckAvailableIp = createReducer(null as IpModel)
    .handleAction([checkAvailableIp.success], (state, action) => action.payload)


const checkIpReducer = combineReducers({
    successInCheckAvailableIp,
    errorInCheckAvailableIp
});

export default checkIpReducer;
export type IpState = ReturnType<typeof checkIpReducer>;
