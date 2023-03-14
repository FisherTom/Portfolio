import React from "react";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";

function Mushi() {
  return (
    <div className="project-page">
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Mushi;
