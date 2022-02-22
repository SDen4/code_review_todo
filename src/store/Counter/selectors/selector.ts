import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '../../../store/RootReducer';

export const selectCount = createSelector(
  (store: AppStateType) => store.countReduser,
  (countReduser) => countReduser.count,
);
