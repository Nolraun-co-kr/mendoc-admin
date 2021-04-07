import { createSlice } from '@reduxjs/toolkit';
import {GetAllUser} from './GetAllUser'
import {GetOneUser} from './GetOneUser'

const name = '@User';

const initialState = {
  loading: false,
  userError: null,
  users: [],
  meta: null,
  userDetail: null,
};

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [GetAllUser.pending]: (state, { payload }) => {
      state.loading = true;
      state.userError = null;

    },
    [GetAllUser.fulfilled]: (state, { payload }) => {
      const {meta, rows} = payload;
      state.users = rows;
      state.meta = meta;
      state.loading = false;
    },
    [GetAllUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.userError = payload;
    },

    [GetOneUser.pending]: (state) => {
      state.loading = true;
      state.userDetail = null;
      state.userError = null;
    },
    [GetOneUser.fulfilled]: (state, { payload }) => {
      const {row} = payload;
      state.userDetail = row;
      state.loading = false;
    },
    [GetOneUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.userError = payload;
    },
  },
});

export const {
  setToken,
  logout,
} = slice.actions;

export default slice.reducer;
