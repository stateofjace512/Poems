import React, { useRef, useEffect } from "react";
import p5 from "p5";

/**
 * A React component that creates an animated "liquid glass" badge
 * using p5.js for the visual effect.
 *
 * @param {object} props
 * @param {string} props.text - The text to display on the badge.
 */
export default function LiquidGlassBadge({ text = "NEW!" }) {
  // Use a ref to attach the p5 canvas to a specific DOM element.
  const canvasRef = useRef(null);

  // Use a global variable to track time for the noise animation.
  let t = 0;

  // The radius of the blob and the amount of "wobble"
  const radius = 30;
  const wobble = 10;
  const points = 200; // Number of points to define the blob shape

  // This useEffect hook handles the p5 sketch logic.
  // It runs once when the component mounts.
  useEffect(() => {
    // This is the main sketch function for p5.
    const sketch = (p5) => {
      p5.setup = () => {
        // Create a square canvas and attach it to the parent div.
        p5.createCanvas(100, 40).parent(canvasRef.current);
        p5.noStroke();
        // Use an orthographic projection to prevent the 3D effect from being too strong.
        p5.ortho();
      };

      p5.draw = () => {
        // Clear the canvas on each frame.
        p5.clear();

        // Move the origin to the center of the canvas for easier drawing.
        p5.translate(p5.width / 2, p5.height / 2);

        // Create a gradient for the "mirror" effect
        let gradient = p5.drawingContext.createLinearGradient(-p5.width / 2, -p5.height / 2, p5.width / 2, p5.height / 2);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 150)'); // Top-left highlight
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 50)'); // Center translucency
        gradient.addColorStop(1, 'rgba(255, 255, 255, 100)'); // Bottom-right sheen
        p5.drawingContext.fillStyle = gradient;

        // Create the shape using beginShape() and endShape().
        p5.beginShape();
        
        // Loop through a circle and use noise to offset each vertex,
        // creating the wobbly, organic look.
        for (let i = 0; i < points; i++) {
          let angle = p5.map(i, 0, points, 0, p5.TWO_PI);
          let xOffset = p5.cos(angle) + 1;
          let yOffset = p5.sin(angle) + 1;

          // Use noise to generate a new radius for each point.
          let noiseVal = p5.noise(xOffset, yOffset, t);
          let r = radius + wobble * noiseVal;

          // Calculate the x and y position of the vertex.
          let x = r * p5.cos(angle);
          let y = r * p5.sin(angle);

          // Add the vertex to the shape.
          p5.curveVertex(x, y);
        }
        p5.endShape(p5.CLOSE);

        // Draw the text in the center of the canvas.
        // We'll reset the transformation before drawing the text to keep it centered.
        p5.resetMatrix();
        p5.fill(255);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.textSize(12);
        p5.textStyle(p5.BOLD);
        p5.text(text, p5.width / 2, p5.height / 2);

        // Increment time for the animation. The smaller the value, the slower the animation.
        t += 0.005;
      };
    };

    // Create a new p5 instance.
    const p5Instance = new p5(sketch);

    // Cleanup function to remove the p5 canvas when the component unmounts.
    return () => {
      p5Instance.remove();
    };
  }, []); // The empty array ensures this effect runs only once on mount.

  return (
    <div className="inline-block rounded-full p-2 overflow-hidden bg-zinc-900 bg-opacity-70">
      {/* Attach the ref to the div that will hold the p5 canvas. */}
      <div ref={canvasRef}></div>
    </div>
  );
}
