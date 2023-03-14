import React from "react";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";

function BeerFrontend() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default BeerFrontend;
