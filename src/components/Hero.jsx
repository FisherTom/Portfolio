import React from "react";
import "../styles/hero.css";
import Bio from "./Bio";
import { useLocation } from "react-router-dom";
function Hero() {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div id="hero">
      <div className="title-portrait">
        <div id="headshot-box">
          <div className="star"></div>
          <img
            id="headshot"
            src={require("../images/pxl.png")}
            alt="Tom Fisher"
          />
        </div>
        <div className="title-box">
          <h1 id="hero-title">Tom Fisher</h1>
          <h3>Developer - Designer</h3>
        </div>
      </div>
      {location.pathname === "/" ? <Bio /> : <></>}
    </div>
  );
}

export default Hero;
