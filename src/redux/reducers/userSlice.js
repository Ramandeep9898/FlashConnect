import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  profileUserPost: [],
  profileUser: [],
};

export const getUser = createAsyncThunk(
  "users/getUsers",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.post("api/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(`${error.response.data.errors}`);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder.addCase(getUser.pending, (state) => {
      //   state.loading = true;
      console.log("loading");
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload.users;
    });
  },
});

export default userSlice.reducer;
