import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  user: null,
  // token: null,
};
localStorage.setItem("flashToken", "123");

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

export const signUp = createAsyncThunk(
  "auth/signup",
  async (signupDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        username: signupDetails.username,
        password: signupDetails.password,
        lastname: signupDetails.lastname,
        email: signupDetails.email,
        password: signupDetails.password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const testLogin = createAsyncThunk(
  "auth/testLogin",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        username: "Nezuko Kamado",
        password: "Nezuko@1234",
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const verify = createAsyncThunk(
  "auth/verify",
  async (arg, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("flashToken");
    try {
      const response = await axios.post(
        "/api/auth/verify",
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      console.log("out");
    },
  },
  initialState,
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        // localStorage.setItem("smasherToken", action.payload.encodedToken);
        state.user = action.payload.foundUser;
        console.log("login done");
        // state.token = action.payload.encodedToken;
        // toast.success("Login Successful");
      })
      .addCase(login.rejected, (state, action) => {
        console.log("login failed");
        state.loading = false;
        // toast.error(action.payload);
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        console.log("sign up pending");
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        // localStorage.setItem("smasherToken", action.payload.encodedToken);
        state.user = action.payload.createdUser;
        // state.token = action.payload.encodedToken;
        console.log("Signup Successful");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      })
      .addCase(testLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(testLogin.fulfilled, (state, action) => {
        state.loading = false;
        // localStorage.setItem("smasherToken", action.payload.encodedToken);
        state.user = action.payload.foundUser;
        // state.token = action.payload.encodedToken;
        console.log("Login Successful");
      })
      .addCase(testLogin.rejected, (state, action) => {
        state.loading = false;
        console.log("testLogin.rejected");
      })
      .addCase(verify.pending, (state) => {
        state.loading = true;
      })
      .addCase(verify.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        // state.token = action.payload.encodedToken;
      })
      .addCase(verify.rejected, (state, action) => {
        state.loading = false;
        // toast.error(action.payload);
      });
  },
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
