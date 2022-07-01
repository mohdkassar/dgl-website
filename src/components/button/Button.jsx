import React from "react";
import "./button.css";
import { BsFillCaretRightFill } from "react-icons/bs";

const Sustainability = ({ name }) => {
  return (
    <div className="dgl__button">
      <div className="dgl__button-content">
        <p>{name}</p>
      </div>
      <div className="dgl__button-icon-container">
        <BsFillCaretRightFill className="dgl__button-icon"></BsFillCaretRightFill>
      </div>
    </div>
  );
};

export default Sustainability;
