// movieSlice.js

import { createSlice } from "@reduxjs/toolkit";

const DetailSilce = createSlice({
  name: "detail",
  initialState: {
    selectedMovie: null,
  },
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setSelectedMovie } = DetailSilce.actions;
export const selectSelectedMovie = (state) => state.movie.selectedMovie;
export default DetailSilce.reducer;
