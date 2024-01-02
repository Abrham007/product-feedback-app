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

export const addNewPost = createAsyncThunk(
  "productRequests/addNewpost",
  async (post) => {
    const response = await fetch("http://127.0.0.1:4000/post", {
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
    const response = await fetch("http://127.0.0.1:4000/post", {
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
    const response = await fetch("http://127.0.0.1:4000/post", {
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
    const response = await fetch("http://127.0.0.1:4000/post/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const updatedPost = await response.json();
    return { updatedPost, postId: comment.postId };
  }
);
export const addNewReplay = createAsyncThunk(
  "productRequests/addNewReplay",
  async (replay) => {
    const response = await fetch("http://127.0.0.1:4000/post/comment/replay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(replay),
    });
    const updatedPost = await response.json();
    return { updatedPost, postId: replay.postId };
  }
);

const productRequestsSlice = createSlice({
  name: "productRequests",
  initialState: initialState,
  reducers: {
    increaseVote(state, action) {
      let _id = action.payload._id;
      let index = state.posts.findIndex((item) => item._id === _id);
      let votes = state.posts[index].upvotes;
      if (!votes.isClicked) {
        state.posts[index].upvotes = {
          isClicked: true,
          currentVotes: votes + 1,
        };
      }
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
  },
});

export const { increaseVote } = productRequestsSlice.actions;

export default productRequestsSlice.reducer;

export const selectProductRequests = (state) => state.productRequests.posts;

export const selectSuggestionList = createSelector(
  selectProductRequests,
  (productRequests) => {
    return productRequests.filter((req) => req.status === "suggestion");
  }
);
