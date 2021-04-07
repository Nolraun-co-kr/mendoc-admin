import {createAsyncThunk} from "@reduxjs/toolkit";
import { getOneUser } from '../../lib/api/users'

export const GetOneUser = createAsyncThunk(
  `@User/GetOneUser`, async (_data, thunkAPI) => {
    try {
      const {data} = await getOneUser(_data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
