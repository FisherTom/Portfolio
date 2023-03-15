import React from "react";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";
function GameReviews() {
  return (
    <div className="project-page">
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="project-page-content-box">
        <div className="project-page-pic-box">
          <img src={require("../../images/bgb1.png")} alt="site home screen" />
          <img src={require("../../images/bgb2.png")} alt="site review list" />
          <img src={require("../../images/bgb3.png")} alt="review page" />
        </div>
        <div className="project-page-info">
          <h2 className="project-page-title">Board Game Review Site</h2>
          <p className="project-page-text"></p>
          <h3>Links</h3>
          <h4>
            Live Demo:
            <a href="https://board-game-buzz.netlify.app/">
              board-game-buzz.netlify.app
            </a>
          </h4>
          <h4>
            Frontend Repo:
            <a href="https://github.com/FisherTom/Game-Reviews-Frontend">
              github.com/FisherTom/Game-Reviews-Frontend
            </a>
          </h4>
          <h4>
            Backend Repo:
            <a href="https://github.com/FisherTom/Game-Reviews-API">
              github.com/FisherTom/Game-Reviews-API
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default GameReviews;
