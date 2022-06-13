import React from "react";
import "./navbar.css";
import logo from "../../assets/digilance-logo.png";

const NavBar = () => {
  return (
    <div className="dgl__navbar">
      <div className="dgl__navbar-links">
        <div className="dgl__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dgl__navbar-links_container">
          <a href="#home">HOME</a>
          <a href="#home">ABOUT</a>
          <a href="#home">SERVICES</a>
          <a href="#home">OUR TEAM</a>
          <a href="#home">CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
