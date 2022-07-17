import React from "react";
import "./agreements.css";
import accelerateIcon from "../../assets/accelerate_icon.png";
import growIcon from "../../assets/grow_icon.png";
import startUpIcon from "../../assets/start_up_icon.png";
import Button from "../button/Button";

const AgreementCard = ({ active, onClick, parameters }) => {
  return (
    <div
      className={`dgl_agreements-card${active ? "-active" : ""}`}
      onMouseEnter={() => onClick(parameters.id)}
      style={{ opacity: active ? 1 : 0.5 }}
    >
      <div className="dgl_agreements-card-duration">
        <h2 style={{ color: active ? "#fff" : "var(--light_blue)" }}>
          {parameters.duration.title}
        </h2>
        <p
          className="dgl_agreements-card-title"
          style={{ color: active ? "var(--yellow)" : "var(--grey)" }}
        >
          {parameters.duration.subheader.toUpperCase()}
        </p>
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
                <p className="dgl__paragraph">{header}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="dgl_agreements-card-inquire"
        style={{ display: active ? "flex" : "none" }}
      >
        <Button name={"INQUIRE NOW"}></Button>
      </div>
    </div>
  );
};

export default AgreementCard;
