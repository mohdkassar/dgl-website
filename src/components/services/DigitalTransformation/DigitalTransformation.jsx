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
        "The most important steps are the ones you’re about to take. Prepare to witness the metamorphosis of your business with multidisciplinary, creative, & analytical intelligence. Get better, faster and more precise results while lowering your long-term overhead costs. By pairing the right technological tools to your business, we will effectively position you as tomorrow’s market leader today.",
    },
    {
      title: "Work in AI/VR/Sustainabiity",
      description:
        "We at DigiLance believe in a bright future, one where the benefits of technology and the beauty of the environment could both be harnessed and enjoyed. To play an active role in sculpting that future, we offer special rates and a complimentary consultation to any businesses operating in the sectors of artificial intelligence, virtual reality and sustainability.",
    },
  ];

  return (
    <div className="dgl_services-digital-transformation-content">
      <div className="dgl_services-digital-transformation-content-button-list">
        <div
          className={`dgl_services-digital-transformation-content-button-a ${
            digitalTransOption === "a" ? "active" : "inactive"
          }`}
          style={{
            backgroundImage:
              digitalTransOption === "a"
                ? " linear-gradient(to bottom,#0076dd 0%,#01458c 50%,#01458c 100%)"
                : "linear-gradient(to right,#0a1230 0%,#0a1230 50%,#0c1e4c 100%)",
            borderTop: digitalTransOption === "a" ? "3px solid yellow" : "none",
          }}
          onMouseEnter={() => digitalTransOptionPressed("a")}
        >
          {digitalTransOption === "a" ? (
            <FaAngleRight color="var(--light_blue)" size={20}></FaAngleRight>
          ) : (
            <FaAngleLeft size={20}></FaAngleLeft>
          )}
        </div>
        <div
          className={`dgl_services-digital-transformation-content-button-b ${
            digitalTransOption === "b" ? "active" : "inactive"
          }`}
          style={{
            backgroundImage:
              digitalTransOption === "b"
                ? " linear-gradient(to bottom,#0076dd 0%,#01458c 50%,#01458c 100%)"
                : "linear-gradient(to right,#0a1230 0%,#0a1230 50%,#0c1e4c 100%)",
            borderTop: digitalTransOption === "b" ? "3px solid yellow" : "none",
          }}
          onMouseEnter={() => digitalTransOptionPressed("b")}
        >
          {digitalTransOption === "b" ? (
            <FaAngleRight color="var(--light_blue)" size={20}></FaAngleRight>
          ) : (
            <FaAngleLeft size={20}></FaAngleLeft>
          )}
        </div>
      </div>
      {digitalTransOption === "b" ? (
        <div className="dgl_services-digital-transformation-content-description">
          <h1>{digitalTransformationJSON[1].title}</h1>
          <Separator width={"5%"}></Separator>
          <p className="dgl__paragraph">
            {digitalTransformationJSON[1].description}
          </p>
        </div>
      ) : (
        <div className="dgl_services-digital-transformation-content-description">
          <h1>{digitalTransformationJSON[0].title}</h1>
          <Separator width={"5%"}></Separator>
          <p className="dgl__paragraph">
            {digitalTransformationJSON[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default DigitalTransformation;
