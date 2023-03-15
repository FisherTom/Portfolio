import React from "react";
import "../styles/project-grid.css";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h2 className="project-title">{props.title}</h2>
      <img src={props.url} alt={props.title} />
    </div>
  );
}

export default ProjectCard;
