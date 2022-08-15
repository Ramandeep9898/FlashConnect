import React from "react";
import img from "./60111.jpg";
import { FiEdit2, FiShare2, FiLogOut } from "react-icons/fi";
import { Header } from "../Header.Component/header";
import { LeftAside } from "../LeftAside.Component/LeftAside";
import { RightAside } from "../RightAside.component/RightAside";
// import { NewPost } from "../NewPost.Component/NewPost";

export const User = () => {
  return (
    <>
      <Header />
      <div className="container-main">
        <LeftAside />

        <div className="main">
          {/* profile */}
          <div className="new-post">
            <div className="new-post-body">
              <div className="avatar-sec">
                <img src={img} alt="..." className="avatar avatar-xl" />
              </div>
              <div className="textarea-container">
                <div className="user-container">
                  <div className="h4 fW-700">Ramandeep kaur</div>
                  <div className="h5 grey-color">@ramandeep</div>
                  <div className="h5 mgT-16">finding Myself</div>
                  <div className="h5 mgT-16">
                    <a href="https://ramandeep.netlify.app/index.html">
                      https://ramandeep.netlify.app/index.html
                    </a>
                  </div>
                </div>
                <div className="new-post-nav mgT-16">
                  <div className="new-post-options ">
                    <ul className="h5">
                      <span>
                        <span className="fW-500"> 5</span> Followers
                      </span>
                    </ul>
                    <ul className="h5">
                      <span>
                        <span className="fW-500"> 5 </span> Following
                      </span>
                    </ul>
                    <ul className="h5">
                      <span>
                        <span className="fW-500"> 5</span> post
                      </span>
                    </ul>
                  </div>
                  <ul className="h5 gap">
                    <button className="btn bg-pur ">
                      <FiEdit2 />
                    </button>
                    <button className="btn bg-pur ">
                      <FiShare2 />
                    </button>
                    <button className="btn bg-pur ">
                      <FiLogOut />
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* post */}
        </div>

        <RightAside />
      </div>
    </>
  );
};
