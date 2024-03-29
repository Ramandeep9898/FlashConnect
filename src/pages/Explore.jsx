import React from "react";
import { Header } from "../Components/Header.Component/header";
import { LeftAside } from "../Components/LeftAside.Component/LeftAside";
import { RightAside } from "../Components/RightAside.component/RightAside";
import { Post } from "../Components/NewPost.Component/Post";
import { useSelector } from "react-redux";

export const Explore = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log("post", posts);
  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
};
