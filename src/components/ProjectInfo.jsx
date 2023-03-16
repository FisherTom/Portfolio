import React from "react";
import { Link } from "react-router-dom";

function ProjectInfo(props) {
  console.log(props.img);
  return (
    <div className="project-info">
      {/* <img className="project-info-img" src={props.img} alt="" /> */}
      <div className="project-info-description">
        <p>{props.description}</p>
        <div className="icon-box">{props.children}</div>
        <Link to={props.link}>
          <button className="more-info-button">More Info</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectInfo;
