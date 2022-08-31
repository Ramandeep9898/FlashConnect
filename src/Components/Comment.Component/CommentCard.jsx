import React from "react";
import "./comment.css";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineDelete,
  AiTwotoneDelete,
} from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const CommentCard = ({ comments, replyingTo }) => {
  const user = useSelector((state) => state.auth.user);
  const isCurrentPostUserLogined = user.username === replyingTo ? true : false;
  const dispatch = useDispatch();
  return (
    <>
      <div className="new-post">
        <div className="new-post-body">
          <div className="avatar-sec">
            <img
              src={comments.profilePhoto}
              alt="..."
              className="avatar avatar-md"
            />
          </div>
          <div className="textarea-container">
            <div className="user-info  mgT-4">
              <div className="user capitalize">{comments.firstName}</div>
              <Link to={`/${comments.username}`}>
                <div className="user-id cursor">@{comments.username}</div>
              </Link>
              <div className="user-id">•</div>
              <div className="user-id">1m</div>
            </div>
            <div className="user-info mgT-4">
              <div className="user-id">Replying to</div>
              <Link to={`/${replyingTo}`}>
                <div className="color-text cursor">@{replyingTo}</div>
              </Link>
            </div>
            <div className="user-info mgT-4">
              <p className="comment-text ">{comments.text}</p>
            </div>
            <ul className="comment-options mgT-16">
              <li className="comment-option cursor">
                <AiOutlineHeart />
              </li>

              <li className="comment-option cursor">
                <AiOutlineShareAlt />
              </li>

              <li className="comment-option cursor" onClick={() => dispatch()}>
                {isCurrentPostUserLogined ? <AiOutlineDelete /> : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
