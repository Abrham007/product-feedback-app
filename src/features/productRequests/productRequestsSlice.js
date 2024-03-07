import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  deleteProductRequest,
  getProductRequest,
  patchProductRequest,
  patchProductRequestUpvotes,
  postProductRequest,
  postProductRequestComment,
  postProductRequestReplay,
} from "../../../http";

const initialState = {
  posts: [],
  status: {
    fetchPosts: "idle",
    addNewPost: "idle",
    editPost: "idle",
    deletePost: "idle",
    addNewComment: "idle",
    addNewReplay: "idle",
    increaseVote: "idle",
  },
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "productRequests/fetchPosts",
  getProductRequest
);

export const addNewPost = createAsyncThunk(
  "productRequests/addNewpost",
  postProductRequest
);

export const editPost = createAsyncThunk(
  "productRequests/editpost",
  patchProductRequest
);

export const deletePost = createAsyncThunk(
  "productRequests/deletepost",
  deleteProductRequest
);

export const addNewComment = createAsyncThunk(
  "productRequests/addNewComment",
  postProductRequestComment
);
export const addNewReplay = createAsyncThunk(
  "productRequests/addNewReplay",
  postProductRequestReplay
);

export const increaseVote = createAsyncThunk(
  "productRequests/increaseVote",
  patchProductRequestUpvotes
);

const productRequestsSlice = createSlice({
  name: "productRequests",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.error = null;
        state.status.fetchPosts = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status.fetchPosts = "succeeded";
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status.fetchPosts = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(addNewPost.pending, (state, action) => {
        state.error = null;
        state.status.addNewPost = "loading";
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status.addNewPost = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(editPost.pending, (state, action) => {
        state.error = null;
        state.status.editPost = "loading";
      })
      .addCase(editPost.fulfilled, (state, action) => {
        let postIndex = state.posts.findIndex(
          (post) => post._id == action.payload.postId
        );
        state.posts[postIndex] = action.payload.updatedPost;
      })
      .addCase(editPost.rejected, (state, action) => {
        state.status.editPost = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(deletePost.pending, (state, action) => {
        state.error = null;
        state.status.deletePost = "loading";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        let feedbackIndex = state.posts.findIndex(
          (req) => req._id == action.payload.postId
        );
        state.posts.splice(feedbackIndex, 1);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status.deletePost = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(addNewComment.fulfilled, (state, action) => {
        let postIndex = state.posts.findIndex(
          (post) => post._id == action.payload.postId
        );
        state.posts[postIndex] = action.payload.updatedPost;
      })
      .addCase(addNewComment.rejected, (state, action) => {
        state.status.addNewComment = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(addNewReplay.fulfilled, (state, action) => {
        let postIndex = state.posts.findIndex(
          (post) => post._id == action.payload.postId
        );
        state.posts[postIndex] = action.payload.updatedPost;
      })
      .addCase(addNewReplay.rejected, (state, action) => {
        state.status.addNewReplay = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(increaseVote.pending, (state, action) => {
        state.status.increaseVote = "loading";
      })
      .addCase(increaseVote.fulfilled, (state, action) => {
        state.status.increaseVote = "succeeded";
        let postIndex = state.posts.findIndex(
          (post) => post._id == action.payload.postId
        );
        state.posts[postIndex] = action.payload.updatedPost;
      })
      .addCase(increaseVote.rejected, (state, action) => {
        state.status.increaseVote = "failed";
        state.error = action.error.message;
      });
  },
});

export default productRequestsSlice.reducer;

export const selectProductRequests = (state) => state.productRequests.posts;

export const selectSuggestionList = createSelector(
  selectProductRequests,
  (productRequests) => {
    return productRequests.filter((req) => req.status === "suggestion");
  }
);
