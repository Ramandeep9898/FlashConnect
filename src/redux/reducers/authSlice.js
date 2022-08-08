import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  token: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (loginDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        username: loginDetails.username,
        password: loginDetails.password,
      });
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/singup",
  async (signDetails, { rejectWithValue }) => {
    try {
    } catch (error) {}
  }
);

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
