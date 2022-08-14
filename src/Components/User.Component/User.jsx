import React from "react";
import img from "./60111.jpg";
import { IoImageOutline } from "react-icons/io5";
import { BsEmojiWink } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { Header } from "../Header.Component/header";
import { LeftAside } from "../LeftAside.Component/LeftAside";
import { RightAside } from "../RightAside.component/RightAside";

export const User = () => {
  return (
    <>
      <div className="header-position">
        <Header />
      </div>
      <div className="container-main">
        <div className="left-aside-position">
          <LeftAside />
        </div>
        <div className="main">
          <div className="new-post">
            <div className="new-post-body">
              <div className="avatar-sec">
                <img src={img} alt="..." className="avatar avatar-md" />
              </div>
              <div className="textarea-container">
                <textarea
                  className="textarea"
                  placeholder="Tell me what's on your mind..."
                ></textarea>
                <div className="new-post-nav mgT-16">
                  <div className="new-post-options">
                    <ul className="new-post-item">
                      <IoImageOutline />
                    </ul>
                    <ul className="new-post-item">
                      <BsEmojiWink />
                    </ul>
                    <ul className="new-post-item">
                      <AiOutlineGif />
                    </ul>
                  </div>
                  <ul className="new-post-item">
                    <button className="btn  bg-pur  ">Create New Post</button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-aside">
          <RightAside />
        </div>
      </div>
    </>
  );
};
