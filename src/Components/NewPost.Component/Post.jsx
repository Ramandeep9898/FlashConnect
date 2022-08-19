import React from "react";
import "./new-post.css";
import img from "./60111.jpg";
import "../Comment.Component/comment.css";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";

export const Post = ({ post }) => {
  console.log(post);

  return (
    <>
      <div className="new-post">
        <div className="new-post-body">
          <div className="avatar-sec">
            <img
              src={post.profilePhoto}
              alt="..."
              className="avatar avatar-md"
            />
          </div>
          <div className="textarea-container">
            <div className="user-info  mgT-4">
              <div className="user capitalize">{post.firstName} </div>
              <div className="user-id cursor">@{post.username}</div>
              <div className="user-id">•</div>
              <div className="user-id">1m</div>
            </div>
            <div className="user-info mgT-4">
              <p className="comment-text ">{post.content} </p>
            </div>

            <ul className="comment-options mgT-16">
              <li className="comment-option cursor">
                <AiOutlineHeart />
              </li>
              <li className="comment-option cursor">
                <GoComment />
              </li>
              <li className="comment-option cursor">
                <AiOutlineShareAlt />
              </li>
              <li className="comment-option cursor">
                <BsBookmark />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
