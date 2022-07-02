import React from "react";
import "./digitalmarketingcard.css";

const DigitalMarketingCard = ({ parameters }) => {
  return (
    <div className="dgl_services-digital-marketing-card">
      <div>
        <h1 style={{ color: "#fff" }}>{parameters.title}</h1>
      </div>
      <div className="dgl_services-digital-marketing-card-paragraph">
        <p>{parameters.description}</p>
      </div>
    </div>
  );
};

export default DigitalMarketingCard;
