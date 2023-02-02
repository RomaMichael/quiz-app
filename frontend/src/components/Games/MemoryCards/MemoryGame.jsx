import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MemoryGame.css";
import MemoryGameEnd from "./SwitchMemoryGame/MemoryGameEnd.jsx/MemoryGameEnd";
export default function MemoryGame({ switcher, setShowCards, showCards }) {
  const [openCards, setOpenCards] = useState(0);
  const [cardsChecker, setCardsChecker] = useState(0);
  const [firstCard, setFirstCard] = useState();
  const [secondCard, setSecondCard] = useState();
  const [tries, setTries] = useState(0);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [gameResult, setGameResult] = useState();

  let currentCard = null;

  useEffect(() => {
    setShowCards((prev) => prev.sort(() => Math.random() - 0.5));
    setShowCards((prev) => prev.map((card) => ({ ...card, match: false })));
  }, [switcher]);

  useEffect(() => {
    if (secondCard) {
      compare();
    }
  }, [secondCard]);

  // useEffect(() => {
  //   if (score === 10) {
  //
  //   }
  // }, [score]);

  const compare = () => {
    if (firstCard.name === secondCard.name) {
      setScore((prev) => prev + 1);
      setCardsChecker(0);
      if (score === 9) {
        setGameResult({ tries: tries });
        setEndGame(true);
      }

      setShowCards((prevCards) =>
        prevCards.map((card) => {
          if (card.name === firstCard.name || card.name === secondCard.name) {
            return { ...card, match: true };
          }
          return card;
        })
      );
    } else {
      setTimeout(() => {
        setCardsChecker(1);
        setShowCards((prev) =>
          prev.map((card) => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, open: false };
            } else {
              return card;
            }
          })
        );
      }, 1000);
    }
    setFirstCard(null);
    setSecondCard(null);
  };

  const clickOnCard = (id, i) => {
    currentCard = showCards.find((card) => card.id === id);

    setShowCards((prev) =>
      prev.map((card) => {
        if (firstCard && secondCard) {
          return { ...card, open: false };
        }

        if (card.id === currentCard.id) {
          return { ...card, open: true };
        } else {
          return { ...card };
        }
      })
    );

    if (cardsChecker === 2) {
      setCardsChecker(1);
      setOpenCards(1);
      setFirstCard(currentCard);
      setSecondCard(null);

      setShowCards((prevCards) =>
        prevCards.map((card) => {
          {
            if (card.id !== currentCard.id) {
              return { ...card, open: false };
            } else {
              return { ...card, open: true };
            }
          }
        })
      );
    } else {
      if (openCards === 0) {
        setFirstCard(currentCard);
        setOpenCards((prev) => prev + 1);
        setCardsChecker((prev) => prev + 1);
      }

      if (openCards === 1) {
        setSecondCard(currentCard);
        setTries((prev) => prev + 1);
        setOpenCards(0);
        setCardsChecker((prev) => prev + 1);
      }
    }
  };

  const reset = () => {
    setShowCards(
      showCards.map((card) => ({ ...card, open: false, match: false }))
    );
    setOpenCards(0);
    setScore(0);
  };

  return (
    <div className="memoryCard" style={{ marginTop: "40px" }}>
      {" "}
      {endGame ? (
        <MemoryGameEnd gameResult={gameResult} />
      ) : (
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
                      height: "100px",
                      border: "1px solid black",

                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <img
                      src={card.img}
                      alt="card"
                      style={{ width: "190px", height: "100px" }}
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => clickOnCard(card.id, i)}
                    style={{
                      width: "190px",
                      height: "100px",
                    }}
                  >
                    {card.match ? (
                      <img
                        src={card.img}
                        style={{ width: "190px", height: "100px" }}
                        alt="card"
                      />
                    ) : (
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.qcZbhQkP9AyxQSZlIFv27gHaEo&pid=Api&P=0"
                        style={{ width: "190px", height: "100px" }}
                        alt="card"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2>Score: {score}</h2>
          <button
            onClick={reset}
            style={{
              backgroundColor: "red",
              color: "white",
              width: "100px",
              height: "30px",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
