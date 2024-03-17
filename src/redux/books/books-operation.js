import { createAsyncThunk } from '@reduxjs/toolkit';

import dataBooks from '../../shared/services/books';
console.log('dataBooks', dataBooks);

export const fetchAllBooks = createAsyncThunk(
  'books/AllBooks',
  async (data, { rejectWithValue }) => {
    try {
      await data;
      // const result =  dataBooks;
      console.log('result', data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
