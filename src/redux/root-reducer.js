import storage from 'redux-persist/lib/storage';

import booksSlice from './books/books-slice';
import persistReducer from 'redux-persist/es/persistReducer';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistBookReducer = persistReducer(persistConfig, booksSlice);

const rootReducer = combineReducers({
  books: persistBookReducer,
});

export default rootReducer;
