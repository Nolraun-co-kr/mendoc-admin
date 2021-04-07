import {createAsyncThunk} from "@reduxjs/toolkit";
import {localLogin} from "../../lib/api/auth/localLogin";

export const PostLocalLogin = createAsyncThunk(
  `@Auth/fetchGetPosts`, async ({ email, password }, thunkAPI) => {
    try {
      const {data} = await localLogin({email, password});
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
