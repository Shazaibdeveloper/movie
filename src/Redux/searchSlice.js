import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [], // Set default value to an empty array
    type: "movie",
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.results = action.payload;
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
