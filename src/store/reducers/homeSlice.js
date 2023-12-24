import { createSlice } from "@reduxjs/toolkit";
import { homeProductsThunk } from "../actions/homeThunk";
import { HOME_REDUCER } from "../reducerNames";
const initialState = {
  products: [],
  limit: 24,
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(homeProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const homeReducer = homeSlice.reducer;
