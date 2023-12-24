import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./reducers/homeSlice";
import { HOME_REDUCER } from "./reducerNames";

export const store = configureStore({
  reducer: {
    homew: homeReducer,
  },
  devTools: true,
});

export * from "./actions/homeThunk"