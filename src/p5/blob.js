import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p) {
  let t = 0;
  const angles = 0.025;
  const noiseDiv = 400;

  // p.windowResized = () => {
  //   p.resizeCanvas(p.windowWidth, p.windowHeight);
  // };

  p.updateWithProps = (props) => {
    p.resizeCanvas(props.width, props.height);
  };

  p.setup = () => {
    p.createCanvas(300, 300);

    p.strokeWeight(0.5);
    p.stroke(230, 60, 190);
    p.noFill(234, 180, 134, 8);
    p.blendMode(p.ADD);
  };

  p.draw = () => {
    p.clear();
    const spacx = p.width / 2;
    const spacy = p.height / 2;
    p.background(240, 255, 255, 0);
    let mx = p.mouseX;
    let my = p.mouseY;

    for (let a = 0; a < p.TWO_PI; a += angles) {
      let x = spacx + (p.cos(a) * p.height) / 5;
      let y = spacy + (p.sin(a) * p.height) / 5;
      let dx = x - mx;
      let dy = y - my;

      // calc mouse distance from circle
      let mouseDistance = Math.sqrt(dx * dx + dy * dy);
      let mapDist = p.map(mouseDistance, 0, 1800, 1.5, 0);

      let r =
        p.map(p.noise(x / noiseDiv, y / noiseDiv, t), 0, 1, -200, 200) *
        mapDist *
        mapDist;
      p.circle(x, y, r);
    }
    t += 0.005;
  };
}

export default sketch;
