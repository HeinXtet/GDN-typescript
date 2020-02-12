import {createReducer} from 'typesafe-actions';
import {checkAvailableIp, getMasterData} from './actions';
import {combineReducers} from 'redux';
import {IpModel} from 'IpModel';
import {MasterData} from 'MasterData';

export const errorInCheckAvailableIp = createReducer(
  null as String,
).handleAction([checkAvailableIp.failure], (state, action) => action.payload);

export const successInCheckAvailableIp = createReducer(
  null as IpModel,
).handleAction([checkAvailableIp.success], (state, action) => action.payload);

export const successMasterData = createReducer(null as MasterData).handleAction(
  [getMasterData.success],
  (state, action) => action.payload,
);

const checkIpReducer = combineReducers({
  successInCheckAvailableIp,
  errorInCheckAvailableIp,
  successMasterData,
});

export default checkIpReducer;
export type CommonState = ReturnType<typeof checkIpReducer>;
