import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import {deleteItem, saveItem} from '../../lib/storage';
import {PostLocalLogin} from './PostLocalLogin'
import {GetMe} from './GetMe'

export const name = '@Auth';
const initialState = {
  accessToken: '',
  expiresIn: '',
  userId: '',
  loggedIn: false,
  loading: false,
  authError: null,
  me: null,
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      const { access_token } = payload;
      const decoded = jwt_decode(access_token);
      const { id, exp } = decoded;

      state.loading = false;
      if(new Date(exp*1000) > new Date()) {
        state.accessToken = access_token;
        state.expiresIn = exp;
        state.userId = id;
        state.loggedIn = true;
      } else {
        deleteItem('access_token');
      }
    },
    logout: (state) => {
      deleteItem('access_token');
      state.loggedIn = false;
      state.accessToken = '';
      state.expiresIn = '';
      state.userId = '';
    },
  },
  extraReducers: {
    [PostLocalLogin.pending]: (state) => {
      state.loading = true;
      state.authError = null;
    },
    [PostLocalLogin.fulfilled]: (state, { payload }) => {
      const { access_token } = payload;
      saveItem('access_token', access_token);
      const decoded = jwt_decode(access_token);
      const { id, exp } = decoded;

      state.loading = false;
      state.accessToken = access_token;
      state.expiresIn = exp;
      state.userId = id;
      state.loggedIn = true;
    },
    [PostLocalLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.authError = payload;
      state.loggedIn = false;
      deleteItem('access_token');
    },

    [GetMe.pending]: (state) => {
      state.loading = true;
      state.authError = null;
      state.me = null;
    },
    [GetMe.fulfilled]: (state, { payload }) => {
      const {row} = payload;
      state.me = row;
    },
    [GetMe.rejected]: (state, { payload }) => {
      state.authError = payload;
    },
  },
});

export const {
  setToken,
  logout,
} = slice.actions;

export default slice.reducer;
