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
      let lastPost = state[state.length - 1];
      let lastComment = lastPost.comments[lastPost.comments.length - 1];
      let newComment = {
        id: lastComment.id + 1,
        content: action.payload.content,
        user: action.payload.user,
      };
      let feedBackPostIndex = state.findIndex(
        (req) => req.id == action.payload.postId
      );
      let productObj = state[feedBackPostIndex];
      if (productObj.comments) {
        productObj.comments.push(newComment);
      } else {
        productObj.comments = [newComment];
      }
    },
    addReplay(state, action) {
      let feedBackPostIndex = state.findIndex(
        (req) => req.id == action.payload.feedbackPostId
      );
      let commentsArray = state[feedBackPostIndex].comments;
      let commentId = action.payload.parentCommentId
        ? action.payload.parentCommentId
        : action.payload.id;
      let commentIndex = commentsArray.findIndex(
        (comment) => comment.id === commentId
      );
      let repliesArrya = commentsArray[commentIndex].replies
        ? commentsArray[commentIndex].replies
        : [];
      repliesArrya.push({
        content: action.payload.content,
        replyingTo: action.payload.replyingTo,
        user: action.payload.user,
      });
      state[feedBackPostIndex].comments[commentIndex].replies = repliesArrya;
    },
  },
});

export const { increaseVote, addComment, addReplay } =
  productRequestsSlice.actions;

export default productRequestsSlice.reducer;

export const selectProductRequests = (state) => state.productRequests;

export const selectSuggestionList = createSelector(
  selectProductRequests,
  (productRequests) => {
    return productRequests.filter((req) => req.status === "suggestion");
  }
);
