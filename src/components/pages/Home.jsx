import React from "react";
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
        <a href="tfisher92@gmail.com">
          <button>Contact</button>
        </a>
      </div>
      <Projects />
    </div>
  );
}

export default Home;
