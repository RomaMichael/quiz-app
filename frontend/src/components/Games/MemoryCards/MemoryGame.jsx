import React, { useState, useEffect } from "react";
import "./MemoryGame.css";
export default function MemoryGame({
  switcher,

  cards,
  setShowCards,
  showCards,
}) {
  const [counter, setCounter] = useState(0);
  const [firstCard, setFirstCard] = useState();
  const [secondCard, setSecondCard] = useState();
  const [wrongTry, setWrongTry] = useState(0);

  const [score, setScore] = useState(0);

  let currentCard = [];

  useEffect(() => {
    console.log("switch");
    setShowCards((prev) => prev.sort(() => Math.random() - 0.5));
    setShowCards((prev) => prev.map((card) => ({ ...card, match: false })));
  }, [switcher]);

  useEffect(() => {
    if (secondCard) {
      compare();
    }
  }, [secondCard]);

  const compare = () => {
    if (firstCard.name === secondCard.name) {
      setScore((prev) => prev + 1);
      console.log("right");
      setShowCards((prevCards) =>
        prevCards.map((card) => {
          if (card.name === firstCard.name || card.name === secondCard.name) {
            return { ...card, match: true };
          }
          return card;
        })
      );
    } else {
      console.log("wrong");
      setWrongTry((prev) => prev + 1);

      setTimeout(() => {
        setShowCards((prev) =>
          prev.map((card) => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, open: false };
            } else {
              return card;
            }
          })
        );
      }, 1500);
    }
    setFirstCard(null);
    setSecondCard(null);
  };
  // console.log(showCards);
  const clickOnCard = (id, i) => {
    currentCard = showCards.find((card) => card.id === id);

    setShowCards((prev) =>
      prev.map((card) => {
        if (card.id === currentCard.id) {
          return { ...card, open: true };
        } else {
          return { ...card };
        }
      })
    );

    if (counter === 0) {
      setFirstCard(currentCard);
      setCounter((prev) => prev + 1);
    }

    if (counter === 1) {
      setSecondCard(currentCard);
      setCounter(0);
    }
  };

  const reset = () => {
    setShowCards(
      showCards.map((card) => ({ ...card, open: false, match: false }))
    );
    setCounter(0);
    setScore(0);
  };

  return (
    <div className="memoryCard">
      {" "}
      <div className="memoryCard-container">
        <div
          className="the-cards"
          style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
        >
          {showCards.map((card, i) => (
            <div key={i}>
              {card.open ? (
                <div
                  style={{
                    width: "190px",
                    height: "110px",
                    border: "1px solid black",
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              ) : (
                <div
                  onClick={() => clickOnCard(card.id, i)}
                  style={{
                    width: "190px",
                    height: "110px",
                    border: "1px solid black",
                    backgroundImage: card.match
                      ? `url(${card.img})`
                      : `url( https://tse4.mm.bing.net/th?id=OIP.qcZbhQkP9AyxQSZlIFv27gHaEo&pid=Api&P=0)`,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
        <h2>Score: {score}</h2>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
