import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import PropTypes from 'prop-types';
import { Logo } from "../../components/logo";
import { Copyrigth } from "../../components/footer";
import { NavUserList } from "../../components/navList";

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
      <Logo />
      <div className="container">
        <NavUserList first_name={first_name} last_name={last_name} />
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
      <Copyrigth />
    </>
  );
};

UserDetailStatistic.propTypes = {
  userId:PropTypes.array,
  getDetailStatistic: PropTypes.func.isRequired,
  userName:PropTypes.array
}
