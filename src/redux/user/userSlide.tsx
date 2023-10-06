import { createSlice } from "@reduxjs/toolkit";
import { getAccessToken } from "../../utils/storage";

interface UserState {
  loadingUser: boolean;
  accessToken: string | null;
}

const initialState: UserState = {
  loadingUser: false,
  accessToken: getAccessToken(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export const {} = userSlice.actions;
const { reducer: userReducer } = userSlice;
export { userReducer };
