import React from "react";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiExpress,
  SiJest,
} from "react-icons/si";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";
function GameReviews() {
  return (
    <div className="project-page">
      <div className="project-page-content-box">
        <div className="project-page-pic-box">
          <img src={require("../../images/bgb1.png")} alt="site home screen" />
          <img src={require("../../images/bgb2.png")} alt="site review list" />
          <img src={require("../../images/bgb3.png")} alt="review page" />
        </div>
        <div className="project-page-info">
          <h2 className="project-page-title">Board Game Review Site</h2>
          <p className="project-page-text">
            This is a single page CRUD app that alows users to share comment on
            and vote on game reviews. This is a solo - full stack project
            created during my time on the Northcoders Bootcamp
          </p>
          <h3>Front-end:</h3>
          <p>
            The front end is a single page react app that alows users to browse
            game reviews, sorting by category, votes and date. users can then
            navigate to a review page where they can leave comments and up/down
            vote the review.
            <br />
            <br />
            The App makes use of client side routing and optimistic rendering to
            improve the user expirience, and responsive custom styling.
          </p>
          <h3>Back-end:</h3>
          <p>
            The back end was created using Node, PostgreSQL and Express using
            RESTfull principals and adopting the MVC pattern. The app makes use
            of custom error handling midleware and integration testing was done
            using Jest.
          </p>

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
          <div className="icon-box">
            <SiJavascript size={30} />
            <SiNodedotjs size={30} />
            <SiReact size={30} />
            <SiPostgresql size={30} />
            <SiExpress size={30} />
            <SiJest size={30} />
          </div>
          <Link to="/projects">
            <button className="home-button">Back to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameReviews;
