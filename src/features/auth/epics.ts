import {Epic, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {filter, map, catchError, mergeMap, takeUntil} from 'rxjs/operators';
import {RootAction, RootState, Services, isActionOf} from 'typesafe-actions';
import {ajax} from 'rxjs/ajax';
import {loginAsync, signUpAsync} from './actions';
import qs from 'qs';
export const loginWithEmailEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(loginAsync.request)),
    mergeMap(action =>
      ajax
        .post(
          api.auth.LOGIN_WITH_EMAIL_URL,
          action.payload,
          api.auth.formEncodedHeader,
        )
        .pipe(
          map(response => {
            console.log('login success' + response);
            return loginAsync.success(response.response);
          }),
          takeUntil(action$.pipe(ofType(isActionOf(loginAsync.cancel)))),
          catchError(error => {
            console.log('login error ' + JSON.stringify(error.response));
            if (
              error.response != null &&
              error.response.error_description != null
            ) {
              return of(loginAsync.failure(error.response.error_description));
            }
            return of(loginAsync.failure(error));
          }),
        ),
    ),
  );
export const signUpWithEmail: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(signUpAsync.request)),
    mergeMap(action =>
      ajax
        .post(
          api.auth.SIGN_UP_WITH_EMAIL_URL,
          JSON.stringify(action.payload),
          api.auth.jsonHeader,
        )
        .pipe(
          map(response => {
            console.log('sign up success' + response);
            return signUpAsync.success(response.response);
          }),
          takeUntil(action$.pipe(ofType(isActionOf(signUpAsync.cancel)))),
          catchError(error => {
            console.log('sign up error ' + JSON.stringify(error.response));
            if (
              error.response != null &&
              error.response.error_description != null
            ) {
              return of(signUpAsync.failure(error.response.error_description));
            } else if (
              error.response != null &&
              error.response.message != null
            ) {
              return of(signUpAsync.failure(error.response.message));
            }
            return of(signUpAsync.failure(error));
          }),
        ),
    ),
  );
