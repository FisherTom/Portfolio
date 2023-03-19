import React, { useRef } from "react";
import Sketch from "react-p5";

function SketchTwo(props) {
  const canvasRef = useRef(null);

  const windowResized = (p5) => {
    if (canvasRef.current) {
      const parentWidth = canvasRef.current.parent().clientWidth; // get the current width of the parent element
      const parentHeight = canvasRef.current.parent().clientHeight; // get the current height of the parent element
      p5.resizeCanvas(parentWidth, parentHeight); // resize the canvas to match the size of the parent element
      tiles = [];
      for (let x = 0 + xdiv / 2; x < p5.width; x += xdiv) {
        for (let y = 0 + ydiv / 2; y < p5.height; y += ydiv) {
          tiles.push([x, y]);
        }
      }
    }
  };
  let div = 5;
  let t = props.t;
  let tiles = [];
  const xdiv = div;
  const ydiv = div;

  const setup = (p5, canvasParentRef) => {
    const parentWidth = canvasParentRef.clientWidth;
    const parentHeight = canvasParentRef.clientHeight;
    const canvas = p5.createCanvas(parentWidth, parentHeight);
    canvas.parent(canvasParentRef);
    canvasRef.current = canvas; // store a reference to the canvas element

    p5.rectMode(p5.CENTER);
    for (let x = 0 + xdiv / 2; x < p5.width; x += xdiv) {
      for (let y = 0 + ydiv / 2; y < p5.height; y += ydiv) {
        tiles.push([x, y]);
      }
    }

    //p5.frameRate(10);
    p5.noStroke();
    p5.fill(225, 74, 212);
  };

  const draw = (p5) => {
    p5.clear();
    tiles.forEach((tile) => {
      let n = p5.noise(tile[0] / 100, tile[1] / 100, t);
      if (n > 0.4) {
        //let rad = p5.noise(tile[0] / 300, tile[1] / 300, t) * 40;
        //p5.circle(...tile, p5.map(n, 0.4, 1, 0, 25));
        p5.rect(tile[0], tile[1], xdiv, ydiv);
      }
    });
    t += 0.005;
  };

  return (
    <Sketch
      windowResized={windowResized}
      setup={setup}
      draw={draw}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default SketchTwo;
