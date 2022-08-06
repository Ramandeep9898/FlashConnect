import React from "react";
import "./right-aside.css";
import img from "./60111.jpg";

export const RightAside = () => {
  return (
    <>
      <div className="ryt-aside">
        <div className="ryt-aside-heading capitalize">People you may know</div>
        <ul class="list border displayF space-between ppl-yk mgT-16">
          <div className="list-start-sec displayF">
            <img src={img} alt="..." class="avatar avatar-s cursor" />
            <li class="list-items list-width">
              Ramandeep
              <span class="list-sec-text">@ramandeep</span>
            </li>
          </div>
          <div className="list-end-sec">
            <p className="follow capitalize cursor">follow +</p>
          </div>
        </ul>
      </div>
    </>
  );
};
