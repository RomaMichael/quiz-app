import React, { useEffect, useRef, useState } from "react";
import { BsCartX, BsEraserFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import "./PaintGame.css";

export default function PaintGame() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const colorRef = useRef("black");
  const lineWidthRef = useRef(1);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 700;
    canvas.height = 500;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = colorRef.current;
    context.lineWidth = lineWidthRef.current;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const drawing = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDraw = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };
  const erase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };

  const setColor = (chosenColor) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = chosenColor;
  };
  const setLineWidth = (e) => {
    console.log(e);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = e;
  };

  const saveImageToLocal = (event) => {
    let link = event.currentTarget;
    link.setAttribute("download", "canvas.png");
    let image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
  };
  return (
    <div className="paint-game">
      <div className="paint-game-container">
        <div className="color-choose">
          <div
            style={{
              backgroundColor: "red",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
            onClick={() => setColor("red")}
          ></div>
          <div
            style={{
              backgroundColor: "blue",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
            onClick={() => setColor("blue")}
          ></div>
          <div
            style={{
              backgroundColor: "green",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
            onClick={() => setColor("green")}
          ></div>
          <div
            style={{
              backgroundColor: "yellow",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
            onClick={() => setColor("yellow")}
          ></div>
          <div
            style={{
              backgroundColor: "orange",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
            onClick={() => setColor("orange")}
          ></div>
          <div
            style={{
              backgroundColor: "black",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
            onClick={() => setColor("black")}
          ></div>
          <div
            style={{
              backgroundColor: "purple",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
            onClick={() => setColor("purple")}
          ></div>
          <div
            style={{
              backgroundColor: "pink",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
            onClick={() => setColor("pink")}
          ></div>
        </div>

        <canvas
          className="canvas"
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={drawing}
          onMouseUp={stopDraw}
        ></canvas>
        <div className="paint-buttons">
          <button onClick={draw}>
            <BsFillPencilFill />
          </button>
          <button onClick={erase}>
            <BsEraserFill />
          </button>

          <select
            onChange={(e) => setLineWidth(e.target.value)}
            style={{ width: "50px" }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
            <option value={21}>21</option>
            <option value={22}>22</option>
            <option value={23}>23</option>
            <option value={24}>24</option>
            <option value={25}>25</option>
            <option value={26}>26</option>
            <option value={27}>27</option>
            <option value={28}>28</option>
            <option value={29}>29</option>
            <option value={30}>30</option>
          </select>
          <a
            id="download_image_link"
            href="download_link"
            onClick={saveImageToLocal}
          >
            <button className="download-button">Download Image</button>
          </a>
        </div>
      </div>
    </div>
  );
}
