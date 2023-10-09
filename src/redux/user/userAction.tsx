import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";
import { LoginPayload } from "../../types/auth";

export const getUsers = createAsyncThunk("users/getUsers", async () => {});

export const login = createAsyncThunk(
  "/auth",
  async (param: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post("/auth", { token: param });
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "/user",
  async (param: LoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post("/user", param);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.message);
    }
  }
);
