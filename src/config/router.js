import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../screens/login";
import Home from "../screens/home";
import Share from "../screens/share";
import PrivateRoute from "../utils/privateRoute";

const Routes = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/share" component={Share} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default Routes;
