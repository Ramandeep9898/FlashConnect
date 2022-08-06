import React from "react";
import "./home.css";
import { Header } from "../Components/Header.Component/header";
import { LeftAside } from "../Components/LeftAside.Component/LeftAside";
import { RightAside } from "../Components/RightAside.component/RightAside";
import { NewPost } from "../Components/NewPost.Component/NewPost";

export const Home = () => {
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
          <NewPost />
          <NewPost />
          <NewPost />
          <NewPost />
          <NewPost />
          <NewPost />
          <NewPost />
          <NewPost />
        </div>
        <div className="right-aside">
          <RightAside />
        </div>
      </div>
    </>
  );
};
