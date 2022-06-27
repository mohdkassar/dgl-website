import React from "react";
import "./agreements.css";
import accelerateIcon from "../../assets/accelerate_icon.png";
import growIcon from "../../assets/grow_icon.png";
import startUpIcon from "../../assets/start_up_icon.png";

const Agreements = ({ refference }) => {
  return (
    <div className="dgl__agreements" ref={refference}>
      <div className="dgl_agreements-headline">
        <div className="dgl_agreements-headline-title">
          <h2>
            <span style={{ color: "#fff" }}>Our</span> Services
          </h2>
        </div>
        <div className="dgl_agreements-headline-subheader">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
            neque, tempor at ante vel, dictum rutrum urna.
          </p>
        </div>
      </div>
      <div className="dgl_agreements-cards">
        <div className="dgl_agreements-card">
          <div className="dgl_agreements-card-duration">
            <h4>One-Time</h4>
            <p>Receive your re-inforcements</p>
          </div>
          <div className="dgl_agreements-card-logo">
            <img src={startUpIcon} alt="start-up" />
          </div>
          <div className="dgl_agreements-card-title">
            <h1>Start-Up</h1>
          </div>
          <div className="dgl_agreements-card-features">
            <ul className="dgl_agreements-card-features-list">
              <li className="dgl_agreements-card-feature">
                <p>Creative Execution</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Copywriting Services</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Marketing Stategies</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Logowork & Branding</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Web & App Development</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="dgl_agreements-card">
          <div className="dgl_agreements-card-duration">
            <h4>6 Months+</h4>
            <p>Capture your opportunities</p>
          </div>
          <div className="dgl_agreements-card-logo">
            <img src={growIcon} alt="grow" />
          </div>
          <div className="dgl_agreements-card-title">
            <h1>Grow</h1>
          </div>
          <div className="dgl_agreements-card-features">
            <ul className="dgl_agreements-card-features-list">
              <li className="dgl_agreements-card-feature">
                <p>Startup Services+</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Retainer Offerings</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Monthly Intelligence</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Community Intelligence</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Continuous Improvement</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="dgl_agreements-card">
          <div className="dgl_agreements-card-duration">
            <h4>12 Months+</h4>
            <p>Maximize your gains</p>
          </div>
          <div className="dgl_agreements-card-logo">
            <img src={accelerateIcon} alt="accelerate" />
          </div>
          <div className="dgl_agreements-card-title">
            <h1>Accelerate</h1>
          </div>
          <div className="dgl_agreements-card-features">
            <ul className="dgl_agreements-card-features-list">
              <li className="dgl_agreements-card-feature">
                <p>Grow Services+</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Biweekly Intelligence</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Digital Transformation</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Infrastructure Development</p>
              </li>
              <li className="dgl_agreements-card-feature">
                <p>Business Development Roadmap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agreements;
