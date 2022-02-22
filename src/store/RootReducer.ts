import { combineReducers } from 'redux';

import todoReducer from './Todo/ducks/duck';
import countReduser from './Counter/ducks/duck';

export const RootReducer = combineReducers({
  todoReducer,
  countReduser,
});

export type AppStateType = ReturnType<typeof RootReducer>;
