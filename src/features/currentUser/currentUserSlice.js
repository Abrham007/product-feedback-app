import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("currentUser/fetchUser", async () => {
  const response = await fetch("http://127.0.0.1:4000/user");
  const json = await response.json();
  return json;
});

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default currentUserSlice.reducer;
