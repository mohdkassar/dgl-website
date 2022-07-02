import React from "react";
import "./team.css";
import members from "./members.json";
import TeamCard from "./TeamCard";
import Headline from "../headline/Headline";

const Team = ({ refference }) => {
  return (
    <div className="dgl__team" ref={refference}>
      <Headline title={"Our Team"}></Headline>
      <div className="dgl__team-cards">
        {members.map((member) => {
          return <TeamCard parameters={member}></TeamCard>;
        })}
      </div>
    </div>
  );
};

export default Team;
