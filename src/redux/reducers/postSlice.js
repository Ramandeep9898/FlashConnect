import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { Action } from "history";
const initialState = {
  posts: [],
  bookmarks: [],
};

export const getPost = createAsyncThunk(
  "post/allPost",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/posts");

      return response.data;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (post, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/posts", { postData: post });
      return console.log(response.data);
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async (id, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("flashConnectToken");
      const response = await axios.post(
        `/api/posts/like/${id}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async (id, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("flashConnectToken");
      console.log(encodedToken);
      const response = await axios.post(
        `/api/posts/dislike/${id}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const postComment = createAsyncThunk(
  "posts/postComment",
  async (id, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("flashConnectToken");
      console.log(encodedToken);
      const response = await axios.post(
        `/api/comment/${id}`,
        {
          // commentData
        },
        { headers: { authorization: encodedToken } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getBookmarks = createAsyncThunk("posts/getBookmarks", async () => {
  try {
    const encodedToken = localStorage.getItem("flashConnectToken");
    const response = await axios.get("/api/users/bookmark", {
      headers: { authorization: encodedToken },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addToBookmarks = createAsyncThunk(
  "post/addToBookmarks",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("flashConnectToken");
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const removeFromBookmarks = createAsyncThunk(
  "post/removeFromBookmarks",
  async (postId, { rejectWithValue }) => {
    try {
      const encodedToken = localStorage.getItem("flashConnectToken");
      const response = await axios.post(
        `/api/user/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);
export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getPost.pending, (state, action) => {
        console.log("wait");
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(getPost.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(likePost.pending, (state, action) => {
        console.log("wait");
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(likePost.rejected, (state, action) => {
        console.log("LIKE rejected");
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(dislikePost.rejected, (state, action) => {
        console.log(" DIASLIKE rejected");
      })

      .addCase(postComment.pending, (state, action) => {
        console.log("wait");
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(postComment.rejected, (state, action) => {
        console.log("LIKE rejected");
      })

      .addCase(getBookmarks.pending, (state, action) => {
        console.log("wait");
      })
      .addCase(getBookmarks.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(getBookmarks.rejected, (state, action) => {
        console.log("LIKE rejected");
      });
  },
});

export default postSlice.reducer;
