import React from "react";
import img from "./60111.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiEdit2, FiShare2, FiLogOut } from "react-icons/fi";
import { Header } from "../Header.Component/header";
import { LeftAside } from "../LeftAside.Component/LeftAside";
import { RightAside } from "../RightAside.component/RightAside";

export const User = () => {
  const user = useSelector((state) => state.auth.user);

  const allUser = useSelector((state) => state.users.users);

  const logindetails = allUser.find(
    (item) => item.usersname === user.usersname
  );
  return (
    <>
      <Header />
      <div className="container-main">
        <LeftAside />

        <div className="main">
          {/* profile */}
          <div className="new-post">
            <div className="new-post-body">
              <div className="avatar-sec">
                <img
                  src={logindetails.profilePhoto}
                  alt="..."
                  className="avatar avatar-xl"
                />
              </div>
              <div className="textarea-container">
                <div className="user-container">
                  <div className="h4 fW-700">{logindetails.firstName}</div>
                  <div className="h5 grey-color">@{logindetails.username}</div>
                  <div className="h5 mgT-16">{logindetails.bio}</div>
                  <div className="h5 mgT-16">
                    <a href="https://ramandeep.netlify.app/index.html">
                      https://ramandeep.netlify.app/index.html
                    </a>
                  </div>
                </div>
                <div className="new-post-nav mgT-16">
                  <div className="new-post-options ">
                    <ul className="h5">
                      <span>
                        <span className="fW-500">
                          {" "}
                          {logindetails.followers.length}
                        </span>{" "}
                        Followers
                      </span>
                    </ul>
                    <ul className="h5">
                      <span>
                        <span className="fW-500">
                          {" "}
                          {user.following.length}{" "}
                        </span>{" "}
                        Following
                      </span>
                    </ul>
                    <ul className="h5">
                      <span>
                        <span className="fW-500">
                          {" "}
                          {logindetails.followers.length}
                        </span>{" "}
                        post
                      </span>
                    </ul>
                  </div>
                  <ul className="h5 gap">
                    <button className="btn bg-pur ">
                      <FiEdit2 />
                    </button>
                    <button className="btn bg-pur ">
                      <FiShare2 />
                    </button>
                    <button className="btn bg-pur ">
                      <FiLogOut />
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* post */}
        </div>

        <RightAside />
      </div>
    </>
  );
};
