import { combineReducers } from 'redux';

import todoReducer from './Todo/ducks/duck';

export const RootReducer = combineReducers({
  todoReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
