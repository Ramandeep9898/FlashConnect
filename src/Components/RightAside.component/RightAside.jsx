import React from "react";
import "./right-aside.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { follow } from "../../redux/reducers/userSlice";

export const RightAside = () => {
  const user = useSelector((state) => state.auth.user);
  const allUser = useSelector((state) => state.users.users);
  const loginDetails = allUser.find((item) => item.username === user.username);
  const { username } = useParams();
  const dispatch = useDispatch();
  // console.log(loginDetails);

  const mightKnowUser = allUser
    .filter(
      (item) =>
        !loginDetails?.following.find(
          (tempUser) => tempUser.username === item.username
        ) && item.username !== user.username
    )
    .slice(0, 5);
  console.log(username);

  return (
    <>
      <div className="ryt-aside glass-effect glass-blur ">
        <div className=" user capitalize">People you may know</div>
        {mightKnowUser.map((suggestions) => (
          <>
            <ul
              key={suggestions._id}
              class=" bg-black list border displayF space-between ppl-yk mgT-16"
            >
              <div className="list-start-sec displayF">
                <img
                  src={suggestions.profilePhoto}
                  alt="..."
                  class="avatar avatar-s cursor"
                />
                <Link to={`${suggestions.username}`}>
                  <li className="list-items follow list-width">
                    {suggestions.firstName}
                    <span className="list-sec-text comment-option">
                      @{suggestions.username}
                    </span>
                  </li>
                </Link>
              </div>
              <div className="list-end-sec">
                <button
                  className="follow capitalize cursor empty-btn"
                  onClick={() => dispatch(follow(suggestions._id))}
                >
                  follow +
                </button>
              </div>
            </ul>
          </>
        ))}
      </div>

      {/* <div className="right-aside">
        <div className="ryt-aside">
          <div className="ryt-aside-heading capitalize">
            People you may know
          </div>
          <ul class="list border displayF space-between ppl-yk mgT-16">
            <div className="list-start-sec displayF">
              <img src={img} alt="..." class="avatar avatar-s cursor" />
              <li className="list-items list-width">
                Ramandeep
                <span className="list-sec-text">@ramandeep</span>
              </li>
            </div>
            <div className="list-end-sec">
              <p className="follow capitalize cursor">follow +</p>
            </div>
          </ul>
        </div>
      </div> */}
    </>
  );
};
