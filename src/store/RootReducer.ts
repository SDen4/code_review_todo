import { combineReducers } from 'redux';

import { todoReducer } from './Todo/ducks';
import { countReduser } from './Counter/ducks';

export const RootReducer = combineReducers({
  todoReducer,
  countReduser,
});

export type AppStateType = ReturnType<typeof RootReducer>;
