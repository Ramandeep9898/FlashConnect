import React from "react";
import "./new-post.css";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { BsEmojiWink } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../redux/reducers/postSlice";

export const CreateNewPost = () => {
  const dispatch = useDispatch();
  const [postDetails, setPostDetails] = useState({
    content: "",
    postImage: "",
  });

  const user = useSelector((state) => state.auth.user);
  const allUser = useSelector((state) => state.users.users);
  const loginDetails = allUser.find((item) => item.username === user.username);

  const cloudinaryPost = async (postDetails) => {
    const data = new FormData();
    data.append("file", postDetails.postImage);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    const requestOptions = {
      method: "POST",
      body: data,
    };
    // setIsLoading(true);
    await fetch(process.env.REACT_APP_CLOUDINARY_API_URL, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        dispatch(
          createPost({ content: postDetails.content, postImage: json.url })
        );
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postHandler = (postDetails) => {
    if (postDetails.content !== "") {
      if (postDetails.content.length > 5) {
        if (postDetails.postImage !== "") {
          cloudinaryPost(postDetails);
        } else {
          dispatch(createPost(postDetails));
        }
        setPostDetails({
          content: "",
          postImage: "",
        });
      } else {
        console.log("Post length must be more than 5 chars!");
      }
    } else {
      console.log("Post is Empty. Try Again!");
    }
  };
  return (
    <>
      <div className="new-post">
        <div className="new-post-body">
          <div className="avatar-sec">
            <img
              src={loginDetails.profilePhoto}
              alt="..."
              className="avatar avatar-md"
            />
          </div>
          <div className="textarea-container">
            <textarea
              type="text"
              className="textarea"
              placeholder="Tell me what's on your mind..."
              value={postDetails.postContent}
              onChange={(e) => {
                setPostDetails((prev) => ({
                  ...prev,
                  content: e.target.value,
                }));
              }}
            ></textarea>
            <div className="new-post-nav mgT-16">
              <div className="new-post-options cursor">
                <ul
                  className="new-post-item"
                  defaultValue={postDetails.postImage}
                  // onClick={(e) => {
                  //   setPostDetails((prev) => ({
                  //     ...prev,
                  //     postImage: "",
                  //   }));
                  // }}
                >
                  <IoImageOutline />
                </ul>
                <ul className="new-post-item">
                  <BsEmojiWink />
                </ul>
                <ul className="new-post-item">
                  <AiOutlineGif />
                </ul>
              </div>
              <ul className="new-post-item">
                <button
                  className="btn  bg-pur"
                  onClick={() => {
                    postHandler(postDetails);
                  }}
                >
                  Create New Post +
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
