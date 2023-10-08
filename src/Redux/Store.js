// store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import FilterReducer from "./FilterSlice";

const Store = configureStore({
  reducer: {
    movies: moviesReducer,
    tv: tvReducer,
    movies: FilterReducer,
  },
});

export default Store;
