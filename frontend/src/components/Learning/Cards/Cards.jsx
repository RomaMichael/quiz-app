import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLearning } from "../../../context/LearningProvider";
import "./Cards.css"

export default function Cards() {
  const { learningData, setLearningData } = useLearning();
  const [categoryCards, setCategoryCards] = useState("");
  useEffect(() => {
    if (categoryCards === "") {
      return;
    }
    const filtered = learningData.filter(
      (data) => data.category === categoryCards
    );
    setLearningData(filtered);
  }, [categoryCards]);

  console.log(learningData);
  return (
    <div className="cards">
      <div
        className="cards-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "50px",
        }}
      >
        {learningData.map((data) => (
          <Link to={data.id}>
            <div
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={data.img} alt="pic" style={{ height: "150px" }} />
              <p>{data.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
