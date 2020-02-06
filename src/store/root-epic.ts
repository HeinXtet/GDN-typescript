import {combineEpics, Epic} from 'redux-observable';
import {loadTodosEpic} from '../features/auth/epics';
import {
  checkAvailableCountry,
  getMasterDataEpic,
} from '../features/splash/epics';

export default combineEpics<Epic>(
  loadTodosEpic,
  checkAvailableCountry,
  getMasterDataEpic,
);
