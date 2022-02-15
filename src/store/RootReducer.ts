import { combineReducers } from 'redux';
import { TodoReducer } from './TodoReducer/TodoReducer';

export const RootReducer = combineReducers({
  todos: TodoReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
