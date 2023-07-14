import React from "react";
import "./comment.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../NewPost.Component/Post";
import { CommentCard } from "./CommentCard";
import { useState } from "react";
import { postComment } from "../../redux/reducers/postSlice";

export const Comment = () => {
  const { postId } = useParams();
  const allPosts = useSelector((state) => state.posts.posts);
  const currentPost = allPosts.find((item) => item._id === postId);
  const comments = [...currentPost.comments];
  const replyingTo = currentPost.username;
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-main">
        <div className="currPostNdcommemt">
          <Post key={currentPost._id} post={currentPost} />
          <div className="add-comment-sec glass-blur glass-effect">
            <div className="input-box width100 ">
              <input
                id="text"
                type="text"
                className="input "
                value={comment}
                name="valide"
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            {console.log(comment)}
            <button
              className="btn bg-pur "
              onClick={() =>
                dispatch(
                  postComment({ postId, commentData: { text: comment } })
                )
              }
            >
              Comment
            </button>
          </div>

          {comments.map((comments) => (
            <CommentCard
              comments={comments}
              replyingTo={replyingTo}
              postId={postId}
            />
          ))}
        </div>
      </div>
    </>
  );
};
