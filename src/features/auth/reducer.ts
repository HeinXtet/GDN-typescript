import {combineReducers} from 'redux';
import {createReducer} from 'typesafe-actions';

import {loginAsync} from './actions';
import {MemberData} from './models/response/MemberData';

export const isLoadingAuth = createReducer(false as boolean)
  .handleAction([loginAsync.request], (state, action) => true)
  .handleAction(
    [loginAsync.success, loginAsync.failure],
    (state, action) => false,
  );

export const memberData = createReducer({} as MemberData).handleAction(
  loginAsync.success,
  (state, action) => action.payload,
);

export const authError = createReducer(null as string)
  .handleAction([loginAsync.failure], (state, action) => action.payload)
  .handleAction([loginAsync.request], (state, action) => null);

const loginReducer = combineReducers({
  memberData,
  isLoadingAuth,
  authError,
});

export default loginReducer;
export type TodosState = ReturnType<typeof loginReducer>;
