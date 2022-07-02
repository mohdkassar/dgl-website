import React from "react";
import "./agreements.css";
import { useState } from "react";
import agreementCards from "./agreementcards.json";
import AgreementCard from "./AgreementCard";
import Headline from "../headline/Headline";

const Agreements = ({ refference }) => {
  const [activeCard, setActiveCard] = useState(agreementCards.grow);

  const cardPressed = (option) => {
    let activeOption = Object.keys(agreementCards).find((card) => {
      return agreementCards[card].id === option;
    });
    setActiveCard(agreementCards[activeOption]);
  };

  return (
    <div className="dgl__agreements" ref={refference}>
      <Headline
        title={"Our Agreements"}
        subheader={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio neque, tempor at ante vel, dictum rutrum urna."
        }
      ></Headline>
      <div className="dgl_agreements-cards">
        <AgreementCard
          active={activeCard.id === "startup" ? true : false}
          onClick={cardPressed}
          parameters={agreementCards.startup}
        ></AgreementCard>
        <AgreementCard
          active={activeCard.id === "grow" ? true : false}
          onClick={cardPressed}
          parameters={agreementCards.grow}
        ></AgreementCard>
        <AgreementCard
          active={activeCard.id === "accelerate" ? true : false}
          onClick={cardPressed}
          parameters={agreementCards.accelerate}
        ></AgreementCard>
      </div>
    </div>
  );
};

export default Agreements;
