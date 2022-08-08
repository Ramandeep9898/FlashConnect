import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PrivateRoute } from "./Components/Private.Component/PrivateRoute";
import { RestrictedRoute } from "./Components/RestrictedRoute.Component/Restricted";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<RestrictedRoute />}>
            <Route path="/" element={<Auth />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="/mockman" element={<MockAPI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
