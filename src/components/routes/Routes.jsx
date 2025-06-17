import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Series from "../Titles/Series";
const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/series" component={Series} />
    <Route path="/movies" component={Home} />
  </Switch>
);

export default AppRoutes;
