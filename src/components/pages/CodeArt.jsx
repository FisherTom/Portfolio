import React from "react";
import { Link } from "react-router-dom";
import "../../styles/projectPage.css";
import Sketch from "../../p5/sketchTwo";

function CodeArt() {
  return (
    <div className="project-page">
      <div className="sketch-page-content-box">
        <div className="sketch-box">
          <Sketch t={20} />
        </div>
        <div className="project-page-info">
          <h2 className="project-page-title">Code Art</h2>
          <p className="project-page-text">
            While learning to code i became interested in P5.Js a Javascript
            library that uses the HTML canvas API to draw 2d graphics. I found
            this a usefull tool in learning several coding principals such as
            OOP and recursion.
            <br />
            <br />I liked the outputs i could create using P5 and wanted to turn
            them into phisical prints. I designed and built a pen plotter using
            an Arduino microcontroller to interpret Gcode using{" "}
            <a href="https://github.com/grbl/grbl">GRBL</a>. I was able to
            export images as SVG files from P5 that could then be sent to the
            pen plotter.
            <br />
            <br />
            As my coding abilities improved the outputs i could achieve became
            more complex, I started an{" "}
            <a href="https://www.instagram.com/end.shape/">Instagram</a> account
            to showcase the work i created in P5.
          </p>

          <h3>Links</h3>
          <h4>
            Live Demo:
            <a href="https://fishertom.github.io/P5_sketches/">
              fishertom.github.io/P5_sketches/
            </a>
          </h4>
          <h4>
            P5 projects Repo:
            <a href="https://github.com/FisherTom/P5_sketches">
              github.com/FisherTom/P5_sketches
            </a>
          </h4>
          <Link to="/projects">
            <button className="home-button">Back to projects</button>
          </Link>
          <div className="gallery">
            <img
              className="gallery-img"
              src="https://i.ibb.co/FWRYtGZ/1.jpg"
              alt="1"
              border="0"
            />
            <img
              className="gallery-img"
              src="https://i.ibb.co/xYpnQq8/2.jpg"
              alt="2"
              border="0"
            />
            <img
              className="gallery-img"
              src="https://i.ibb.co/8Kt17DF/3.jpg"
              alt="3"
              border="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeArt;
