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

export const checkTodo = (checkedId: string) => {
  return {
    type: CONST.TODO_CHECK,
    checkedId,
  } as const;
};

type addTodoType = ReturnType<typeof addTodo>;
type delTodoType = ReturnType<typeof delTodo>;
type checkTodoType = ReturnType<typeof checkTodo>;
export type ActionsType = addTodoType | delTodoType | checkTodoType;
