import React from "react";
import Topbar from "./Topbar";
import Home from "../Home/pages/Home";
import Single from "./single/Single";
import Write from "./write/Write";
import Settings from "../Home/pages/setting/Settings";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
