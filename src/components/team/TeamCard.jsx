import React from "react";
import "./team.css";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";

const TeamCard = ({ parameters }) => {
  return (
    <div className="dgl__team-card">
      <div className="dgl__team-card-logo">
        <img
          src={parameters.memberId === "ali" ? team2 : team1}
          alt="team_member_1"
        />
      </div>
      <div className="dgl__team-card-content">
        <div className="dgl__team-card-content-title">
          <h1>{parameters.memberName}</h1>
        </div>
        <div className="dgl__team-card-content-role">
          <h4>{parameters.memberRole}</h4>
        </div>
        <div className="dgl__team-card-content-about">
          <h6>{parameters.memberDesc}</h6>
        </div>
        <div className="dgl__team-card-content-links">
          <div className="dgl__team-card-content-links-email"></div>
          <div className="dgl__team-card-content-links-linkedin"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
