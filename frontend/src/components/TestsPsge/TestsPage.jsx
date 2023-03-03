import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTest } from "../../context/TestProvider";
import "./TestsPage.css";

export default function TestsPage() {
  const { setTest, setTestLevel } = useTest();

  const navigate = useNavigate();

  const easyMath = () => {
    setTest("math");
    setTestLevel("easy");
    navigate("/thetest", { replace: true });
  };
  const mediumMath = () => {
    setTest("math");
    setTestLevel("medium");
    navigate("/thetest", { replace: true });
  };
  const hardMath = () => {
    setTest("math");
    setTestLevel("hard");
    navigate("/thetest", { replace: true });
  };

  const easyColors = () => {
    setTest("colors and shapes");
    setTestLevel("easy");
    navigate("/thetest", { replace: true });
  };
  const mediumColors = () => {
    setTest("colors and shapes");
    setTestLevel("medium");
    navigate("/thetest", { replace: true });
  };
  const hardColors = () => {
    setTest("colors and shapes");
    setTestLevel("hard");
    navigate("/thetest", { replace: true });
  };

  const easyAnimals = () => {
    setTest("animals");
    setTestLevel("easy");
    navigate("/thetest", { replace: true });
  };
  const mediumAnimals = () => {
    setTest("animals");
    setTestLevel("medium");
    navigate("/thetest", { replace: true });
  };
  const hardAnimals = () => {
    setTest("animals");
    setTestLevel("hard");
    navigate("/thetest", { replace: true });
  };

  return (
    <div className="tests-page">
      <div className="tests-page-container">
        <div className="tests-title">
          <h1>Choose test</h1>
        </div>
        <div className="tests-section">
          <div className="math-test">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStn0GjFn24UhNCErHNgQTSFVCgElWh9SITCQ&usqp=CAU"
              alt="math-test"
            />
            <div className="buttons-level-math">
              <button onClick={easyMath}>Easy</button>
              <button onClick={mediumMath}>Medium</button>
              <button onClick={hardMath}>Hard</button>
            </div>
          </div>
          <div className="colors-test">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWllMQeENi2uGsX7QsX19nuuVG4x8VEx3ow&usqp=CAU"
              alt="colors-test"
            />
            <div className="buttons-level-colors">
              <button onClick={easyColors}>Easy</button>
              <button onClick={mediumColors}>Medium</button>
              <button onClick={hardColors}>Hard</button>
            </div>
          </div>
          <div className="animals-test">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhw3IXIijfa-b047Eb23f2YUgbASkNXWgIQ&usqp=CAU"
              alt="animals-test"
            />
            <div className="buttons-level-animals">
              <button onClick={easyAnimals}>Easy</button>
              <button onClick={mediumAnimals}>Medium</button>
              <button onClick={hardAnimals}>Hard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
