import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAllUser } from '../../lib/api/users'

export const GetAllUser = createAsyncThunk(
  `@User/GetAllUser`, async (query, thunkAPI) => {
    try {
      const {data} = await getAllUser(query);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
