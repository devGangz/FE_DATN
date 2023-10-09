import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken, setAccessToken } from "../../utils/storage";
import { login } from "./userAction";

interface UserState {
  isLoadingUser: boolean;
  accessToken: string | null;
}

const initialState: UserState = {
  isLoadingUser: false,
  accessToken: getAccessToken(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("🚀 ~ file: userSlide.tsx:25 ~ .addCase ~ action:", action);
        state.isLoadingUser = false;
        setAccessToken(action.payload.access_token);
        state.accessToken = action.payload.access_token;
      });
  },
});

export const {} = userSlice.actions;
const { reducer: userReducer } = userSlice;
export { userReducer };
