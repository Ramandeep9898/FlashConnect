import React from "react";
import "./new-post.css";
import "../Comment.Component/comment.css";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likePost } from "../../redux/reducers/postSlice";

export const Post = ({ post }) => {
  const dispatch = useDispatch();
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
              <Link to={`/${post.username}`}>
                <div className="user-id cursor">@{post.username}</div>
              </Link>
              <div className="user-id">•</div>
              <div className="user-id">1m</div>
            </div>
            <div className="user-info mgT-4">
              <p className="comment-text ">{post.content} </p>
            </div>

            <ul className="comment-options mgT-16">
              <li
                className="comment-option cursor"
                onClick={() => {
                  dispatch(likePost(post._id));
                }}
              >
                <AiOutlineHeart />
                {post.likes.likeCount}
              </li>
              <li className="comment-option cursor">
                <GoComment />
                {post.comments.length}
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
