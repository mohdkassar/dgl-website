import React from "react";
import "./sustainability.css";
import ai_img from "../../assets/ai.png";
import Button from "../button/Button";

const Sustainability = ({ refference }) => {
  return (
    <div className="dgl__sustainabilty" ref={refference}>
      <div className="dgl__sustainabilty_logo">
        <img src={ai_img} alt="sustainabilty" style={{ width: "90%" }} />
      </div>
      <div className="dgl__sustainabilty-header_container">
        <h1>
          <span>
            Work in <span className="big_blue">AI/VR/</span>
          </span>
          <span className="big_blue" style={{ display: "block" }}>
            Sustainability
          </span>
        </h1>
        <h4>RECEIVE A COMPLIMENTARY CONSULTANCY</h4>
        <h6>
          We at DigiLance believe in a bright future, one where the benefits of
          technology and the beauty of the environment could both be harnessed
          and enjoyed. To play an active role in sculpting that future, we offer
          special rates and a complimentary consultation to any businesses
          operating in the sectors of artificial intelligence, virtual reality
          and sustainability.
        </h6>
        <div>
          <Button name={"BOOK A SLOT"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
