// store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice";

const Store = configureStore({
  reducer: {
    movies: moviesReducer,
    tv: tvReducer,
  },
});

export default Store;
