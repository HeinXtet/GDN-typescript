import {combineEpics, Epic} from 'redux-observable';
import {loadTodosEpic} from '../features/auth/epics';

export default combineEpics<Epic>(
    loadTodosEpic
);
