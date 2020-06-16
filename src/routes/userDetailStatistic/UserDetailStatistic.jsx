import React, { useEffect } from "react";
import { useParams , NavLink} from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import { Logo } from "../../components/logo";
import { Copyrigth } from "../../components/footer";

import "../usersStatistics/usersStatistic.scss";
import "./userDetailStatistic.scss";

export const UserDetailStatistic = ({
  userId,
  getDetailStatistic,
  userName,
}) => {
  const { id } = useParams();
  const name = userName.length !== 0 ? userName[0] : "undefined";
  const { first_name, last_name } = name;
  useEffect(() => {
    getDetailStatistic(id);
  }, [id]);
  return (
    <>
      <div className="header_users">
        <div className="container">
          <Logo />
        </div>
      </div>
      <div className="container">
        <div className="nav_user_list">
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
        <h2 className="user_name">
          {first_name} {last_name}
        </h2>
        <div className="user_statistic">
          <h3>Page Views</h3>
          <LineChart width={1200} height={300} data={userId}>
            <Line type="monotone" dataKey="page_views" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />

            <XAxis dataKey="date" />

            <YAxis />
          </LineChart>
          <h2>Clicks</h2>
          <LineChart width={1200} height={300} data={userId}>
            <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />

            <XAxis dataKey="date" />

            <YAxis />
          </LineChart>
        </div>
      </div>
      <div className="footer_users">
        <div className="container">
          <Copyrigth />
        </div>
      </div>
    </>
  );
};
