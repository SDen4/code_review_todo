import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const todo = 'todo';

// Actions ==========================
export const todoAddReq = createAction<string>(`${todo}/ADD_REQ`);
export const todoDelReq = createAction<string>(`${todo}/DEL_REQ`);
export const todoCheckReq = createAction<string>(`${todo}/CHECK_REQ`);
export const todoErrReq = createAction(`${todo}/ERR_REQ`);

export const todoUpdListSucc = createAction(`${todo}/UPD_LIST_SUCC`);
export const todoUpdListErr = createAction(`${todo}/UPD_LIST_ERR`);
export const todoLoading = createAction<boolean>(`${todo}/LOADING`);

// Reducers ==========================

const todos = createReducer([], {
  [todoUpdListSucc.toString()]: (_state, action) => action.payload.todos,
});

const todosError = createReducer(false, {
  [todoUpdListErr.toString()]: (_state) => true,
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
