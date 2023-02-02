import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLearning } from "../../../context/LearningProvider";
import "./Cards.css";
import FilterLearningCards from "./FilterLearningCards/FilterLearningCards";

export default function Cards() {
  const { learningData } = useLearning();
  const [searchName, setSearchName] = useState("");
  const [category, setCategory] = useState("");

  const filter = () => {
    let cardsArray = [...learningData];

    if (searchName) {
      cardsArray = cardsArray.filter((card) =>
        card.title.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if (category) {
      cardsArray = cardsArray.filter((card) => card.subCategory === category);
    }
    return cardsArray;
  };

  const filteredCards = filter();

  return (
    <div className="cards">
      <div className="cards-container" style={{ display: "flex", gap: "20px" }}>
        <FilterLearningCards
          setSearchName={setSearchName}
          setCategory={setCategory}
        />
        <div
          className="learning-cards"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "50px",
            position: "relative",
            left: "150px",
          }}
        >
          {filteredCards.map((data, i) => (
            <Link
              to={data.id}
              key={i}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "700",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "200px",

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
    </div>
  );
}
