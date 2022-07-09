import React from "react";
import "./servicetitle.css";

const ServiceTitle = ({ title, number }) => {
  const first = title.split(" ")[0];
  const last = title.split(" ");
  last.shift();

  return (
    <div className="dgl_services-title">
      <h3>
        <span style={{ color: "grey" }}>{number}</span>
      </h3>
      <h3>
        <span>{first}</span>
      </h3>
      <h3>
        <span style={{ color: "#01c8e9" }}>{last}</span>
      </h3>
    </div>
  );
};

export default ServiceTitle;
