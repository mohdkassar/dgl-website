import React from "react";
import "./services.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import appDevelopmentIcon from "../../assets/app_development_icon.png";

const Services = () => {
  return (
    <div className="dgl__services">
      <div className="dgl_services-headline">
        <div className="dgl_services-headline-title">
          <h2>
            <span style={{ color: "#fff" }}>Our</span> Services
          </h2>
        </div>
        <div className="dgl_services-headline-subheader">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
            neque, tempor at ante vel, dictum rutrum urna.
          </p>
        </div>
      </div>
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
          <div className="dgl_services-digital-marketing-option-1">
            <div>
              <h1 style={{ color: "#fff" }}>SEO</h1>
            </div>
            <div className="dgl_services-digital-marketing-option-paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
          <div className="dgl_services-digital-marketing-option-2">
            <div>
              <h1 style={{ color: "#fff" }}>Social Media</h1>
            </div>
            <div className="dgl_services-digital-marketing-option-paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
          <div className="dgl_services-digital-marketing-option-3">
            <div>
              <h1 style={{ color: "#fff" }}>Copywriting</h1>
            </div>
            <div className="dgl_services-digital-marketing-option-paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dgl_services-digital-development">
        <div className="dgl_services-digital-development-list">
          <div className="dgl_services-digital-development-dev-1">
            <div className="dgl_services-digital-development-dev-1-icon">
              {" "}
              <img
                src={appDevelopmentIcon}
                style={{ width: "50%" }}
                alt="app-development"
              />
            </div>
            <div>
              <h2>App Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
          <div className="dgl_services-digital-development-dev-1">
            <div className="dgl_services-digital-development-dev-1-icon">
              {" "}
              <img
                src={appDevelopmentIcon}
                style={{ width: "50%" }}
                alt="app-development"
              />
            </div>
            <div>
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
          <div className="dgl_services-digital-development-dev-1">
            <div className="dgl_services-digital-development-dev-1-icon">
              {" "}
              <img
                src={appDevelopmentIcon}
                style={{ width: "50%" }}
                alt="app-development"
              />
            </div>
            <div>
              <h2>UX/UI Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
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
        <div className="dgl_services-digital-transformation-content">
          <div className="dgl_services-digital-transformation-content-button-list">
            <div className="dgl_services-digital-transformation-content-button-a">
              <FaAngleLeft size={40}></FaAngleLeft>
            </div>
            <div className="dgl_services-digital-transformation-content-button-b">
              <FaAngleRight size={40}></FaAngleRight>
            </div>
          </div>
          <div className="dgl_services-digital-transformation-content-description">
            <h1>Digital Business Development</h1>
            <p style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              odio neque, tempor at ante vel, dictum rutrum urna. Cras molestie
              interdum massa, in imperdiet turpis sollicitudin quis. In
              malesuada orci vel enim dignissim ullamcorper. Sed laoreet dolor
              eget posuere blandit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed ante urna, tristique in sapien vitae, egestas
              egestas massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
