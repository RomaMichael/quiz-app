import React, { useEffect, useState } from "react";
import { useLearning } from "../../../context/LearningProvider";
import "./Randoms.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Randoms() {
  const { learningData, setLearningData } = useLearning();
  const [categoryRandom, setCategoryRandom] = useState("");
  const [randomNum, setRandomNum] = useState();

  useEffect(() => {
    setRandomNum(Math.trunc(Math.random() * learningData.length));
    if (categoryRandom === "") {
      return;
    }
    const filtered = learningData.filter(
      (data) => data.category === categoryRandom
    );

    setLearningData(filtered);
  }, [categoryRandom]);
  console.log(learningData[randomNum]);

  const nextPicture = () => {
    if (randomNum === learningData.length - 1) {
      setRandomNum(0);
    }
    setRandomNum((prev) => prev + 1);
  };
  const prevPicture = () => {
    if (randomNum === 0) {
      setRandomNum(learningData.length);
    }
    setRandomNum((prev) => prev - 1);
  };

  return (
    <div className="random">
      <div className="random-container">
        <button onClick={prevPicture}>
          <AiOutlineArrowLeft />
        </button>
        {learningData[randomNum] ? (
          <div className="radomData">
            <img
              src={learningData[randomNum].img}
              alt="picture"
              style={{ width: "400px", height: "300px" }}
            />
            <h3>{learningData[randomNum].title}</h3>
            <Link
              to={learningData[randomNum].id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2
                style={{
                  fontSize: "40px",
                  color: "green",
                  textTransform: "uppercase",
                }}
              >
                Learn more about it
              </h2>
            </Link>
          </div>
        ) : null}

        <button onClick={nextPicture}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
