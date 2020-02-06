import {combineEpics, Epic} from 'redux-observable';
import {loadTodosEpic} from '../features/login/epics';

export default combineEpics<Epic>(
    loadTodosEpic
);
