import React from "react";
import "./comment.css";
import img from "./60111.jpg";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { Header } from "../Header.Component/header";
import { LeftAside } from "../LeftAside.Component/LeftAside";
import { RightAside } from "../RightAside.component/RightAside";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../NewPost.Component/Post";

export const Comment = () => {
  const { postId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const allPosts = useSelector((state) => state.posts.posts);
  const currentPost = allPosts.find((item) => item._id === postId);
  console.log(allPosts._id);
  console.log(allPosts);
  console.log(postId);
  return (
    <>
      <div className="header-position">
        <Header />
      </div>
      <div className="container-main">
        <div className="left-aside-position">
          <LeftAside />
        </div>
        {/* <Post key={postId} /> */}
        <div className="main">
          <div className="new-post">
            <div className="new-post-body">
              <div className="avatar-sec">
                <img src={img} alt="..." className="avatar avatar-md" />
              </div>
              <div className="textarea-container">
                <div className="user-info  mgT-4">
                  <div className="user capitalize">Ramandeep kaur</div>
                  <div className="user-id cursor">@raman</div>
                  <div className="user-id">•</div>
                  <div className="user-id">1m</div>
                </div>
                <div className="user-info mgT-4">
                  <div className="user-id">Replying to</div>
                  <div className="color-text cursor">@tanaypratap</div>
                </div>
                <div className="user-info mgT-4">
                  <p className="comment-text ">hello</p>
                </div>
              </div>
            </div>
            <ul className="comment-options">
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
        <div className="right-aside">
          <RightAside />
        </div>
      </div>
    </>
  );
};
