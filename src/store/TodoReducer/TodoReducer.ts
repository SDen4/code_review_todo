import { InitialStateType } from './types';

import * as CONST from './constants';

import { ActionsType } from './actions';

const initialState: InitialStateType = {
  todos: [],
};

export const TodoReducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case CONST.TODO_ADD:
      return { ...state, todos: [...state.todos, action.newTodo] };

    default:
      return state;
  }
};
