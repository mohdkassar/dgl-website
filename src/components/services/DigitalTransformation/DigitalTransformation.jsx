import React from "react";
import "./digitaltransformation.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import Separator from "../../seperator/Separator";

const DigitalTransformation = () => {
  const [digitalTransOption, setdigitalTransOption] = useState("a");

  const digitalTransOptionPressed = (option) => {
    setdigitalTransOption(option);
  };

  const digitalTransformationJSON = [
    {
      title: "Digital Business Development",
      description:
        "Reprehenderit et proident quis do consequat fugiat culpa mollit in. Aliquip eu ex duis ut ut commodo mollit. Ipsum deserunt enim aliquip nisi nostrud magna labore officia irure velit aliqua. Elit magna sit reprehenderit tempor aute dolor dolor proident occaecat sunt aute elit.",
    },
    {
      title: "Digital Test Development",
      description:
        "Reprehenderit et proident quis do consequat fugiat culpa mollit in. Aliquip eu ex duis ut ut commodo mollit. Ipsum deserunt enim aliquip nisi nostrud magna labore officia irure velit aliqua. Elit magna sit reprehenderit tempor aute dolor dolor proident occaecat sunt aute elit.",
    },
  ];

  return (
    <div className="dgl_services-digital-transformation-content">
      <div className="dgl_services-digital-transformation-content-button-list">
        <div
          className="dgl_services-digital-transformation-content-button-a"
          style={{
            backgroundImage:
              digitalTransOption === "a"
                ? " linear-gradient(to bottom,#0076dd 0%,#01458c 50%,#01458c 100%)"
                : "linear-gradient(to right,#0a1230 0%,#0a1230 50%,#0c1e4c 100%)",
            borderTop: digitalTransOption === "a" ? "3px solid yellow" : "none",
          }}
          onClick={() => digitalTransOptionPressed("a")}
        >
          {digitalTransOption === "a" ? (
            <FaAngleRight size={20}></FaAngleRight>
          ) : (
            <FaAngleLeft size={20}></FaAngleLeft>
          )}
        </div>
        <div
          className="dgl_services-digital-transformation-content-button-b"
          style={{
            backgroundImage:
              digitalTransOption === "b"
                ? " linear-gradient(to bottom,#0076dd 0%,#01458c 50%,#01458c 100%)"
                : "linear-gradient(to right,#0a1230 0%,#0a1230 50%,#0c1e4c 100%)",
            borderTop: digitalTransOption === "b" ? "3px solid yellow" : "none",
          }}
          onClick={() => digitalTransOptionPressed("b")}
        >
          {digitalTransOption === "b" ? (
            <FaAngleRight size={20}></FaAngleRight>
          ) : (
            <FaAngleLeft size={20}></FaAngleLeft>
          )}
        </div>
      </div>
      {digitalTransOption === "b" ? (
        <div className="dgl_services-digital-transformation-content-description">
          <h1>{digitalTransformationJSON[0].title}</h1>
          <Separator width={"5%"}></Separator>
          <p style={{ fontSize: "medium" }}>
            {digitalTransformationJSON[0].description}
          </p>
        </div>
      ) : (
        <div className="dgl_services-digital-transformation-content-description">
          <h1>{digitalTransformationJSON[1].title}</h1>
          <Separator width={"5%"}></Separator>
          <p style={{ fontSize: "medium" }}>
            {digitalTransformationJSON[1].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default DigitalTransformation;
