import React from "react";

function ProjectInfo(props) {
  console.log(props.img);
  return (
    <div className="project-info">
      <img className="project-info-img" src={props.img} alt="" />
      <div className="project-info-description">
        <p>{props.description}</p>
        <div className="icon-box">{props.children}</div>
        <button className="more-info-button">More Info</button>
      </div>
    </div>
  );
}

export default ProjectInfo;
