import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAllQuickmenus } from '../../lib/api/quickmenus'

export const GetAllQuickmenus = createAsyncThunk(
  `@QuickMenus/GetAllQuickMenus`, async (_, thunkAPI) => {
    try {
      const {data} = await getAllQuickmenus();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
