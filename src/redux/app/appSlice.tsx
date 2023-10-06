import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AppStoreState {
  error?: string;
}

const initialState: AppStoreState = {};

export const appStoreSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = undefined;
    },
  },
});

const { reducer: appStoreReducer } = appStoreSlice;
export { appStoreReducer };
