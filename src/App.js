import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PrivateRoute } from "./Components/Private.Component/PrivateRoute";
import { RestrictedRoute } from "./Components/RestrictedRoute.Component/Restricted.jsx";
import { Comment } from "./Components/Comment.Component/Comment";
import { Auth } from "./pages/auth/Auth";
import MockAPI from "./Mockman";
import { User } from "./Components/User.Component/User";
import { getUsers } from "./redux/reducers/userSlice";
import { getPost } from "./redux/reducers/postSlice";
import { Explore } from "./pages/Explore";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<RestrictedRoute />}>
            <Route path="/" element={<Auth />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/:username" element={<User />} />
            <Route path="/:username/:postId" element={<Comment />} />
            <Route path="/explore" element={<Explore />} />
          </Route>

          <Route path="/mockman" element={<MockAPI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
