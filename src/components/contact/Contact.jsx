import React from "react";
import "./contact.css";
import ContactForm from "./contactform/ContactForm";
import Links from "./links/Links";
import Headline from "../headline/Headline";

const Contact = ({ refference }) => {
  return (
    <div className="dgl__contact" ref={refference}>
      <div className="dgl_contact-form">
        <div className="dgl__contact-left">
          <Headline title={"Get In Touch"}></Headline>
          <Links></Links>
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
