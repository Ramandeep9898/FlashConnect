import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  // loading: false,
  user: null,
  // token: null,
};
localStorage.setItem("flashToken", "123");

export const login = createAsyncThunk("auth/login", async (loginDetails) => {
  try {
    const response = await axios.post("/api/auth/login", {
      username: loginDetails.username,
      password: loginDetails.password,
    });
    return response.data;
  } catch (error) {
    console.log(`${error.response.data.errors}`);
  }
});

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

export const testLogin = createAsyncThunk("auth/testLogin", async () => {
  try {
    const response = await axios.post("/api/auth/login", {
      username: "Nezuko Kamado",
      password: "Nezuko@1234",
    });
    return response.data;
  } catch (error) {
    console.log(`${error.response.data.errors}`);
  }
});
export const logout = createAsyncThunk("auth/logout", async () => {
  console.log("bye");
});

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

  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        console.log("pending");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.foundUser;
        console.log("login done");
      })
      .addCase(login.rejected, (state, action) => {
        console.log("login failed");
      })

      .addCase(testLogin.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.foundUser;
        console.log("Login Successful");
      })
      .addCase(testLogin.rejected, (state, action) => {
        console.log("testLoginrejected");
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {};
        console.log("Logged Out");
      });
  },
});

export default authSlice.reducer;
