import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { LIMIT } from "../../constants";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { Logo } from "../../components/logo";
import { Copyrigth } from "../../components/footer";
import { NavUsersList } from "../../components/navList";

import "./usersStatistic.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const UsersStatistics = ({ users, getUsersStats, total }) => {
  const [page, setPage] = useState(1);

  const classes = useStyles();
  let history = useHistory();
  const pageCount = Math.floor(total / LIMIT);

  useEffect(() => {
    getUsersStats(page);
  }, [page]);

  const handlerUserStatistic = (e) => {
    let userId = Number(e.target.parentNode.id);
    history.push(`/users/${userId}`);
  };
  const handler = (e) => {
    let obj = null;
    if (e.target.tagName === "BUTTON") {
      obj = e.target;
    } else if (e.target.tagName === "svg") {
      obj = e.target.parentNode;
    } else if (e.target.tagName === "path") {
      obj = e.target.parentNode.parentNode;
    }
    if (obj === null) return;
    let num = Number(obj.textContent);
    if (num) {
      setPage(num);
      e.stopPropagation();
    } else {
      if (obj.ariaLabel === "Go to next page") {
        setPage((oldPage) =>
          oldPage + 1 > pageCount ? pageCount : oldPage + 1
        );
      }
      if (obj.ariaLabel === "Go to previous page") {
        setPage((oldPage) => (oldPage - 1 < 1 ? 1 : oldPage - 1));
      }
      e.stopPropagation();
    }
  };
  const titleArr =
    users.length !== 0
      ? Object.keys(users[0]).join(",").replace(/\_/g, " ").split(",")
      : [];

  const th = titleArr.map((el, index) => {
    return (
      <th key={index + 1} className="th">
        {el}
      </th>
    );
  });

  const trs = users.map((user, index) => {
    return (
      <tr
        className="table_item"
        onClick={handlerUserStatistic}
        id={user.id}
        key={index + 1}
      >
        {Object.keys(user).map((key, index) => (
          <td key={index + 1}>{user[key]}</td>
        ))}
      </tr>
    );
  });

  return (
    <>
      <Logo />
      <div className="container">
        <NavUsersList />
        {users.length === 0 ? (
          <div className="no_users">
            <h2>NO USERS</h2>
          </div>
        ) : (
          <>
            <h2 className="title_users_stat">Users statistics</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>{th}</tr>
                </thead>
                <tbody>{trs}</tbody>
              </table>
              <div className={classes.root}>
                <Pagination
                  count={pageCount}
                  variant="outlined"
                  shape="rounded"
                  onClick={handler}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <Copyrigth />
    </>
  );
};
UsersStatistics.propTypes = {
  users: PropTypes.array,
  getUsersStats: PropTypes.func.isRequired,
  total: PropTypes.number,
};
