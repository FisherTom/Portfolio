import React from "react";
import "../styles/hero.css";

import { useLocation } from "react-router-dom";
import Nav from "./Nav";

function Hero() {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div id="hero">
      <div className="title-portrait">
        <div id="headshot-box">
          <p className="seeking">
            Seeking <br />
            Work
          </p>
          <div className="star"></div>
          <img
            id="headshot"
            src={"https://i.ibb.co/fGf2wYK/pxl.png"}
            alt="Tom Fisher"
          />
        </div>
        <div className="title-box">
          <h1 id="hero-title">Tom Fisher</h1>
          <h3>Developer - Designer</h3>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Hero;
