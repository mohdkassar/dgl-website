import React from "react";
import "./banner.css";
import banner_img from "../../assets/banner.png";
import Button from "../button/Button";

const Banner = ({ refference }) => {
  return (
    <div className="dgl__banner" ref={refference}>
      <div className="dgl__banner-header_container">
        <h4>WELCOME TO DIGILANCE</h4>
        <h1>Infinitely Possible</h1>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
          neque, tempor at ante vel, dictum rutrum urna. Cras molestie interdum
          massa, in imperdiet turpis sollicitudin quis. In malesuada orci vel
          enim dignissim ullamcorper. Sed laoreet dolor eget posuere blandit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h6>
        <Button name={"GET CONSULT"}></Button>
      </div>
      <div className="dgl__banner_logo">
        <img src={banner_img} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
