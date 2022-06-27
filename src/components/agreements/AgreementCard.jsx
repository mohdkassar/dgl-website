import React from "react";
import "./agreements.css";
import accelerateIcon from "../../assets/accelerate_icon.png";
import growIcon from "../../assets/grow_icon.png";
import startUpIcon from "../../assets/start_up_icon.png";

const AgreementCard = ({ active, onClick, parameters }) => {
  return (
    <div
      className={`dgl_agreements-card${active ? "-active" : ""}`}
      onClick={() => onClick(parameters.id)}
    >
      <div className="dgl_agreements-card-duration">
        <h4>{parameters.duration.title}</h4>
        <p>{parameters.duration.subheader}</p>
      </div>
      <div className="dgl_agreements-card-logo">
        <img
          src={
            parameters.id === "startup"
              ? startUpIcon
              : parameters.id === "grow"
              ? growIcon
              : accelerateIcon
          }
          alt="start-up"
        />
      </div>
      <div className="dgl_agreements-card-title">
        <h1>{parameters.title}</h1>
      </div>
      <div className="dgl_agreements-card-features">
        <ul className="dgl_agreements-card-features-list">
          {parameters.features.map((header) => {
            return (
              <li className="dgl_agreements-card-feature">
                <p>{header}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AgreementCard;
