import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: { movies: [], tvSeries: [] }, // Set default value to an object with movies and tvSeries arrays
    type: "movie",
  },
  reducers: {
    setSearchResults: (state, action) => {
      // Assuming action.payload is an array of search results
      // Assign the results to the appropriate type in the state
      if (state.type === "movie") {
        state.results.movies = action.payload;
      } else {
        state.results.tvSeries = action.payload;
      }
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setSearchResults, setType } = searchSlice.actions;
export const selectSearchResults = (state) => state.search.results;
export const selectType = (state) => state.search.type;
export default searchSlice.reducer;
