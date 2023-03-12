import React, { useRef, useEffect } from "react";
import "../styles/project-grid.css";
//import sketch from "../p5/blob.js";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketchTwo from "../p5/sketchTwo";
import MySketch from "../p5/sketchTwo";
function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <section className="grid-container">
        <div className="grid-card sketch-card">
          <MySketch />
        </div>
        <div id="card-d" className="grid-card"></div>
        <div id="card-e" className="grid-card"></div>
        <div id="card-f" className="grid-card two-tall "></div>
        <div id="card-g" className="grid-card two-wide two-tall"></div>
        <div id="card-h" className="grid-card"></div>
        <div id="card-i" className="grid-card"></div>
        <div id="card-j" className="grid-card"></div>
      </section>
    </div>
  );
}

export default Projects;
