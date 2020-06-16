import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "../../routes";

export const Layout = () => {
  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>
  );
};
