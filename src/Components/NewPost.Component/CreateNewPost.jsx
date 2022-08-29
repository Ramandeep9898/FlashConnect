import React from "react";
import "./new-post.css";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { BsEmojiWink } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../redux/reducers/postSlice";

export const CreateNewPost = () => {
  const dispatch = useDispatch();
  const [postDetails, setpostDetails] = useState({
    postContent: "",
    postImage: "",
  });

  const user = useSelector((state) => state.auth.user);
  const allUser = useSelector((state) => state.users.users);
  const loginDetails = allUser.find((item) => item.username === user.username);

  const createPostHandler = (postDetails) => {
    dispatch(createPost(postDetails));
  };

  return (
    <>
      <div className="new-post">
        <div className="new-post-body">
          <div className="avatar-sec">
            <img
              src={loginDetails.profilePhoto}
              alt="..."
              className="avatar avatar-md"
            />
          </div>
          <div className="textarea-container">
            <textarea
              rows="5"
              cols="24"
              type="text"
              maxLength="150"
              className="textarea"
              placeholder="Tell me what's on your mind..."
              value={postDetails.postContent}
              onChange={(e) => {
                setpostDetails((prev) => ({
                  ...prev,
                  postContent: e.target.value,
                }));
              }}
            ></textarea>
            <div className="new-post-nav mgT-16">
              <div className="new-post-options cursor">
                <ul
                  className="new-post-item"
                  defaultValue={postDetails.postImage}
                  onClick={(e) => {
                    setpostDetails((prev) => ({
                      ...prev,
                      postImage: "",
                    }));
                  }}
                >
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
                <button
                  className="btn  bg-pur"
                  onClick={() => {
                    createPostHandler(postDetails);
                  }}
                >
                  Create New Post +
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
