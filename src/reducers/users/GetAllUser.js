import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAllUser } from '../../lib/api/users'

export const GetAllUser = createAsyncThunk(
  `@User/GetAllUser`, async ({ query }, thunkAPI) => {
    try {
      console.log(query)
      const {data} = await getAllUser({ query });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
