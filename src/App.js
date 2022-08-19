import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PrivateRoute } from "./Components/Private.Component/PrivateRoute";
import { RestrictedRoute } from "./Components/RestrictedRoute.Component/Restricted.jsx";
import { Auth } from "./pages/auth/Auth";
import MockAPI from "./Mockman";
import { User } from "./Components/User.Component/User";
import { getUsers } from "./redux/reducers/userSlice";
import { getPost } from "./redux/reducers/postSlice";
import { verify } from "./redux/reducers/authSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
    dispatch(getUsers());
  }, []);
  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<RestrictedRoute />}>
            <Route path="/" element={<Auth />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Route>

          <Route path="/mockman" element={<MockAPI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
