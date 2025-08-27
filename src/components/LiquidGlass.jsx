import React from "react";
import Sketch from "react-p5";

export default function LiquidGlass() {
  let t = 0; 

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.clear();

    for (let i = 0; i < 8; i++) {
      let x = p5.width / 2 + p5.map(p5.noise(i, t), 0, 1, -400, 400);
      let y = p5.height / 2 + p5.map(p5.noise(i + 100, t), 0, 1, -400, 400);

      let r = 300 * p5.noise(i + 200, t);
      let c = p5.color(
        255 * p5.noise(i + 300, t),
        255 * p5.noise(i + 400, t),
        255 * p5.noise(i + 500, t),
        150
      );

      p5.fill(c);
      p5.ellipse(x, y, r);
    }

    t += 0.005;
  };

  return (
    <div className="absolute inset-0 -z-10">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
