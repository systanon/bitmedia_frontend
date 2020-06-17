import React from "react";
import "./navList.scss";
// import {useHistory} from 'react-router-dom'
import { NavLink } from "react-router-dom";

export const NavUserList = ({ first_name, last_name }) => {
  return (
    <>
      <div className="nav_list">
        <NavLink to="/" className="previous_page">
          Main page
        </NavLink>
        <NavLink to="/users" className="previous_page">
          User statistics
        </NavLink>
        <NavLink to="/users/:id" className="current_page">
          {first_name} {last_name}
        </NavLink>
      </div>
    </>
  );
};
