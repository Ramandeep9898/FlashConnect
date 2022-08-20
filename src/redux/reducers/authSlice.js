import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  // loading: false,
  user: null,
  token: null,
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

export const signUp = createAsyncThunk("auth/sign", async (signupDetails) => {
  try {
    console.log(signupDetails);
    const response = await axios.post("/api/auth/signup", {
      username: signupDetails.username,
      password: signupDetails.password,
      lastname: signupDetails.lastname,
      email: signupDetails.email,
      password: signupDetails.password,
    });
    return response.data;
  } catch (error) {
    console.log(`${error}`);
  }
});

export const testLogin = createAsyncThunk("auth/testLogin", async () => {
  try {
    const response = await axios.post("/api/auth/login", {
      username: "nezukokamado",
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
        localStorage.setItem("flashConnectToken", action.payload.encodedToken);
        state.user = action.payload.foundUser;
        console.log("login done");
        state.token = action.payload.encodedToken;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("login failed");
      })

      .addCase(testLogin.fulfilled, (state, action) => {
        console.log(action);
        localStorage.setItem("flashConnectToken", action.payload.encodedToken);
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        console.log("Login Successful");
      })
      .addCase(testLogin.rejected, (state, action) => {
        console.log("testLoginrejected");
      })
      .addCase(signUp.fulfilled, (state, action) => {
        localStorage.setItem("flashConnectToken", action.payload.encodedToken);
        state.token = action.payload.encodedToken;
        state.user = action.payload.createdUser;
        console.log("Signup Successful");
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        console.log("Logged Out");
      });
  },
});

export default authSlice.reducer;
