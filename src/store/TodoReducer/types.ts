import { TODO_FIND_PICTURE_SAGA } from './constants';

export type TodoItemType = {
  id: string;
  title: string;
  checked: boolean;
  pic: string;
};

export type InitialStateType = {
  todos: TodoItemType[];
};

export type FindPictureSagaWorkerType = {
  type: typeof TODO_FIND_PICTURE_SAGA;
  newTodoTitle: string;
};
