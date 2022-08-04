import React from "react";
import "./left-aside.css";
import { BiHomeSmile, BiBookmark } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiNotificationLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const LeftAside = () => {
  return (
    <>
      <nav className="lf-aside">
        <ul className="lf-aside-items">
          <li className="lf-aside-item mgT-8">
            <BiHomeSmile />
            <span className="lf-aside-item-heading">Home</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <MdOutlineTravelExplore />
            <span className="lf-aside-item-heading">Explore</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <BiBookmark />
            <span className="lf-aside-item-heading">Bookmarks</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <RiNotificationLine />
            <span className="lf-aside-item-heading">Notification</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <CgProfile />
            <span className="lf-aside-item-heading">Profile</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <button className="btn solid-pri-btn width100">
              Create New Post
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
