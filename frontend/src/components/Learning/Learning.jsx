import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Cards from "./Cards/Cards";
import "./Learning.css";
import Randoms from "./Randoms/Randoms";

export default function Learning() {
  const [learningState, setLearningState] = useState("random");
  const [data, setData] = useState([]);

  console.log(learningState);

  const setRandom = () => {
    setLearningState("random");
  };
  const setCards = () => {
    setLearningState("cards");
  };

  return (
    <div className="learning">
      <div className="learning-container">
        <div className="header">
          <h1>Learning</h1>
          <div className="buttons-header">
            <div className="choose-state">
              <button onClick={setRandom}>Randoms</button>
              <button onClick={setCards}>Cards</button>
            </div>
          </div>
        </div>
        <div className="learning-main">
          {learningState === "random" ? <Randoms /> : <Cards />}
        </div>
      </div>
    </div>
  );
}
