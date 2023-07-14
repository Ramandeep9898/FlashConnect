import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { Link } from "react-router-dom";
import { login, testLogin } from "../../redux/reducers/authSlice";

const Login = ({ setAuthVal }) => {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    message: "",
  });

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
    console.log(loginDetails);
    dispatch(login(loginDetails));
  };

  return (
    <>
      <main Name="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="h3 color capitalize fW-700 text-center">login</p>
            <div className="input-box mgT-20">
              <div>{errorMessage.message}</div>
              <label for="text" className="textarea-label">
                email
              </label>
              <input
                id="text"
                type="text"
                className="input"
                placeholder="Raman deep"
                value={loginDetails.username}
                valide
                onChange={(e) => {
                  setLoginDetails({
                    ...loginDetails,
                    username: e.target.value,
                  });
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
                    dispatch(testLogin());
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
              className="h5 color capitalize fW-500 text-center mgT-20 cursor"
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
