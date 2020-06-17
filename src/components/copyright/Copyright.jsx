import React from "react";
import "./copyright.scss";
export const Copyrigth = () => {
  const date = new Date().getFullYear();
  return (
    <div className="copyright">
      <div className="container">
        <div className="footer_logo_wrap">
          <a className="footer_logo_link" href="#">
            AppCo
          </a>
        </div>
        <div className="footer_text_wrap">
          <p>All rights reserved by ThemeTags</p>
        </div>
        <div className="copyright_wrap">
          <p>Copyrights © {date}</p>
        </div>
      </div>
    </div>
  );
};
