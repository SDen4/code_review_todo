import { combineReducers } from 'redux';

import { todoReducer } from './Todo/ducks';
import { countReduser } from './Counter/ducks';
import { CustomSelectReducer } from './CustomSelect/reducer';

export const RootReducer = combineReducers({
  todoReducer,
  countReduser,
  CustomSelectReducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
