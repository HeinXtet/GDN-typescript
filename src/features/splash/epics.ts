import {Epic} from 'redux-observable';
import {of, merge} from 'rxjs';
import {
  filter,
  switchMap,
  map,
  catchError,
  mergeMap,
  flatMap,
} from 'rxjs/operators';
import {RootAction, RootState, Services, isActionOf} from 'typesafe-actions';
import * as authAction from './actions';
import {IpModel} from 'IpModel';
import {MasterData} from 'MasterData';
import {ajax} from 'rxjs/ajax';
import {filter as find, isEmpty} from 'lodash';
const checkAvailableCountry: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, {api}) =>
  action$.pipe(
    filter(isActionOf(authAction.checkAvailableIp.request)),
    switchMap(action =>
      ajax.getJSON<IpModel>(api.auth.IP_STACK_URL).pipe(
        map(response => {
          if (response.error != undefined) {
            return authAction.checkAvailableIp.failure(response.error.type);
          } else {
            var testIp = {
              code: 'SG',
              name: 'Singapore',
              default_currency: 'sgd',
            };
            let countries = action.payload.data.countries;
            console.log(
              'check ip payload ' + JSON.stringify(countries.toString()),
            );
            var userIp = {
              code: response.country_code,
              name: response.country_name,
              default_currency: response.currency.code.toString().toLowerCase(),
            };
            if (!isEmpty(find(countries, testIp))) {
              return authAction.checkAvailableIp.success(response);
            } else {
              return authAction.checkAvailableIp.failure(
                'GetDateNow is not supported in this country yet.',
              );
            }
          }
        }),
        catchError(e => {
          console.log('check ip error ' + e);
          return of(
            authAction.checkAvailableIp.failure(
              'GetDateNow is not supported in this country yet.',
            ),
          );
        }),
      ),
    ),
  );

const getMasterDataEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  {api},
) =>
  action$.pipe(
    filter(isActionOf(authAction.getMasterData.request)),
    mergeMap(() =>
      ajax.getJSON<MasterData>(api.auth.MASTER_DATA_URL, api.auth.header).pipe(
        flatMap(response => {
          if (response.errorCode != 0) {
            return of(authAction.getMasterData.failure(response.message));
          } else {
            return merge(
              of(authAction.getMasterData.success(response)),
              of(authAction.checkAvailableIp.request(response)),
            );
          }
        }),
        catchError(e => {
          console.log('master data error ' + JSON.stringify(e));
          return of(authAction.getMasterData.failure(e));
        }),
      ),
    ),
  );

export {checkAvailableCountry, getMasterDataEpic};
