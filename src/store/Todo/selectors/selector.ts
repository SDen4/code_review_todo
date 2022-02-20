import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '../../../store/RootReducer';

export const selectTodosList = createSelector(
  (store: AppStateType) => store.todoReducer,
  (todoReducer) => todoReducer.todos,
);
