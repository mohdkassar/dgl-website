import React from "react";
import "./sustainability.css";
import ai_img from "../../assets/ai.png";

const Sustainability = () => {
  return (
    <div className="dgl__banner">
      <div className="dgl__banner_logo">
        <img src={ai_img} alt="banner" />
      </div>
      <div className="dgl__banner-header_container">
        <h1>Work in AI/VR/Sustainability</h1>
        <h4>RECEIVE A COMPLIMENTARY CONSULTANCY</h4>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
          neque, tempor at ante vel, dictum rutrum urna. Cras molestie interdum
          massa, in imperdiet turpis sollicitudin quis. In malesuada orci vel
          enim dignissim ullamcorper. Sed laoreet dolor eget posuere blandit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h6>
        <div>
          <button>BOOK A SLOT</button>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
