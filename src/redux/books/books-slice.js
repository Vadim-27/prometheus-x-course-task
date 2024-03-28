import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllBooks,
  fetchCart,
  fetchCleanCart,
  putNewCountCart,
  deleteItemCart,
} from './books-operation';

const initialState = {
  items: [],
  cart: [],
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllBooks.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllBooks.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllBooks.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchCart.pending, store => {
        store.loading = true;
      })
      .addCase(fetchCart.fulfilled, (store, { payload }) => {
        store.loading = false;
        const uniqueData = store.cart.filter(item => item.id !== payload.id);

        uniqueData.push(payload);

        localStorage.setItem('cart', JSON.stringify(uniqueData));

        store.cart = uniqueData;
      })
      .addCase(fetchCart.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchCleanCart.pending, store => {
        store.loading = true;
      })
      .addCase(fetchCleanCart.fulfilled, (store, { payload }) => {
        store.loading = false;

        store.cart = payload;
      })
      .addCase(fetchCleanCart.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(putNewCountCart.pending, store => {
        store.loading = true;
      })
      .addCase(putNewCountCart.fulfilled, (store, { payload }) => {
        store.loading = false;

        const uniqueData = store.cart.filter(item => item.id !== payload.id);

        uniqueData.push(payload);

        localStorage.setItem('cart', JSON.stringify(uniqueData));

        store.cart = uniqueData;
      })
      .addCase(putNewCountCart.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteItemCart.pending, store => {
        store.loading = true;
      })
      .addCase(deleteItemCart.fulfilled, (store, { payload }) => {
        store.loading = false;

        const uniqueData = store.cart.filter(item => item.id !== payload.id);



        localStorage.setItem('cart', JSON.stringify(uniqueData));

        store.cart = uniqueData;

      })
      .addCase(deleteItemCart.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export default booksSlice.reducer;
