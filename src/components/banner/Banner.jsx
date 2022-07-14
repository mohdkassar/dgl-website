import React from "react";
import "./banner.css";
import banner_img from "../../assets/banner.png";
import Button from "../button/Button";

const Banner = ({ refference }) => {
  return (
    <div className="dgl__section start" ref={refference}>
      <div className="dgl__banner-header_container">
        <h4>WELCOME TO DIGILANCE</h4>
        <h1>
          <span>Infinitely</span>
          <span style={{ display: "block" }}> Possible</span>
        </h1>
        <h6 className="dgl__paragraph">
          Empower your business by capitalizing on the synergy of creativity and
          technology that we have carefully cultivated. Our suite of services
          has been precisely developed with the goal of accelerating your
          business quickly and sustainably. Let’s embark on the journey of
          transforming your operation into a scalable empire.
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
