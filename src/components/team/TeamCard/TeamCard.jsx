import React from "react";
import "./teamcard.css";
import team1 from "../../../assets/team1.png";
import team2 from "../../../assets/team2.png";
import Social from "../Social/Social";

const TeamCard = ({ parameters }) => {
  return (
    <div className="dgl__team-card">
      <div>
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
            <p className="dgl__paragraph">{parameters.memberDesc}</p>
          </div>
        </div>
      </div>
      <Social></Social>
    </div>
  );
};

export default TeamCard;
