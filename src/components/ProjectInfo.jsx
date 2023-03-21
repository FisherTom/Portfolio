import React from "react";
import { Link } from "react-router-dom";

function ProjectInfo(props) {
  return (
    <div className="project-info">
      {/* <img className="project-info-img" src={props.img} alt="" /> */}
      <div className="project-info-description">
        <p>{props.description}</p>
        <div className="icon-box">{props.children}</div>
        {props.button !== "disabled" ? (
          <Link to={props.link}>
            <div className="button">More Info</div>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProjectInfo;
