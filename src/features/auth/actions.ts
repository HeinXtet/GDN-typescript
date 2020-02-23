import {Todo} from 'MyModels';

import {createAction, createAsyncAction} from 'typesafe-actions';
import {LoginRequest} from 'LoginRequest';
import {MemberData} from 'MemberData';

export const addTodo = createAction('ADD_TODO', (title: string) => ({
  id: '23',
  title,
}))<Todo>();

export const removeTodo = createAction('REMOVE_TODO')<string>();

export const loadTodosAsync = createAsyncAction(
  'LOAD_TODOS_REQUEST',
  'LOAD_TODOS_SUCCESS',
  'LOAD_TODOS_FAILURE',
)<undefined, Todo[], string>();

export const saveTodosAsync = createAsyncAction(
  'SAVE_TODOS_REQUEST',
  'SAVE_TODOS_SUCCESS',
  'SAVE_TODOS_FAILURE',
)<undefined, undefined, string>();

export const loginAsync = createAsyncAction(
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAIL',
)<LoginRequest, MemberData, string>();
