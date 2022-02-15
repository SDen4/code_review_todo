import * as CONST from './constants';

import { TodoItemType } from './types';

export const addTodo = (newTodo: TodoItemType) => {
  return {
    type: CONST.TODO_ADD,
    newTodo,
  } as const;
};

type addTodoType = ReturnType<typeof addTodo>;
export type ActionsType = addTodoType;
