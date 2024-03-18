import { createAsyncThunk } from '@reduxjs/toolkit';

import dataBooks from '../../shared/services/books';
console.log('dataBooks', dataBooks);

export const fetchAllBooks = createAsyncThunk(
  'books/AllBooks',
  async (data, { rejectWithValue }) => {
    try {
      await data;

      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
export const fetchCart = createAsyncThunk(
  'books/Cart',
  async (data, { rejectWithValue }) => {
    try {
      await data;

      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }

);
export const fetchCleanCart = createAsyncThunk(
  'books/CleanCart',
  async (data, { rejectWithValue }) => {
    try {
      await data;

      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
