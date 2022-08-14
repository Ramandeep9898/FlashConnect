import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
