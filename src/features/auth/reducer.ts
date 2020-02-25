import {combineReducers} from 'redux';
import {createReducer} from 'typesafe-actions';

import {loginAsync, signUpAsync} from './actions';
import {MemberData} from './models/response/MemberData';

export const isLoadingAuth = createReducer(false as boolean)
  .handleAction(
    [loginAsync.request, signUpAsync.request],
    (state, action) => true,
  )
  .handleAction(
    [
      loginAsync.success,
      loginAsync.failure,
      signUpAsync.failure,
      signUpAsync.success,
      loginAsync.cancel,
      signUpAsync.cancel,
    ],
    (state, action) => false,
  );

export const memberData = createReducer({} as MemberData).handleAction(
  loginAsync.success,
  (state, action) => action.payload,
);

export const authError = createReducer(null as string)
  .handleAction(
    [loginAsync.failure, signUpAsync.failure],
    (state, action) => action.payload,
  )
  .handleAction(
    [
      loginAsync.request,
      signUpAsync.request,
      loginAsync.cancel,
      signUpAsync.cancel,
    ],
    (state, action) => null,
  );

const loginReducer = combineReducers({
  memberData,
  isLoadingAuth,
  authError,
});

export default loginReducer;
export type TodosState = ReturnType<typeof loginReducer>;
