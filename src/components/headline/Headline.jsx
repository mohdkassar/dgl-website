import React from "react";
import "./headline.css";
import Separator from "../seperator/Separator";

const Headline = ({ title, subheader }) => {
  return (
    <div className="dgl__headline">
      <Separator width={"5%"}></Separator>
      <div className="dgl__headline-title">
        <h2>
          <span style={{ color: "#fff" }}>
            {title.split(" ").length > 0 ? title.split(" ")[0] : title}
          </span>{" "}
          {title.split(" ").length > 0 ? title.split(" ")[1] : ""}
        </h2>
      </div>
      <div className="dgl__headline-subheader">
        <p>{subheader}</p>
      </div>
    </div>
  );
};

export default Headline;
