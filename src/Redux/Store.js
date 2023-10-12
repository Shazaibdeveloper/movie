// store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import FilterReducer from "./FilterSlice";
import DetailReducer from "./DetailSlice";

const Store = configureStore({
  reducer: {
    movie: moviesReducer,
    tv: tvReducer,
    movies: FilterReducer,
    detail: DetailReducer,
  },
});

export default Store;
