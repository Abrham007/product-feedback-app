import { createSelector, createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";

const productRequestsSlice = createSlice({
  name: "productrequests",
  initialState: data.productRequests,
  reducers: {
    increaseVote(state, actions) {
      let id = actions.payload.id;
      let index = state.findIndex((item) => item.id === id);
      let votes = state[index].upvotes;
      if (!votes.isClicked) {
        state[index].upvotes = { isClicked: true, currentVotes: votes + 1 };
      }
    },
  },
});

export const { increaseVote } = productRequestsSlice.actions;

export default productRequestsSlice.reducer;

export const selectProductRequests = (state) => state.productRequests;

export const selectSuggestionList = createSelector(
  selectProductRequests,
  (productRequests) => {
    return productRequests.filter((req) => req.status === "suggestion");
  }
);
