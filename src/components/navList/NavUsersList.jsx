import React from "react";

import { NavLink } from "react-router-dom";

import "./navList.scss";

export const NavUsersList = ({ history, first_name, last_name }) => {
  return (
    <>
      <div className="nav_list">
        <NavLink to="/" className="previous_page">
          Main page
        </NavLink>
        <NavLink to="/users" className="current_page">
          User statistics
        </NavLink>
      </div>
    </>
  );
};
