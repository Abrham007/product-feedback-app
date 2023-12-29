import { createSelector, createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";

const productRequestsSlice = createSlice({
  name: "productrequests",
  initialState: data.productRequests,
  reducers: {
    increaseVote(state, action) {
      let id = action.payload.id;
      let index = state.findIndex((item) => item.id === id);
      let votes = state[index].upvotes;
      if (!votes.isClicked) {
        state[index].upvotes = { isClicked: true, currentVotes: votes + 1 };
      }
    },
    addComment(state, action) {
      let newComment = action.payload;
      let feedBackPostIndex = state.findIndex(
        (req) => req.id == action.payload.postid
      );
      let productObj = state[feedBackPostIndex];
      if (productObj.comments) {
        productObj.comments.push(newComment);
      } else {
        productObj.comments = [newComment];
      }
    },
  },
});

export const { increaseVote, addComment } = productRequestsSlice.actions;

export default productRequestsSlice.reducer;

export const selectProductRequests = (state) => state.productRequests;

export const selectSuggestionList = createSelector(
  selectProductRequests,
  (productRequests) => {
    return productRequests.filter((req) => req.status === "suggestion");
  }
);
