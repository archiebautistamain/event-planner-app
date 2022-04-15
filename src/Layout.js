import React, { Component } from "react";
import classes from "./Layout.module.css";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Reviews from "./Pages/Reviews";
import Contact from "./Pages/Contact";

function Layout() {
  return (
    <Router>
      <div>
        <ul className={classes.layoutul}>
          <li>
            <NavLink exact to="/contact" activeClassName={classes.active}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/reviews" activeClassName={classes.active}>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Layout;
