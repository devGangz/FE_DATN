import { createSlice } from "@reduxjs/toolkit";
import {
  clearStorage,
  getAccessToken,
  setAccessToken,
  setUserId,
} from "../../utils/storage";
import { getUser, login } from "./userAction";
import { User } from "../../types/user";
import { toast } from "sonner";

interface UserState {
  isLoadingUser: boolean;
  accessToken: string | null;
  currentUser?: User;
}

const initialState: UserState = {
  isLoadingUser: false,
  accessToken: getAccessToken(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      clearStorage();
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        setAccessToken(action.payload.access_token);
        state.accessToken = action.payload.access_token;
        setUserId(action.payload.data.id);
      })

      // get user
      .addCase(getUser.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.currentUser = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoadingUser = false;
        if (action.payload) toast.error(action.payload.toString());
      });
  },
});

export const { logOut } = userSlice.actions;
const { reducer: userReducer } = userSlice;
export { userReducer };
