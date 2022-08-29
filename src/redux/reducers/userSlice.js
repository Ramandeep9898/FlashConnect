import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  profileUserPosts: [],
  // profileUser: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get("/api/users");
    return response.data;
  } catch (error) {
    return console.log(`${error.response.data.errors}`);
  }
});

export const getUser = createAsyncThunk(
  "users/getUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${username}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const getUserPost = createAsyncThunk(
  "user/getUserPost",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error}`);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        //   state.loading = true;
        console.log("loading");
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        console.log("state.users", state.users);
        state.users = action.payload.users;
      })
      .addCase(getUser.pending, (state) => {
        //   state.loading = true;
        console.log("loading");
      })
      .addCase(getUser.fulfilled, (state, action) => {
        console.log("state.users", state.users);
        state.users = action.payload.users;
      })
      .addCase(getUserPost.pending, (state) => {
        //   state.loading = true;
        console.log("loading");
      })
      .addCase(getUserPost.fulfilled, (state, action) => {
        console.log("userpost");
        state.profileUserPosts = action.payload.posts;
      })
      .addCase(follow.pending, (state) => {
        console.log("loading");
      })
      .addCase(follow.fulfilled, (state, action) => {
        console.log(action.payload);
        const { user, followUser } = action.payload;
        state.users = state.users.map((item) =>
          item.username === user.username ? user : item
        );
        state.users = state.users.map((item) =>
          item.username === followUser.username ? followUser : item
        );
        state.profileUser = action.payload.followUser;
      })
      .addCase(unfollow.pending, (state) => {
        console.log("loading");
      })
      .addCase(unfollow.fulfilled, (state, action) => {
        console.log(action.payload);
        const { user, followUser } = action.payload;
        state.users = state.users.map((item) =>
          item.username === user.username ? user : item
        );
        state.users = state.users.map((item) =>
          item.username === followUser.username ? followUser : item
        );
        state.profileUser = action.payload.followUser;
      });
  },
});

export default userSlice.reducer;
