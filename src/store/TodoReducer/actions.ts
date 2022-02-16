import * as CONST from './constants';

import { TodoItemType } from './types';

export const addTodo = (newTodo: TodoItemType) => {
  return {
    type: CONST.TODO_ADD,
    newTodo,
  } as const;
};

export const delTodo = (delId: string) => {
  return {
    type: CONST.TODO_DEL,
    delId,
  } as const;
};

type addTodoType = ReturnType<typeof addTodo>;
type delTodoType = ReturnType<typeof delTodo>;
export type ActionsType = addTodoType | delTodoType;
