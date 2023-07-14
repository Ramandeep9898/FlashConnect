import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiEdit2, FiShare2, FiLogOut } from "react-icons/fi";
import { Header } from "../Header.Component/header";
import { LeftAside } from "../LeftAside.Component/LeftAside";
import { RightAside } from "../RightAside.component/RightAside";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserPost, follow, unfollow } from "../../redux/reducers/userSlice";
import { Post } from "../NewPost.Component/Post";

export const User = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const allUser = useSelector((state) => state.users.users);
  const loggedInUser = useSelector((state) => state.auth.user);
  const logindetails = allUser.find(
    (item) => item.usersname === loggedInUser.usersname
  );

  const profileUser = allUser.find((item) => item.username === username);

  let currentUserPosts = useSelector((state) => state.users.profileUserPosts);
  let currentUser =
    logindetails.username === profileUser.username ? logindetails : profileUser;

  const followingCurrentUser = logindetails?.following.some(
    (user) => user.username === profileUser?.username
  );

  console.log("followingCurrentUser", profileUser);

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserPost(currentUser.username));
    }
  }, [currentUser]);

  return (
    <>
      <div className="new-post glass-effect glass-blur">
        <div className="new-post-body">
          <div className="avatar-sec">
            <img
              src={profileUser.profilePhoto}
              alt="..."
              className="post-img"
            />
          </div>
          <div className="textarea-container">
            <div className="user-container">
              <div className="h4 fW-700 text-white">
                {profileUser.firstName}
              </div>
              <div className="h5 user-id">@{profileUser.username}</div>
              <div className="h5 mgT-16 text-white">{profileUser.bio}</div>
              {/* <div className="h5 mgT-16">
                <a href="https://ramandeep.netlify.app/index.html">
                  https://ramandeep.netlify.app/index.html
                </a>
              </div> */}
            </div>
            <div className="new-post-nav mgT-16">
              <div className="new-post-options ">
                <ul className="h5 user-id">
                  <span>
                    <span className="fW-500">
                      {profileUser?.followers?.length}
                    </span>
                    Followers
                  </span>
                </ul>
                <ul className="h5 user-id">
                  <span>
                    <span className="fW-500"> {user?.following?.length} </span>
                    Following
                  </span>
                </ul>
                <ul className="h5 user-id">
                  <span>
                    <span className="fW-500">{currentUserPosts.length}</span>
                    post
                  </span>
                </ul>
              </div>
              <ul className="h5 gap">
                <button className="btn bg-pur ">
                  <FiShare2 />
                </button>
                {logindetails.username !== profileUser.username ? (
                  <button
                    className="btn bg-pur "
                    onClick={() => {
                      followingCurrentUser
                        ? dispatch(unfollow(profileUser._id))
                        : dispatch(follow(profileUser._id));
                    }}
                  >
                    {followingCurrentUser ? "following" : "follow"}
                  </button>
                ) : null}
                {logindetails?.username === profileUser?.username ? (
                  <div className="gap">
                    <button className="btn bg-pur">
                      <FiEdit2 />
                    </button>
                    <button className="btn bg-pur">
                      <FiLogOut />
                    </button>
                  </div>
                ) : (
                  " "
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {currentUserPosts.map((posts) => (
        <Post post={posts} key={posts._id} />
      ))}
    </>
  );
};
