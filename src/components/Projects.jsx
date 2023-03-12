import React from "react";
import "../styles/project-grid.css";

import Sketch from "../p5/sketchTwo";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <section className="grid-container">
        <div className="grid-card">
          <ProjectCard
            title="Mushi App"
            url="https://images.pexels.com/photos/6034382/pexels-photo-6034382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="grid-card sketch-card">
          <Sketch t={0} />
        </div>
        <div className="grid-card">
          <ProjectCard
            title="Board Game Buzz"
            url="https://images.pexels.com/photos/8762806/pexels-photo-8762806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="grid-card two-tall sketch-card">
          <Sketch t={20} />
        </div>
        <div className="grid-card two-wide two-tall">
          <ProjectCard url={require("../images/plot.jpg")} />
        </div>
        <div className="grid-card">
          <ProjectCard />
        </div>
        <div className="grid-card sketch-card">
          <Sketch t={10} />
        </div>
        <div className="grid-card">
          <ProjectCard />
        </div>
      </section>
    </div>
  );
}

export default Projects;
