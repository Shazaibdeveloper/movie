// searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    setSearchResults: (state, action) => action.payload,
  },
});

export const { setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
