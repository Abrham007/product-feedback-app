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
  status: "idle",
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
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      let postIndex = state.posts.findIndex(
        (post) => post._id == action.payload.postId
      );
      state.posts[postIndex] = action.payload.updatedPost;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      let feedbackIndex = state.posts.findIndex(
        (req) => req._id == action.payload.postId
      );
      state.posts.splice(feedbackIndex, 1);
    });
    builder.addCase(addNewComment.fulfilled, (state, action) => {
      let postIndex = state.posts.findIndex(
        (post) => post._id == action.payload.postId
      );
      state.posts[postIndex] = action.payload.updatedPost;
    });
    builder.addCase(addNewReplay.fulfilled, (state, action) => {
      let postIndex = state.posts.findIndex(
        (post) => post._id == action.payload.postId
      );
      state.posts[postIndex] = action.payload.updatedPost;
    });
    builder
      .addCase(increaseVote.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(increaseVote.fulfilled, (state, action) => {
        state.status = "succeeded";
        let postIndex = state.posts.findIndex(
          (post) => post._id == action.payload.postId
        );
        state.posts[postIndex] = action.payload.updatedPost;
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
