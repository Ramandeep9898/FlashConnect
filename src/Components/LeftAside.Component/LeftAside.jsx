import React from "react";
import "./left-aside.css";
import { BiHomeSmile, BiBookmark } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";
import { Link, NavLink } from "react-router-dom";

export const LeftAside = () => {
  const user = useSelector((state) => state.auth.user);
  const allUser = useSelector((state) => state.users.users);
  const loginDetails = allUser.find((item) => item.username === user?.username);

  const dispatch = useDispatch();
  return (
    <>
      <div className="left-aside-position">
        <nav className="lf-aside">
          <ul className="lf-aside-items">
            <NavLink to="/home">
              <li className="lf-aside-item mgT-8">
                <BiHomeSmile />
                <span>Home</span>
              </li>
            </NavLink>

            <NavLink to="/explore">
              <li className="lf-aside-item mgT-8">
                <MdOutlineTravelExplore />
                <span>Explore</span>
              </li>
            </NavLink>

            <NavLink to="/bookmarks">
              <li className="lf-aside-item mgT-8">
                <BiBookmark />
                <span>Bookmarks</span>
              </li>
            </NavLink>

            {/* <li className="lf-aside-item mgT-8">
              <RiNotificationLine />
              <span>Notification</span>
            </li> */}

            <NavLink
              to={`/${loginDetails?.username}`}
              className={(isActive) =>
                "activeLink" + (!isActive ? "inactiveLink" : "")
              }
            >
              <li className="lf-aside-item mgT-8">
                <CgProfile />
                <span>Profile</span>
              </li>
            </NavLink>

            <NavLink to="/home">
              <li className="lf-aside-item mgT-8">
                <button className="btn bg-pur width100">Create New Post</button>
              </li>
            </NavLink>
          </ul>
          <div className="profile">
            <ul class="list border displayF space-between ppl-yk mgT-16">
              <Link to={`/${loginDetails?.username}`}>
                <div className="list-start-sec displayF">
                  <img
                    src={user.profilePhoto}
                    alt="..."
                    class="avatar avatar-s cursor"
                  />
                  <li className="list-items list-width">
                    {user.firstName}
                    <span className="list-sec-text">@{user.username}</span>
                  </li>
                </div>
              </Link>
              <div className="list-end-sec">
                <p
                  onClick={() => {
                    console.log("logout ");
                    dispatch(logout());
                  }}
                  className="follow capitalize cursor logout"
                >
                  <IoIosLogOut />
                </p>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
