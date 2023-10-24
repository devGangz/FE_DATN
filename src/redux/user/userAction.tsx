import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

export const getUsers = createAsyncThunk("users/getUsers", async () => {});

export const login = createAsyncThunk(
  "/auth",
  async (param: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post("/auth/google", {
        code: param,
      });
      console.log("🚀 ~ file: userAction.tsx:14 ~ data:", data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "/user",
  async (param: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post("/user", param);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.message);
    }
  }
);
