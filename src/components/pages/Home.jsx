import React from "react";
import { Link } from "react-router-dom";
import Bio from "../Bio";
import Projects from "../Projects";

function Home() {
  return (
    <div>
      <Bio />
      <div id="job-buttons">
        <a href="https://fishertom.github.io/cv/">
          <button>View CV</button>
        </a>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
      <Projects />
    </div>
  );
}

export default Home;
