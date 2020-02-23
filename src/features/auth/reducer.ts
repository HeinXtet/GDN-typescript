import {Todo} from 'MyModels';
import {combineReducers} from 'redux';
import {createReducer} from 'typesafe-actions';

import {loadTodosAsync, addTodo, removeTodo, loginAsync} from './actions';
import {MemberData} from 'MemberData';

export const isLoadingTodos = createReducer(false as boolean)
  .handleAction([loadTodosAsync.request], (state, action) => true)
  .handleAction(
    [loadTodosAsync.success, loadTodosAsync.failure],
    (state, action) => false,
  );

export const todos = createReducer([
  {
    id: '0',
    title: 'You can add new todos using the form or load saved snapshot...',
  },
] as Todo[])
  .handleAction(loadTodosAsync.success, (state, action) => action.payload)
  .handleAction(addTodo, (state, action) => [...state, action.payload])
  .handleAction(removeTodo, (state, action) =>
    state.filter(i => i.id !== action.payload),
  );

export const isLoadingAuth = createReducer(false as boolean)
  .handleAction([loginAsync.request], (state, action) => true)
  .handleAction(
    [loginAsync.success, loginAsync.failure],
    (state, action) => false,
  );

export const memberData = createReducer({} as MemberData).handleAction(
  loginAsync.success,
  (state, action) => action.payload,
);

export const authError = createReducer({} as string).handleAction(
  [loginAsync.failure],
  (state, action) => action.payload,
);

const loginReducer = combineReducers({
  isLoadingTodos,
  todos,
  memberData,
  isLoadingAuth,
  authError,
});

export default loginReducer;
export type TodosState = ReturnType<typeof loginReducer>;
