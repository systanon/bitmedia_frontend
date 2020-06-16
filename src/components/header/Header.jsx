import React from "react";
import { useHistory } from "react-router-dom";
import { Logo } from "../logo";
import "./header.scss";

export const Header = () => {
  const history = useHistory();
  const handleUsersStats = () => {
    history.push("/users");
  };
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <div className="header_text_media">
          <div className="header_text">
            <h1 className="header_title">
              <span className="header_highlighted">Brainstorming </span>
              for <br /> desired perfect Usability
            </h1>
              <p className='header_desc'>Our design projects are fresh and simple and will benefit <br/> your business greatly. Learn more about our work!</p>
            <button className="btn_stats" onClick={handleUsersStats}>
              Views Stats
            </button>
          </div>
          <div className="header_phone">
            <div className="mobile_btn_left"></div>
            <div className="mobile_btn_right"></div>
            <div className="micro_cam"></div>
            <div className="picture_in_phone"></div>
          </div>
        </div>
      </div>
      <svg className="header_bg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L40,181.3C80,203,160,245,240,266.7C320,288,400,288,480,240C560,192,640,96,720,64C800,32,880,64,960,101.3C1040,139,1120,181,1200,176C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
