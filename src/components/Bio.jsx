import React from "react";
import "../styles/bio.css";
import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
function Bio() {
  return (
    <div id="bio-box">
      <p>
        <h2>Hello World...</h2>I am a junior developer currently seeking
        front-end full-stack job opportunities. I have recently completed an
        intensive full-stack software development boot camp with Northcoders and
        have been self-teaching web technologies for roughly a year.
        <br />
        <br />
        My time at Northcoders has given me a strong foundation in JavaScript
        (ES6), HTML, and CSS as well as experience in writing end-to-end web and
        mobile applications using technologies including Node.js, React / React
        Native, PSQL, MongoDB, and more.
        <br />
        <br />
        The course put a strong emphasis on best practices including Test-Driven
        Development, agile methodology, and Git Flow. I have loved the
        experience of learning to code so far and I'm now excited to find
        opportunities that will allow me to continue to grow my skill set.
        <br />
        <br />I come from a design / engineering background and have strong
        communication and creative problem-solving skills. I am committed to
        making a career change into tech and welcome approaches from recruiters
        and hiring partners.
      </p>

      <div id="job-buttons">
        <Link to="/projects">
          <div className="homepage-button">
            <p>Projects</p>
          </div>
        </Link>
        <a href="https://fishertom.github.io/cv/">
          <div className="homepage-button">
            <p>View CV</p>
          </div>
        </a>
        <Link to="/contact">
          <div className="homepage-button">
            <p>Contact</p>
          </div>
        </Link>
      </div>

      <div className="social-icons">
        <a href="https://github.com/FisherTom">
          <SiGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/thomas-fisher-098ab496/">
          <SiLinkedin size={40} />
        </a>
        <a href="https://www.instagram.com/end.shape/">
          <SiInstagram size={40} />
        </a>
      </div>
    </div>
  );
}

export default Bio;
