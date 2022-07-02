import React from "react";
import "./digitaldevelopmentcard.css";
import appDevelopmentIcon from "../../../assets/app_development_icon.png";

const DigitalDevelopmentCard = ({ parameters }) => {
  return (
    <div className="dgl_services-digital-development-card">
      <div className="dgl_services-digital-development-card-icon">
        {" "}
        <img
          src={appDevelopmentIcon}
          style={{ width: "50%" }}
          alt={parameters.id}
        />
      </div>
      <div className="dgl_services-digital-development-card-content">
        <h2>{parameters.title}</h2>
        <p>{parameters.description}</p>
      </div>
    </div>
  );
};

export default DigitalDevelopmentCard;
