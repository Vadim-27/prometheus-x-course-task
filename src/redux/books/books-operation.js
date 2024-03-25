import { createAsyncThunk } from '@reduxjs/toolkit';




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
export const putNewCountCart = createAsyncThunk(
  'books/NewCountCart',
  async (data, { rejectWithValue }) => {
    try {
      await data;

      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
export const deleteItemCart = createAsyncThunk(
  'books/deleteItem',
  async (data, { rejectWithValue }) => {
    try {
      await data;

      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
