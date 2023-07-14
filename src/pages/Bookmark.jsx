import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Post } from "../Components/NewPost.Component/Post";

export const Bookmark = () => {
  const bookmarks = useSelector((state) => state.posts.bookmarks);
  const posts = useSelector((state) => state.posts.posts);
  console.log("bookmarks", bookmarks);
  const bookmarkedPosts = posts.filter((post) =>
    bookmarks.find((id) => post._id === id)
  );
  return (
    <>
      {bookmarkedPosts.length <= 0 ? (
        <div className="empty-bookmark text-white glass-blur glass-effect post">
          <h1 className="h5">Nothing in Bookmark Section</h1>
          <Link to="/home/explore">
            <button className="btn-big mgT-32 gradient-orange text-white ">
              Explore
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
      {bookmarkedPosts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </>
  );
};
