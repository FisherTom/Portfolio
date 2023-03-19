import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <p className="nav-link">Home</p>
      </Link>
      <Link to="/projects">
        <p className="nav-link">Projects</p>
      </Link>
      <Link to="/contact">
        <p className="nav-link">Contact</p>
      </Link>
    </div>
  );
}

export default Nav;
