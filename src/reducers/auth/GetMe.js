import {createAsyncThunk} from "@reduxjs/toolkit";
import {getOneUser} from "../../lib/api/users/getOneUser";

export const GetMe = createAsyncThunk(
  `@Auth/GetMe`, async ({id}, thunkAPI) => {
    try {
      const {data} = await getOneUser({id});
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
