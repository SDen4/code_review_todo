import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IItem {
  id: string;
  name: string;
  value: number;
}

interface ICustomSelect {
  data: Array<IItem>;
  loading: boolean;
}

const initialState = {
  data: [],
  loading: false,
} as ICustomSelect;

const CustomSelectSlice = createSlice({
  name: 'CS',
  initialState,
  reducers: {
    saveDataCS(state, action: PayloadAction<Array<IItem>>) {
      return { ...state, data: action.payload };
    },
    loadingCS(state, action: PayloadAction<boolean>) {
      return { ...state, loading: action.payload };
    },
    resetCS() {
      return initialState;
    },
  },
});

export const { saveDataCS, loadingCS, resetCS } = CustomSelectSlice.actions;
const CustomSelectReducer = CustomSelectSlice.reducer;
export { CustomSelectReducer };
