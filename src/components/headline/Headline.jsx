import React from "react";
import "./headline.css";
import Separator from "../seperator/Separator";

const Headline = ({ title, subheader, separatorWidth }) => {
  const first = title.split(" ")[0];
  const last = title.split(" ");
  last.shift();

  return (
    <div className="dgl__headline">
      <Separator width={separatorWidth ? separatorWidth : "5%"}></Separator>
      <div className="dgl__headline-title">
        <h2>
          <span style={{ color: "#fff" }}>
            {title.split(" ").length > 0 ? first : title}
          </span>{" "}
          {title.split(" ").length > 0 ? last.join(" ") : ""}
        </h2>
      </div>
      <div className="dgl__headline-subheader">
        <p>{subheader}</p>
      </div>
    </div>
  );
};

export default Headline;
