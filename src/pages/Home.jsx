import React from "react";
import "./home.css";
import { Header } from "../Components/Header.Component/header";
import { LeftAside } from "../Components/LeftAside.Component/LeftAside";
import { RightAside } from "../Components/RightAside.component/RightAside";
import { CreateNewPost } from "../Components/NewPost.Component/CreateNewPost";
import { Post } from "../Components/NewPost.Component/Post";
import { useSelector } from "react-redux";

export const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log("post", posts);
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
          <CreateNewPost />

          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
        <div className="right-aside">
          <RightAside />
        </div>
      </div>
    </>
  );
};
