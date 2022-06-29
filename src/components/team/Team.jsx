import React from "react";
import "./team.css";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import members from "./members.json";
import TeamCard from "./TeamCard";

const Team = ({ refference }) => {
  return (
    <div className="dgl__team" ref={refference}>
      <div className="dgl__team-headline">
        <div className="dgl__team-headline-title">
          <h2>
            <span style={{ color: "#fff" }}>Our</span> Team
          </h2>
        </div>
      </div>
      <div className="dgl__team-cards">
        {members.map((member) => {
          return <TeamCard parameters={member}></TeamCard>;
        })}
      </div>
    </div>
  );
};

export default Team;
