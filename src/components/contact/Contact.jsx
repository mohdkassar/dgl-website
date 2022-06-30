import React from "react";
import "./contact.css";
import ContactForm from "./ContactForm";

const Contact = ({ refference }) => {
  return (
    <div className="dgl__contact" ref={refference}>
      <div className="dgl_contact-headline">
        <div className="dgl_contact-headline-title">
          <h2>
            <span style={{ color: "#fff" }}>Get</span> In Touch
          </h2>
        </div>
      </div>
      <div className="dgl_contact-content">
        <div className="dgl_contact-content-list">
          <div className="dgl_contact-visit"></div>
          <div className="dgl_contact-email"></div>
          <div className="dgl_contact-call"></div>
          <div className="dgl_contact-support"></div>
        </div>
      </div>
      <div className="dgl_contact-form">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
