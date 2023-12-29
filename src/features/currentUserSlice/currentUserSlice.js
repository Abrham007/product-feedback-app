import { createSelector, createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: data.currentUser,
  reducers: {},
});

export default currentUserSlice.reducer;
