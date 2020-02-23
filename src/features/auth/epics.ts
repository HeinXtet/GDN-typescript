import {Epic} from 'redux-observable';
import {from, of} from 'rxjs';
import {filter, switchMap, map, catchError, mergeMap} from 'rxjs/operators';
import {RootAction, RootState, Services, isActionOf} from 'typesafe-actions';
import {loadTodosAsync, saveTodosAsync, loginAsync} from './actions';
import {getTodos} from './selectors';
import {ajax} from 'rxjs/ajax';

export const loadTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    switchMap(() =>
      from(api.todos.loadSnapshot()).pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message))),
      ),
    ),
  );

export const saveTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(saveTodosAsync.request)),
    switchMap(() =>
      from(api.todos.saveSnapshot(getTodos(state$.value.login))).pipe(
        map(saveTodosAsync.success),
        catchError((message: string) => of(saveTodosAsync.failure(message))),
      ),
    ),
  );

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
        .post(api.auth.LOGIN_WITH_EMAIL_URL, action.payload, api.auth.header)
        .pipe(
          map(response => {
            console.log('login success' + response);
            return loginAsync.success(response.response);
          }),
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
