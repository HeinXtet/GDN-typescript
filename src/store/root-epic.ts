import {combineEpics, Epic} from 'redux-observable';
import {loginWithEmailEpic, signUpWithEmail} from '../features/auth/epics';
import {
  checkAvailableCountry,
  getMasterDataEpic,
} from '../features/splash/epics';

export default combineEpics<Epic>(
  loginWithEmailEpic,
  signUpWithEmail,
  checkAvailableCountry,
  getMasterDataEpic,
);
