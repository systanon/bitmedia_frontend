import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Main } from "../components/main";
import { UsersStatistics } from "./usersStatistics";
import { UserDetailStatistics } from "./userDetailStatistic";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/users" component={UsersStatistics} />
      <Route exact path="/users/:id" component={UserDetailStatistics} />
    </Switch>
  );
};
