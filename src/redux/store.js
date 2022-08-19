import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import userReducer from "./reducers/userSlice";
import postReducer from "./reducers/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    posts: postReducer,
  },
});
