import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '../../../store/RootReducer';

export const selectTodosList = createSelector(
  (store: AppStateType) => store.todoReducer,
  (todoReducer) => todoReducer.todos,
);

export const selectError = createSelector(
  (store: AppStateType) => store.todoReducer,
  (todoReducer) => todoReducer.todosError,
);

export const selectLoader = createSelector(
  (store: AppStateType) => store.todoReducer,
  (todoReducer) => todoReducer.loading,
);
