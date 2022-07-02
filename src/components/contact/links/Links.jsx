import React from "react";
import "./links.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Links = () => {
  const linksJSON = [
    {
      title: "Visit Us",
      url: "Tottenham Road, Japan",
    },
    {
      title: "Email Us",
      url: "web@info.com",
    },
    {
      title: "Call Us",
      url: "(+01) 123 456 7890",
    },
    {
      title: "Our Support",
      url: "web@info.com",
    },
  ];

  return (
    <div className="dgl__links">
      <div className="dgl__links-container">
        {linksJSON.map((link) => {
          return (
            <div className="dgl__link">
              <div className="dgl__link-icon">
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </div>
              <div className="dgl__link-content">
                <div className="dgl__link-content-title">{link.title}</div>
                <div className="dgl__link-content-url">{link.url}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
