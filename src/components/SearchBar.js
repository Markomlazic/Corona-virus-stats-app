import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCountry: ""
    };
  }
  render() {
    return (
      <Navbar expand="lg" variant="dark" className="navbar-container">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="img/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Corona Tracker
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="text-light nav-link">
              World Stats
            </NavLink>
            <NavLink to="/byCountry" className="text-light nav-link">
              Country Stats
            </NavLink>
            <NavLink to="/aboutCorona" className="text-light nav-link">
              About COVID-19
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SearchBar;
