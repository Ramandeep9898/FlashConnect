import { CreateNewPost } from "../NewPost.Component/CreateNewPost";
import { Post } from "../NewPost.Component/Post";
import { useSelector } from "react-redux";

export const HomeCreateNewPost = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <CreateNewPost />

      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
};
