import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Route, Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Goddard Discovery</h1>
        <NavLink to='/graph'> Launch App </NavLink> <br />
        <NavLink to='/login'> login</NavLink> <br />
        <NavLink to='/mainscreen'> Main Screen</NavLink> <br />
        <NavLink to='/auth'> Authentication</NavLink> <br />
      </div>
    );
  }
}
