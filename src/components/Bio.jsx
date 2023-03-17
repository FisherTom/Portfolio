import React from "react";
import "../styles/bio.css";
import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
function Bio() {
  return (
    <div id="bio-box">
      <p>
        I am a creative, driven junior full-stack developer looking to secure my
        first tech role. I am currently enrolled on an intensive full-stack
        development course with Northcoders and have been self teaching web
        technologies for roughly a year. Prior to this I have experience with
        coding embedded micro-controller type projects using Python, I do this
        as a hobby and more recently as part of my job at Design Futures. I have
        taken the decision to change careers to pursue my interest in coding. I
        have found the process of learning new technologies extremely rewarding
        and I am motivated to continue to expand my knowledge in a professional
        role. Coming from a design background I feel I have strong creative
        problem solving skills, and having worked within technical teams and for
        consultancies I am able to communicate technical information with people
        from a range of backgrounds.
      </p>
      <div className="social-icons">
        <a href="https://github.com/FisherTom">
          <SiGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/thomas-fisher-098ab496/">
          <SiLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com/end.shape/">
          <SiInstagram size={30} />
        </a>
      </div>
      <div id="job-buttons">
        <a href="https://fishertom.github.io/cv/">
          <button>View CV</button>
        </a>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Bio;
