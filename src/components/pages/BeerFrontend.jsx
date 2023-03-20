import React from "react";
import { SiJavascript, SiNodedotjs, SiReact } from "react-icons/si";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";

function BeerFrontend() {
  return (
    <div className="project-page">
      <div className="project-page-content-box">
        <div className="project-page-pic-box">
          <img
            src="https://i.ibb.co/PN5xfqY/beer-screenshot.png"
            alt="beer-screenshot"
            border="0"
          />
        </div>
        <div className="project-page-info">
          <h2 className="project-page-title">Beer Recipies Frontend</h2>
          <p className="project-page-text">
            This was my first React app created during my time on the
            Northcoders Bootcamp. It uses the free to use "Brewdog Punk API"
            that provides data on beers made by Brewdog, along with recipie info
            for each beer.
            <br />
            <br />
            The app allows users to search and sort the recipie catalouge by
            style, name, ingridients etc, add/remove beers to a 'compare' list
            and view stats and ingridients relationg to each individual beer.
          </p>

          <h3>Links</h3>
          <h4>
            Live Demo:
            <a href="https://brew-finder.netlify.app/">
              brew-finder.netlify.app
            </a>
          </h4>
          <h4>
            Frontend Repo:
            <a href="https://github.com/FisherTom/data-vis-sprint">
              github.com/FisherTom/data-vis-sprint
            </a>
          </h4>

          <div className="icon-box">
            <SiJavascript size={30} />
            <SiNodedotjs size={30} />
            <SiReact size={30} />
          </div>
          <Link to="/projects">
            <button className="home-button">Back to Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BeerFrontend;
