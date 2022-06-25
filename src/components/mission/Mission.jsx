import React from "react";
import "./mission.css";
import mission_img from "../../assets/mission.png";

const Mission = () => {
  return (
    <div className="dgl__mission">
      <div className="dgl__mission-header_container">
        <h1 style={{ color: "#01c8e9" }}>
          <span>YOU DESERVE</span>
          <span style={{ display: "block" }}>EXCELLENCE.</span>
        </h1>
        <h1 style={{ color: "white" }}>We live by it.</h1>
        <h4>
          <span>OUR MULTIDISCIPLINARY</span>
          <span style={{ display: "block" }}>FRAMEWORK FOR SUCCESS.</span>
        </h4>
      </div>
      <div className="dgl__mission_logo">
        <img src={mission_img} style={{ width: "60%" }} alt="mission" />
      </div>
    </div>
  );
};

export default Mission;
