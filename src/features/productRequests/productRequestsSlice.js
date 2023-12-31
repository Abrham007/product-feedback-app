import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "productRequests/fetchPosts",
  async () => {
    const response = await fetch("http://127.0.0.1:4000/posts");
    const json = await response.json();
    return json;
  }
);

const productRequestsSlice = createSlice({
  name: "productRequests",
  initialState: initialState,
  reducers: {
    increaseVote(state, action) {
      let id = action.payload.id;
      let index = state.posts.findIndex((item) => item.id === id);
      let votes = state.posts[index].upvotes;
      if (!votes.isClicked) {
        state.posts[index].upvotes = {
          isClicked: true,
          currentVotes: votes + 1,
        };
      }
    },
    addComment(state, action) {
      let lastPostWithComment = { comments: [] };
      for (let i = state.posts.length - 1; i > 0; i--) {
        if (state.posts[i].comments) {
          lastPostWithComment = state.posts[i];
          break;
        }
      }
      let lastComment =
        lastPostWithComment.comments[lastPostWithComment.comments.length - 1];
      let newComment = {
        id: lastComment.id + 1,
        content: action.payload.content,
        user: action.payload.user,
      };
      let feedBackPostIndex = state.posts.findIndex(
        (req) => req.id == action.payload.postId
      );
      let productObj = state.posts[feedBackPostIndex];
      if (productObj.comments) {
        productObj.comments.push(newComment);
      } else {
        productObj.comments = [newComment];
      }
    },
    addReplay(state, action) {
      let feedBackPostIndex = state.posts.findIndex(
        (req) => req.id == action.payload.feedbackPostId
      );
      let commentsArray = state.posts[feedBackPostIndex].comments;
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
      state.posts[feedBackPostIndex].comments[commentIndex].replies =
        repliesArrya;
    },
    addPost(state, action) {
      state.posts.push({
        id: state.posts.length + 1,
        ...action.payload,
      });
    },
    editPost(state, action) {
      let oldFeedback = state.posts.find(
        (req) => req.id == action.payload.postId
      );
      let feedbackIndex = state.posts.findIndex(
        (req) => req.id == action.payload.postId
      );
      let newFeedback = {
        id: oldFeedback.id,
        title: action.payload.title,
        category: action.payload.category,
        upvotes: oldFeedback.upvotes,
        status: action.payload.status,
        description: action.payload.description,
      };
      if (oldFeedback.comments) {
        newFeedback.comments = oldFeedback.comments;
      }

      state.posts[feedbackIndex] = newFeedback;
    },
    deletePost(state, action) {
      let feedbackIndex = state.posts.findIndex(
        (req) => req.id == action.payload.postId
      );
      state.posts.splice(feedbackIndex, 1);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  increaseVote,
  addComment,
  addReplay,
  addPost,
  editPost,
  deletePost,
} = productRequestsSlice.actions;

export default productRequestsSlice.reducer;

export const selectProductRequests = (state) => state.productRequests.posts;

export const selectSuggestionList = createSelector(
  selectProductRequests,
  (productRequests) => {
    return productRequests.filter((req) => req.status === "suggestion");
  }
);
