import React from "react";
import "../styles/bio.css";
function Bio() {
  return (
    <div id="bio-box">
      <img id="headshot" src={require("../images/headshot.png")} />
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
    </div>
  );
}

export default Bio;
