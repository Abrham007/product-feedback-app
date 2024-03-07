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
    const response = await fetch("http://127.0.0.1:4000/api/product-request");
    const json = await response.json();
    return json;
  }
);

export const addNewPost = createAsyncThunk(
  "productRequests/addNewpost",
  async (post) => {
    const response = await fetch("http://127.0.0.1:4000/api/product-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const json = await response.json();
    return json;
  }
);

export const editPost = createAsyncThunk(
  "productRequests/editpost",
  async (post) => {
    const response = await fetch("http://127.0.0.1:4000/api/product-request", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const updatedPost = await response.json();
    return { updatedPost, postId: post.postId };
  }
);

export const deletePost = createAsyncThunk(
  "productRequests/deletepost",
  async (postId) => {
    const response = await fetch("http://127.0.0.1:4000/api/product-request", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postId),
    });

    return postId;
  }
);

export const addNewComment = createAsyncThunk(
  "productRequests/addNewComment",
  async (comment) => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/product-request/comment",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );
    const updatedPost = await response.json();
    return { updatedPost, postId: comment.postId };
  }
);
export const addNewReplay = createAsyncThunk(
  "productRequests/addNewReplay",
  async (replay) => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/product-request/comment/replay",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(replay),
      }
    );
    const updatedPost = await response.json();
    return { updatedPost, postId: replay.postId };
  }
);

export const increaseVote = createAsyncThunk(
  "productRequests/increaseVote",
  async (voteInfo) => {
    const response = await fetch(
      "http://127.0.0.1:4000/api/product-request/upvotes",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voteInfo),
      }
    );
    const updatedPost = await response.json();
    return { updatedPost, postId: voteInfo.postId };
  }
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
