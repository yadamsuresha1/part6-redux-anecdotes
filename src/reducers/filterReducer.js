import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAnecdote(state, action) {
      return action.payload.filter;
    },
  },
});

export const { filterAnecdote } = filterSlice.actions;
export default filterSlice.reducer;
