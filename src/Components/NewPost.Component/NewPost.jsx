import React from "react";
import "./new-post.css";
import img from "./60111.jpg";
import { IoImageOutline } from "react-icons/io5";
import { BsEmojiWink } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";

export const NewPost = () => {
  return (
    <>
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
                <button className="btn solid-pri-btn ">Create New Post</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
