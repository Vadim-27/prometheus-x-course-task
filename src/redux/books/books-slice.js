import { createSlice } from "@reduxjs/toolkit";

import { fetchAllBooks } from "./books-operation";
console.log('fetchAllBooks', fetchAllBooks());
const initialState = {
  items: [],
  cart:[],
  loading: false,
  error: null,
}

const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllBooks.fulfilled, (store, { payload }) => {
        console.log('payload', payload);
        store.loading = false;
        store.items = payload.books;
      })
    .addCase(fetchAllBooks.rejected, (store, {payload} )=> {
      store.loading = false;
      store.error = payload;
      })
  }
})
export default booksSlice.reducer;
