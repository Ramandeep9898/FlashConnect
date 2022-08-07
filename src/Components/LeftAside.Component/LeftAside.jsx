import React from "react";
import "./left-aside.css";
import img from "./60111.jpg";
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
            <span>Home</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <MdOutlineTravelExplore />
            <span>Explore</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <BiBookmark />
            <span>Bookmarks</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <RiNotificationLine />
            <span>Notification</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <CgProfile />
            <span>Profile</span>
          </li>
          <li className="lf-aside-item mgT-8">
            <button className="btn bg-pur width100">Create New Post</button>
          </li>
        </ul>
        <div className="profile ">
          <img src={img} alt="..." className="avatar avatar-md" />
          <div className="profile-info">
            <span className="color cursor">Ramandeep</span>
            <span className="list-sec-color cursor">@ramandeep</span>
          </div>
        </div>
      </nav>
    </>
  );
};
