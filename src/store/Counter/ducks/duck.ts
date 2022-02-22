import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const counter = 'counter';

// Actions ====================================================
export const counterInc = createAction(`${counter}/INCREMENT`);
export const counterDecr = createAction(`${counter}/DECREMENT`);

export const counterUpd = createAction<number>(`${counter}/UPDATE`);

// Reducers ===================================================
const count = createReducer(0, {
  [counterUpd.toString()]: (_state, action) => action.payload,
});

// Root reducer ===============================================
const countReduser = combineReducers({ count });

export default countReduser;
