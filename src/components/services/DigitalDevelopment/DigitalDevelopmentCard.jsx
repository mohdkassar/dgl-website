import React from "react";
import "./digitaldevelopmentcard.css";
import appDevelopmentIconActive from "../../../assets/app-development-icon-active.png";
import appDevelopmentIconInactive from "../../../assets/app-development-icon-inactive.png";
import uxuiIconActive from "../../../assets/ui-ux-design-icon-active.png";
import uxuiIconInactive from "../../../assets/ui-ux-design-icon-inactive.png";
import webDevIconActive from "../../../assets/web-development-icon-active.png";
import webDevIconInactive from "../../../assets/web-development-icon-inactive.png";

const DigitalDevelopmentCard = ({ parameters, id }) => {
  function renderImg(parameters) {
    switch (parameters.id) {
      case "app-development":
        return appDevelopmentIconActive;
      case "ux-ui-development":
        return uxuiIconActive;
      case "web-development":
        return webDevIconActive;
      default:
        return uxuiIconInactive;
    }
  }

  return (
    <div className="dgl_services-digital-development-card">
      <div className="dgl_services-digital-development-card-icon">
        {" "}
        <img
          src={renderImg({ id })}
          style={{ width: "50px" }}
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
