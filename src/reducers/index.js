import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth'
import users from './users'
import quickmenus from './quickmenus'

const reducer = combineReducers({
  auth,
  users,
  quickmenus
});

export default reducer;
