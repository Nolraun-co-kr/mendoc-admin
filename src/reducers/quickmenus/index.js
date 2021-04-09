import { createSlice } from '@reduxjs/toolkit';
import {GetAllQuickmenus} from './GetAllQuickMenus'

const name = '@Quickmenus';

const initialState = {
  loading: false,
  userError: null,
  quickmenus: [],
};

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [GetAllQuickmenus.pending]: (state, { payload }) => {
      state.loading = true;
      state.userError = null;

    },
    [GetAllQuickmenus.fulfilled]: (state, { payload }) => {
      state.quickmenus = payload;
      state.loading = false;
    },
    [GetAllQuickmenus.rejected]: (state, { payload }) => {
      state.loading = false;
      state.userError = payload;
    },
  },
});


export default slice.reducer;
