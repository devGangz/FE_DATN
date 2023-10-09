import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";
import { LoginPayload } from "../../types/auth";

export const getUsers = createAsyncThunk("users/getUsers", async () => {});

export const login = createAsyncThunk(
  "/user/login",
  async (param: LoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post("/user/login", param);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.message);
    }
  }
);
