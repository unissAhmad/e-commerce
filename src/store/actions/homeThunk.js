import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../http";
const homeProductsThunk = createAsyncThunk("home/fetchProducts", async ({ limit }) => {
  const { data } = await http(`/products?limit=${limit}`);
  return data;
});

export { homeProductsThunk };
