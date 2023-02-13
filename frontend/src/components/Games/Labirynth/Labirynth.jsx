import React, { useEffect, useRef } from "react";

export default function Labirynth() {
  const canvasRef = useRef(null);

  const player = {
    w: 10,
    height: 10,
    x: 10,
    y: 10,
    speed: 5,
    image: "https://www.freeiconspng.com/thumbs/sonic-png/sonic-png-11.png",
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillRect(30, 0, 1, 60);
    ctx.fillRect(50, 0, 1, 40);

    ctx.fillRect(30, 60, 100, 1);
    ctx.fillRect(50, 40, 80, 1);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "600px",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid black", width: "800px", height: "530px" }}
      ></canvas>
    </div>
  );
}
