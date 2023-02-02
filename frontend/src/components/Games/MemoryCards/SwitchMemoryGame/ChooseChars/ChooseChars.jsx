import React from "react";
import "./ChooseChars.css";

export default function ChooseChars({
  animals,
  cartoons,
  pickCartoons,
  pickAnimalss,
  allChars,
}) {
  const randomCartoonsIndex = Math.trunc(Math.random() * cartoons.length);
  const randomAnimalsIndex = Math.trunc(Math.random() * animals.length);

 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="chars">
        <h1>Choose Characters for the game</h1>
        <div className="choose-char" style={{ display: "flex", gap: "100px" }}>
          <div className="cartoons-chars">
            <h2>Cartoons</h2>

            <img
              src={
                cartoons[randomCartoonsIndex]
                  ? cartoons[randomCartoonsIndex].img
                  : ""
              }
              alt={
                cartoons[randomCartoonsIndex]
                  ? cartoons[randomCartoonsIndex].name
                  : ""
              }
              style={{ width: "300px", height: "200px" }}
              onClick={pickCartoons}
            />
          </div>
          <div className="animal-chars">
            <h2>Animals</h2>

            <img
              src={
                animals[randomAnimalsIndex]
                  ? animals[randomAnimalsIndex].img
                  : ""
              }
              alt={
                animals[randomAnimalsIndex]
                  ? animals[randomAnimalsIndex].img
                  : ""
              }
              style={{ width: "300px", height: "200px" }}
              onClick={pickAnimalss}
            />
          </div>
        </div>
        <button
          style={{
            position: "relative",
            top: "100px",
            width: "150px",
            height: "45px",
            border: "none",
            borderRadius: "12px",
            color: "white",
            backgroundColor: "purple",
          }}
          onClick={allChars}
        >
          Give me all!
        </button>
      </div>
    </div>
  );
}
