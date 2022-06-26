import React from "react";
import "./sustainability.css";
import ai_img from "../../assets/ai.png";

const Sustainability = ({ refference }) => {
  return (
    <div className="dgl__sustainabilty" ref={refference}>
      <div className="dgl__sustainabilty_logo">
        <img src={ai_img} alt="sustainabilty" style={{ width: "60%" }} />
      </div>
      <div className="dgl__sustainabilty-header_container">
        <h1>
          <span>Work in AI/VR/</span>
          <span style={{ display: "block" }}>Sustainability</span>
        </h1>
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
