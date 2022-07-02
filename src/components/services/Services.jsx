import React from "react";
import "./services.css";
import DigitalMarketingCard from "./DigitalMarketing/DigitalMarketingCard";
import digitalmarketingJSON from "./DigitalMarketing/digitalmarketing.json";
import DigitalDevelopmentCard from "./DigitalDevelopment/DigitalDevelopmentCard";
import digitaldevelopmentJSON from "./DigitalDevelopment/digitaldevelopment.json";
import DigitalTransformation from "./DigitalTransformation/DigitalTransformation";
import Headline from "../headline/Headline";

const Services = ({ refference }) => {
  return (
    <div className="dgl__services" ref={refference}>
      <Headline
        title={"Our Services"}
        subheader={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio neque, tempor at ante vel, dictum rutrum urna."
        }
      ></Headline>
      <div className="dgl_services-digital-marketing">
        <div className="dgl_services-digital-marketing-title">
          <h3>
            <span style={{ color: "grey" }}>01</span>
          </h3>
          <h3>
            <span>DIGITAL</span>
          </h3>
          <h3>
            <span style={{ color: "#01c8e9" }}>MARKETING</span>
          </h3>
        </div>
        <div className="dgl_services-digital-marketing-options">
          {digitalmarketingJSON.map((option) => {
            return (
              <DigitalMarketingCard parameters={option}></DigitalMarketingCard>
            );
          })}
        </div>
      </div>
      <div className="dgl_services-digital-development">
        <div className="dgl_services-digital-development-list">
          {digitaldevelopmentJSON.map((option) => {
            return (
              <DigitalDevelopmentCard
                parameters={option}
              ></DigitalDevelopmentCard>
            );
          })}
        </div>
        <div className="dgl_services-digital-development-header">
          <h3>
            <span style={{ color: "grey" }}>02</span>
          </h3>
          <h3>
            <span>DIGITAL</span>
          </h3>
          <h3>
            <span style={{ color: "#01c8e9" }}>DEVELOPMENT</span>
          </h3>
        </div>
      </div>
      <div className="dgl_services-digital-transformation">
        <div className="dgl_services-digital-transformation-header">
          <h3>
            <span style={{ color: "grey" }}>03</span>
          </h3>
          <h3>
            <span style={{ color: "white" }}>DIGITAL</span>
          </h3>
          <h3>
            <span style={{ color: "#01c8e9" }}>TRANSFORMATION</span>
          </h3>
        </div>
        <DigitalTransformation></DigitalTransformation>
      </div>
    </div>
  );
};

export default Services;
