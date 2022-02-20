import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

import { TodoItemType } from '../types';

const initialState: TodoItemType[] = [];

// Actions ==========================

const todo = 'todo';

export const todoAddReq = createAction<string>(`${todo}/ADD_REQ`);
export const todoDelReq = createAction<string>(`${todo}/DEL_REQ`);
export const todoCheckReq = createAction<string>(`${todo}/CHECK_REQ`);
export const todoErrorReq = createAction(`${todo}/ERROR_REQ`);

export const todoUpdateListSuccess = createAction(
  `${todo}/UPDATE_LIST_SUCCESS`,
);
export const todoUpdateListError = createAction(`${todo}/UPDATE_LIST_ERROR`);
export const todoLoading = createAction<boolean>(`${todo}/LOADING`);

// Reducers ==========================

const todos = createReducer(initialState, {
  [todoUpdateListSuccess.toString()]: (_state, action) => action.payload.todos,
});
const todosError = createReducer(false, {
  [todoUpdateListError.toString()]: (_state) => true,
});
const loading = createReducer(false, {
  [todoLoading.toString()]: (_state, action) => action.payload,
});

// Root Reducer
const todoReducer = combineReducers({
  todos,
  todosError,
  loading,
});

export default todoReducer;
