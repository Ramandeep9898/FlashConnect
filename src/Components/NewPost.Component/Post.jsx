import React from "react";
import "./new-post.css";
import "../Comment.Component/comment.css";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likePost, dislikePost } from "../../redux/reducers/postSlice";
import {
  addToBookmarks,
  removeFromBookmarks,
} from "../../redux/reducers/postSlice";

export const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { username, postId } = useParams();
  // console.log("currentLocation", username, postId);
  const user = useSelector((state) => state.auth.user);
  const bookmarks = useSelector((state) => state.posts.bookmarks);
  let isPostLikedByUser = post.likes.likedBy?.some(
    (item) => item.username === user.username
  )
    ? true
    : false;

  const isPostBookmarkedByLoginUser = bookmarks.some(
    (item) => item === post._id
  )
    ? true
    : false;

  return (
    <>
      <div className="new-post glass-effect glass-blur">
        <div className="new-post-body">
          <div className="avatar-sec">
            <Link to={`/home/${post.username}`}>
              <img src={post.profilePhoto} alt="..." className="post-img" />
            </Link>
          </div>
          <div className="textarea-container">
            <div className="user-info  mgT-4">
              <Link to={`/home/${post.username}`}>
                <div className="user capitalize">{post.firstName} </div>
              </Link>
              <Link to={`/home/${post.username}`}>
                <div className="user-id cursor">@{post.username}</div>
              </Link>
              <div className="user-id">•</div>
              <div className="user-id">1m</div>
            </div>
            <div className="user-info mgT-4">
              <p className="comment-text ">{post.content} </p>
            </div>

            <div className="comment-options mgT-16">
              <li
                className="comment-option cursor"
                onClick={() => {
                  isPostLikedByUser
                    ? dispatch(dislikePost(post._id))
                    : dispatch(likePost(post._id));
                }}
              >
                {isPostLikedByUser ? <AiFillHeart /> : <AiOutlineHeart />}
                {post.likes.likeCount}
              </li>
              <Link to={`/home/${username}/${post._id}`}>
                <li className="comment-option cursor">
                  <GoComment />
                  {post.comments.length}
                </li>
              </Link>
              <li className="comment-option cursor">
                <AiOutlineShareAlt />
              </li>
              <li
                className="comment-option cursor"
                onClick={() => {
                  if (isPostBookmarkedByLoginUser) {
                    dispatch(removeFromBookmarks(post._id));
                  } else {
                    dispatch(addToBookmarks(post._id));
                  }
                }}
              >
                {isPostBookmarkedByLoginUser ? (
                  <BsBookmarkFill />
                ) : (
                  <BsBookmark />
                )}
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
