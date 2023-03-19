import React from "react";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";
import Sketch from "../../p5/sketchTwo";

function CodeArt() {
  return (
    <div className="project-page">
      <Link to="/">
        <button className="home-button">⬅ Back</button>
      </Link>
      <div className="sketch-page-content-box">
        <div className="sketch-box">
          <Sketch t={20} />
        </div>
        <div className="project-page-info">
          <h2 className="project-page-title">Code Art</h2>
          <p className="project-page-text">
            Mushi is a mobile app designed to help people find and identify wild
            mushrooms. The aplication uses the MERN stack and was completed as a
            final project during the Northcoders Full-stack development boot
            camp.
            <br />
            <br />
            Users can submit mushroom sightings providing a location, picture, a
            description and the species they believe the mushroom to be. Users
            are then able to browse sightings via the map screen, filtering
            results by species.
            <br />
            <br />
            On the mushroom sighting screen users can vote for a species they
            believe the mushroom to be, the back-end will set the species
            assigned to the sighting to the species with the highest votes
            automatically. The back-end also calculates a species credibility
            score based on the number of votes for the assigned species and the
            number of conflicting votes.
          </p>

          <h3>Links</h3>
          <h4>
            Frontend Repo:{" "}
            <a href="https://fishertom.github.io/P5_sketches/">
              fishertom.github.io/P5_sketches/
            </a>
          </h4>

          <div className="icon-box">
            <SiJavascript size={30} />
          </div>
          <div className="gallery">
            <img
              className="gallery-img"
              src="https://github.com/FisherTom/P5_sketches/blob/main/images/1.jpg?raw=true"
              alt="app home screen"
            />
            <img
              className="gallery-img"
              src="https://github.com/FisherTom/P5_sketches/blob/main/images/2.jpg?raw=true"
              alt="app home screen"
            />
            <img
              className="gallery-img"
              src="https://github.com/FisherTom/P5_sketches/blob/main/images/3.jpg?raw=true"
              alt="app home screen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeArt;
