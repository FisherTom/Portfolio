import React from "react";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";

function BeerV2() {
  return (
    <div className="project-page">
      <div className="project-page-content-box">
        <div className="project-page-pic-box">
          <img
            src="https://i.ibb.co/y8LxvvJ/Screenshot-from-2023-03-24-09-53-11.png"
            alt="beer-screenshot"
            border="0"
          />
        </div>
        <div className="project-page-info">
          <h2 className="project-page-title">Brew-Logger V2</h2>
          <p className="project-page-text">
            This is a work in progress! Feel Free to explore my code, more info
            comming soon!
          </p>

          <h3>Links</h3>
          <h4>
            Live Demo:
            <a href="https://brew-logger.netlify.app/">
              brew-finder.netlify.app
            </a>
          </h4>
          <h4>
            Frontend Repo:
            <a href="https://github.com/FisherTom/brew-log">
              github.com/FisherTom/brew-log
            </a>
          </h4>
          <h4>
            Backend Repo:
            <a href="https://github.com/FisherTom/brew-log-backend">
              github.com/FisherTom/brew-log-backend
            </a>
          </h4>

          <div className="icon-box">
            <SiJavascript size={30} />
            <SiNodedotjs size={30} />
            <SiReact size={30} />
            <SiTailwindcss size={30} />
            <SiMongodb size={30} />
            <SiExpress size={30} />
          </div>
          <Link to="/projects">
            <button className="home-button">Back to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BeerV2;
