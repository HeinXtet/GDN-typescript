import {createAsyncAction} from 'typesafe-actions';
import {LoginRequest} from './models/request/LoginRequest';
import {SignUpRequest} from './models/request/SignUpRequest';

import {MemberData} from './models/response/MemberData';

export const loginAsync = createAsyncAction(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAIL',
)<LoginRequest, MemberData, string>();

export const signUpAsync = createAsyncAction(
  'SIGNUP_REQUEST',
  'SIGNUP_SUCCESS',
  'SIGNUP_FAIL',
)<SignUpRequest, MemberData, string>();
