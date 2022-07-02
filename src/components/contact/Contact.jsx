import React from "react";
import "./contact.css";
import ContactForm from "./contactform/ContactForm";
import Links from "./links/Links";
import Headline from "../headline/Headline";

const Contact = ({ refference }) => {
  return (
    <div className="dgl__contact" ref={refference}>
      <Headline title={"Get In Touch"} separatorWidth={"35%"}></Headline>
      <div className="dgl_contact-content">
        <div className="dgl_contact-content-list">
          <div className="dgl_contact-visit"></div>
          <div className="dgl_contact-email"></div>
          <div className="dgl_contact-call"></div>
          <div className="dgl_contact-support"></div>
        </div>
      </div>
      <div className="dgl_contact-form">
        <Links></Links>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
