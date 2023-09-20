// store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

const Store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default Store;
