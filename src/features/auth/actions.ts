import {createAsyncAction} from 'typesafe-actions';
import {LoginRequest} from './models/request/LoginRequest';
import {SignUpRequest} from './models/request/SignUpRequest';

import {MemberData} from './models/response/MemberData';

export const loginAsync = createAsyncAction(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAIL',
  'LOGIN_CANCEL',
)<LoginRequest, MemberData, string, undefined>();

export const signUpAsync = createAsyncAction(
  'SIGNUP_REQUEST',
  'SIGNUP_SUCCESS',
  'SIGNUP_FAIL',
  'SIGNUP_CANCEL',
)<SignUpRequest, MemberData, string, undefined>();
