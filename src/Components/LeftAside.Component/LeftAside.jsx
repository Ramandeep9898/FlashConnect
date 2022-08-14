import React from "react";
import "./left-aside.css";
import img from "./60111.jpg";
import { BiHomeSmile, BiBookmark } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiNotificationLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";

export const LeftAside = () => {
  const dispatch = useDispatch();
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
        <div className="profile">
          <ul class="list border displayF space-between ppl-yk mgT-16">
            <div className="list-start-sec displayF">
              <img src={img} alt="..." class="avatar avatar-s cursor" />
              <li className="list-items list-width">
                Ramandeep
                <span className="list-sec-text">@ramandeep</span>
              </li>
            </div>
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
    </>
  );
};
