import {combineEpics, Epic} from 'redux-observable';
import {loadTodosEpic, loginWithEmailEpic} from '../features/auth/epics';
import {
  checkAvailableCountry,
  getMasterDataEpic,
} from '../features/splash/epics';

export default combineEpics<Epic>(
  loadTodosEpic,
  loginWithEmailEpic,
  checkAvailableCountry,
  getMasterDataEpic,
);
