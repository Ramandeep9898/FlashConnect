import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  // profileUserPost: [],
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
// export const getUser = createAsyncThunk(
//   "users/getUser",
//   async (username, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`/api/users/${username}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(`${error.response.data.errors}`);
//     }
//   }
// );

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state) => {
      //   state.loading = true;
      console.log("loading");
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log("state.users", state.users);
      state.users = action.payload.users;
    });
  },
});

export default userSlice.reducer;
