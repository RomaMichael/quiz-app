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

  const easyGeo = () => {
    setTest("geo");
    setTestLevel("easy");
    navigate("/thetest", { replace: true });
  };
  const mediumGeo = () => {
    setTest("geo");
    setTestLevel("medium");
    navigate("/thetest", { replace: true });
  };
  const hardGeo = () => {
    setTest("geo");
    setTestLevel("hard");
    navigate("/thetest", { replace: true });
  };

  const easyMusic = () => {
    setTest("music");
    setTestLevel("easy");
    navigate("/thetest", { replace: true });
  };
  const mediumMusic = () => {
    setTest("music");
    setTestLevel("medium");
    navigate("/thetest", { replace: true });
  };
  const hardMusic = () => {
    setTest("music");
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
          <div className="geo-test">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUv_UnUdDtkvXm_0M2Hkd5TtiYHqGrF5NYg&usqp=CAU"
              alt="geo-test"
            />
            <div className="buttons-level-geo">
              <button onClick={easyGeo}>Easy</button>
              <button onClick={mediumGeo}>Medium</button>
              <button onClick={hardGeo}>Hard</button>
            </div>
          </div>
          <div className="music-test">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1E8NQ01sYCG3visoqzW6brBZP4DN0bWkmYA&usqp=CAU"
              alt="music-test"
            />
            <div className="buttons-level-music">
              <button onClick={easyMusic}>Easy</button>
              <button onClick={mediumMusic}>Medium</button>
              <button onClick={hardMusic}>Hard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
