import React from "react";
import "./home.css";
import { LeftAside } from "../Components/LeftAside.Component/LeftAside";
import { RightAside } from "../Components/RightAside.component/RightAside";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export const Home = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <div className="absolute">
        <div className="faint-glow-blue"></div>
        <div className="faint-glow-red"></div>
      </div>
      <div className="absolute-right">
        <div className="faint-glow-blue"></div>
        <div className="faint-glow-red"></div>
      </div>
      <div className="container-main">
        <div className="left-aside-position">
          <LeftAside />
        </div>
        <div className="main">
          <Outlet />
        </div>
        <div className="right-aside">
          <RightAside />
        </div>
      </div>
    </>
  );
};
