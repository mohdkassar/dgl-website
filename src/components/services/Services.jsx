import React from "react";
import "./services.css";
import DigitalMarketingCard from "./DigitalMarketing/DigitalMarketingCard";
import digitalmarketingJSON from "./DigitalMarketing/digitalmarketing.json";
import DigitalDevelopmentCard from "./DigitalDevelopment/DigitalDevelopmentCard";
import digitaldevelopmentJSON from "./DigitalDevelopment/digitaldevelopment.json";
import DigitalTransformation from "./DigitalTransformation/DigitalTransformation";
import Headline from "../headline/Headline";
import ServiceTitle from "./ServiceTitle/ServiceTitle";

const Services = ({ refference }) => {
  return (
    <div className="dgl__section column" ref={refference}>
      <Headline
        title={"Our Services"}
        subheader={
          "Discover a dynamic ecosystem of practices attuned to the needs of your business."
        }
      ></Headline>
      <div className="dgl_services-digital-marketing">
        <ServiceTitle number={"01"} title={"DIGITAL MARKETING"}></ServiceTitle>
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
                id={option.id}
              ></DigitalDevelopmentCard>
            );
          })}
        </div>
        <ServiceTitle
          number={"02"}
          title={"DIGITAL DEVELOPMENT"}
        ></ServiceTitle>
      </div>
      <div className="dgl_services-digital-transformation">
        <ServiceTitle
          number={"03"}
          title={"DIGITAL TRANSFORMATION"}
        ></ServiceTitle>
        <DigitalTransformation></DigitalTransformation>
      </div>
    </div>
  );
};

export default Services;
