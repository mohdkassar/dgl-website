import React from "react";
import "./mission.css";
import mission_img from "../../assets/mission.png";

const Mission = () => {
  return (
    <div className="dgl__banner">
      <div className="dgl__banner-header_container">
        <h4>YOU DESERVE EXCELLENCE.</h4>
        <h1>We live by it.</h1>
        <h6>OUR MULTIDISCIPLINARY FRAMEWORK FOR SUCCESS.</h6>
      </div>
      <div className="dgl__banner_logo">
        <img src={mission_img} alt="banner" />
      </div>
    </div>
  );
};

export default Mission;
