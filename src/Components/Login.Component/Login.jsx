import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import { useAuth } from "../../Custom-hooks/useAuth";

const Login = ({ setAuthVal }) => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    message: "",
  });
  const testLoginDetails = {
    email: "test@test.com",
    password: "test123",
  };

  const { logInAuth } = useAuth();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  // const loginHandler = () => {
  //   if (
  //     loginDetails.email.match(emailRegex) &&
  //     loginDetails.password.match(passwordRegex)
  //   ) {
  //     setErrorMessage({
  //       message: "",
  //     });
  //     logInAuth(loginDetails);
  //   } else {
  //     setErrorMessage({
  //       message: "error",
  //     });
  //   }
  // };
  const loginHandler = () => {
    logInAuth(loginDetails);
  };

  return (
    <>
      <main Name="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="h3 color capitalize fW-700 text-center">login</p>
            <div className="input-box mgT-20">
              <div>{errorMessage.message}</div>
              <label for="email" className="textarea-label">
                email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                value={loginDetails.email}
                valide
                onChange={(e) => {
                  setLoginDetails({ ...loginDetails, email: e.target.value });
                  console.log(loginDetails);
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <label for="password" className="textarea-label">
                password
              </label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="**********"
                valide
                value={loginDetails.password}
                onChange={(e) => {
                  setLoginDetails({
                    ...loginDetails,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            {/* {console.log(loginDetails)} */}
            <div className="login-remember-ad-forget-pass dis-f">
              <div className="remen-me mgT-20">
                <input type="checkbox" />
                <label className="textarea-label">Remember Me</label>
              </div>
              <div className="forget-pass">
                <span
                  className="textarea-label"
                  onClick={(e) => {
                    e.preventDefault();
                    setLoginDetails(testLoginDetails);
                  }}
                >
                  TEST LOGIN ?
                </span>
              </div>
            </div>
            <button
              className="btn solid-pri-btn width100 mgT-20"
              onClick={() => {
                loginHandler();
              }}
            >
              login
            </button>

            <p
              className="h5 color capitalize fW-500 text-center mgT-20"
              onClick={() => {
                setAuthVal(false);
              }}
            >
              create new account &#62;
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Login;
