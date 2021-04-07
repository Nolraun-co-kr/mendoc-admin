import {
  configureStore, getDefaultMiddleware,
} from '@reduxjs/toolkit';
import reducer from '../reducers';

const middleware = [...getDefaultMiddleware({
  serializableCheck: false,
})];

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

