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

    case CONST.TODO_DEL:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.delId),
      };

    case CONST.TODO_CHECK:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.checkedId ? { ...el, checked: !el.checked } : el,
        ),
      };

    default:
      return state;
  }
};
