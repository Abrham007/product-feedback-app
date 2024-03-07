import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../../http";

const initialState = {
  user: {},
  status: {
    fetchUser: "idle",
  },
  error: null,
};

export const fetchUser = createAsyncThunk("currentUser/fetchUser", getUser);

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.error = null;
        state.status.fetchUser = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status.fetchUser = "succeeded";
        state.user = action.payload[0];
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status.fetchUser = "failed";
        state.error = action.error.message;
      });
  },
});

export default currentUserSlice.reducer;
