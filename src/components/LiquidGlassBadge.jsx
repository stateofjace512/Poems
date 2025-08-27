import React from "react";
import Sketch from "react-p5";

export default function LiquidGlassBadge({ text = "NEW!" }) {
  let t = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(80, 30).parent(canvasParentRef); 
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.clear();

    p5.fill(20);
    p5.rect(0, 0, p5.width, p5.height, 6);

    for (let i = 0; i < 4; i++) {
      let x = p5.map(p5.noise(i, t), 0, 1, 0, p5.width);
      let y = p5.map(p5.noise(i + 100, t), 0, 1, 0, p5.height);

      let r = 40 * p5.noise(i + 200, t);
      let c = p5.color(
        255 * p5.noise(i + 300, t),
        255 * p5.noise(i + 400, t),
        255 * p5.noise(i + 500, t),
        150
      );

      p5.fill(c);
      p5.ellipse(x, y, r);
    }

    p5.fill(255);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(12);
    p5.textStyle(p5.BOLD);
    p5.text(text, p5.width / 2, p5.height / 2);

    t += 0.01;
  };

  return (
    <div className="inline-block rounded px-1 py-0.5 overflow-hidden">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
