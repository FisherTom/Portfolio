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
          tiles.push([x, y, 10]);
        }
      }
    }
  };

  let t = 0;
  let tiles = [];
  const xdiv = 20;
  const ydiv = 20;

  const setup = (p5, canvasParentRef) => {
    const parentWidth = canvasParentRef.clientWidth;
    const parentHeight = canvasParentRef.clientHeight;
    const canvas = p5.createCanvas(parentWidth, parentHeight);
    canvas.parent(canvasParentRef);
    canvasRef.current = canvas; // store a reference to the canvas element

    for (let x = 0 + xdiv / 2; x < p5.width; x += xdiv) {
      for (let y = 0 + ydiv / 2; y < p5.height; y += ydiv) {
        tiles.push([x, y, 10]);
      }
    }

    p5.noStroke();
    p5.fill(0);
  };

  const draw = (p5) => {
    p5.background(255);
    tiles.forEach((tile) => {
      p5.circle(...tile);
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
