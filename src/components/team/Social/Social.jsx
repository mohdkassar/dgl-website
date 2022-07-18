import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./social.css";

const Social = () => {
  return (
    <div className="dgl__team_card_social">
      <div className="dgl__team_card_social_mail">
        <AiFillLinkedin size={35}></AiFillLinkedin>
      </div>
      <div className="dgl__team_card_social_linkedin">
        <MdEmail size={35}></MdEmail>
      </div>
      <div></div>
    </div>
  );
};

export default Social;
