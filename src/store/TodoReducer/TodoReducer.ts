import { InitialStateType } from './types';

import * as CONST from './constants';

import { ActionsType } from './actions';

const initialState: InitialStateType = {
  todos: [{ id: '1', title: 'Init todo', checked: false }],
};

export const TodoReducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case CONST.TODO_ADD:
      return { ...state, todos: [...state.todos, action.newTodo] };

    case CONST.TODO_DEL:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.delId),
      };

    default:
      return state;
  }
};
