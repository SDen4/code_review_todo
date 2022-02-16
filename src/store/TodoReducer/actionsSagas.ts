import * as CONST from './constants';

export const findPictureSaga = (newTodoTitle: string) => {
  return {
    type: CONST.TODO_FIND_PICTURE_SAGA,
    newTodoTitle,
  } as const;
};
