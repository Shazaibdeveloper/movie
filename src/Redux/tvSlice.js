// moviesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tv: [],
  currentPage: 1,
  totalPages: 1,
  status: "idle",
  error: null,
};

export const fetchtv = createAsyncThunk("tv/fetchtv", async (page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );
  return response.data;
});

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtv.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchtv.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tv = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchtv.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default tvSlice.reducer;
