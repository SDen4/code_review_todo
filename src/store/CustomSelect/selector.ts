import { createSelector } from '@reduxjs/toolkit';
import { AppStateType } from '../RootReducer';

export const dataSelect = createSelector(
  (store: AppStateType) => store.CustomSelectReducer.data,
  (data) => data,
);
export const loadingSelect = createSelector(
  (store: AppStateType) => store.CustomSelectReducer.loading,
  (loading) => loading,
);
