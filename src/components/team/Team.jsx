import React from "react";
import "./team.css";
import members from "./members.json";
import TeamCard from "./TeamCard/TeamCard";
import Headline from "../headline/Headline";

const Team = ({ refference }) => {
  return (
    <div className="dgl__section column" ref={refference}>
      <Headline title={"Our Team"}></Headline>
      <div className="dgl__team-cards">
        {members.map((member, index) => {
          return (
            <TeamCard
              parameters={member}
              key={`dgl__team-card-${index}`}
            ></TeamCard>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
