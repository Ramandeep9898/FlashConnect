import React from "react";
import "./left-aside.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { TfiRocket } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import {
  VscActivateBreakpoints,
  VscAccount,
  VscBookmark,
  VscBellDot,
  VscChevronRight,
  VscRocket,
  VscChevronLeft,
} from "react-icons/vsc";
import { useState } from "react";

export const LeftAside = () => {
  const user = useSelector((state) => state.auth.user);
  const allUser = useSelector((state) => state.users.users);
  const loginDetails = allUser.find((item) => item.username === user?.username);
  const [sideBar, setSideBar] = useState(true);

  const sideBarHandler = () => {
    setSideBar((prev) => !prev);
  };

  const dispatch = useDispatch();
  return (
    <>
      {sideBar ? (
        <nav className="sidebar-container flex">
          <ul className="sidebar-wrapper">
            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isActive ? " gradient" : "sidebar-item"
              }
            >
              <li className="sidebar-item item-home">
                <AiFillHome />
              </li>
            </NavLink>
          </ul>
          <ul className="sidebar-wrapper">
            <NavLink
              to="explore"
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar-item gradient-orange gradient"
                  : "sidebar-item"
              }
            >
              <VscActivateBreakpoints />
              Explore
            </NavLink>

            <NavLink
              to="bookmarks"
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar-item gradient-pink gradient"
                  : "sidebar-item"
              }
            >
              <VscBookmark />
              Bookmarks
            </NavLink>

            <NavLink
              to="notification"
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar-item gradient-green gradient"
                  : "sidebar-item"
              }
            >
              <VscBellDot />
              Notification
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar-item"
                  : "sidebar-item gradient-purple gradient"
              }
            >
              <VscRocket />
              New Post
            </NavLink>
          </ul>

          <ul className="sidebar-wrapper">
            <li className="sidebar-item space-between">
              <Link to="/profile">
                <span className="flex-center gap20">
                  <VscAccount />
                  Profile
                </span>
              </Link>
              <button className="sidebar-display-btn" onClick={sideBarHandler}>
                <VscChevronLeft />
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="sidebar-container flex">
          <ul className="sidebar-wrapper">
            <li className="sidebar-item item-home">
              <AiFillHome />
            </li>
          </ul>
          <ul className="sidebar-wrapper">
            <NavLink
              to="explore"
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar-item sidebar-shrink gradient-orange gradient"
                  : "sidebar-item sidebar-shrink"
              }
            >
              <VscActivateBreakpoints />
            </NavLink>

            <NavLink
              to="bookmarks"
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar-item sidebar-shrink gradient-pink gradient"
                  : "sidebar-item sidebar-shrink"
              }
            >
              <VscBookmark />
            </NavLink>

            <NavLink
              to="notification"
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar-item sidebar-shrink gradient-green gradient"
                  : "sidebar-item sidebar-shrink"
              }
            >
              <VscBellDot />
            </NavLink>

            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isActive
                  ? "sidebar-item sidebar-shrink"
                  : "sidebar-item sidebar-shrink gradient-purple gradient"
              }
            >
              <VscRocket />
            </NavLink>

            {/* <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? ""
                  : "sidebar-item sidebar-shrink  gradient"
              }
            > */}
            <li className=" sidebar-item sidebar-shrink gradient">
              <button className="btn-empty" onClick={sideBarHandler}>
                <VscChevronRight />
              </button>
            </li>

            {/* </NavLink> */}
          </ul>

          <ul className="sidebar-wrapper">
            <li className="sidebar-item">
              <VscAccount />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
