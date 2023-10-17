import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  filter: "airing_today",
};

const FilterSlice = createSlice({
  name: "tvSlice",
  initialState: initialState,
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

export const selectMovies = (state) => state.tvSlice.movies;
export const selectFilter = (state) => state.tvSlice.filter;

export default FilterSlice.reducer;
