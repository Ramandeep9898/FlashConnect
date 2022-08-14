import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/reducers/authSlice";

const SignUp = ({ setAuthVal }) => {
  const dispatch = useDispatch();
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    message: "",
  });

  const signUpHandler = () => {
    console.log("signup details", signUpDetails);
    dispatch(signUp(signUpDetails));
  };

  console.log(signUpDetails);
  return (
    <>
      <main className="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="h3 color capitalize fW-700 text-center">sign up</p>

            <div className="input-box mgT-20">
              <label for="first-name" className="textarea-label">
                Username
              </label>
              <input
                id="first-name"
                type="text"
                className="input"
                placeholder="Username"
                valide
                value={signUpDetails.username}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    username: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <label for="email" className="textarea-label">
                email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                valide
                value={signUpDetails.email}
                onChange={(e) => {
                  setSignUpDetails({ ...signUpDetails, email: e.target.value });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <label for="first-name" className="textarea-label">
                first name
              </label>
              <input
                id="first-name"
                type="text"
                className="input"
                placeholder="First Name"
                valide
                value={signUpDetails.firstName}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    firstName: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <label for="last-name" className="textarea-label">
                last name
              </label>
              <input
                id="last-name"
                type="email"
                className="input"
                placeholder="Last Name"
                valide
                value={signUpDetails.lastName}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    lastName: e.target.value,
                  });
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
                value={signUpDetails.password}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    password: e.target.value,
                  });
                }}
              />
            </div>

            <div className="login-remember-ad-forget-pass dis-f">
              <div className="remen-me mgT-20">
                <input type="checkbox" />
                <label className="textarea-label">
                  i accept all terms & conditions{" "}
                </label>
              </div>
            </div>
            <button
              className="btn solid-pri-btn width100 mgT-20"
              onClick={() => {
                signUpHandler();
              }}
            >
              sign up
            </button>

            <p
              className="h5 color capitalize fW-500 text-center mgT-20 cursor"
              onClick={() => {
                setAuthVal(true);
              }}
            >
              already have a account{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
