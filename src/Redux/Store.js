// store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import FilterReducer from "./FilterSlice";
import tvSlice from "./TvFilter";
import DetailReducer from "./DetailSlice";
import searchReducer from "./searchSlice";

const Store = configureStore({
  reducer: {
    movie: moviesReducer,
    tv: tvReducer,
    movies: FilterReducer,
    detail: DetailReducer,
    tvSlice: tvSlice,
    search: searchReducer,
  },
});

export default Store;
