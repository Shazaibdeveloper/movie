import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  filter: "movies", // Default filter option
};

const FilterSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setMovies, setFilter } = FilterSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectFilter = (state) => state.movies.filter;

export default FilterSlice.reducer;
