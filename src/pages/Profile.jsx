import React from "react";
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

export const Profile = () => {
  return (
    <div className="profile-layout flex">
      <nav className="sidebar-container flex sidebar-profile">
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
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isActive
                ? "sidebar-item gradient-orange gradient"
                : "sidebar-item"
            }
          >
            <VscAccount />
            Profile
          </NavLink>
        </ul>

        <ul className="sidebar-wrapper">
          <li className="sidebar-item space-between">
            <Link to="/home">
              <button className="sidebar-display-btn">
                <VscChevronLeft />
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="profile">
        <div className="profile-card">
          <div className="label mgT-16">DISPLAY NAME</div>
          <div className="value mgT-8">Ramandeep kaur</div>

          <div className="label mgT-32">Email </div>
          <div className="value mgT-8">ramank6238299@gmail.com </div>

          <button className="btn-big mgT-32">Sign out</button>
        </div>
      </div>
    </div>
  );
};
