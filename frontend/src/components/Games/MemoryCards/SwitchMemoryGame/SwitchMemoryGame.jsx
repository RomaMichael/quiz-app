import React, { useState } from "react";
import { useEffect } from "react";
import "./SwitchMemoryGame.css";

export default function SwitchMemoryGame({
  setCardsShuffle,
  cardsShuffle,
  setSwitcher,
  setShowCards,
  cards,
  setCards,
}) {
  const [pickedCards, setPickedCards] = useState(0);

  useEffect(() => {
    setCards((prev) => prev.map((card) => ({ ...card, picked: false })));
  }, []);

  const pickCard = (i) => {
    if (pickedCards < 10) {
      setPickedCards((prev) => prev + 1);

      const currrentCharacter = cards[i].name;
      const findCards = cards.filter((card) => card.name === currrentCharacter);

      setCardsShuffle((prev) => {
        const currentIndex = cardsShuffle.findIndex(
          (card) => card.name === cards[i].name
        );
        if (currentIndex === -1) {
          // setCards((prev) => ({ ...prev, picked: true }));
          setShowCards((prev) => [...prev, ...findCards]);
          return [...prev, { ...cards[i], picked: true }];
        } else {
          return;
        }
      });
    }
    if (pickedCards === 9) {
      setTimeout(() => setSwitcher(true), 2000);

      return;
    }
  };

  return (
    <div className="switchmemorygame">
      <div className="switchmemorygame-container">
        <div className="choose-cards-title">
          <h1>Choose characters for playing</h1>
        </div>
        <div className="choose-cards">
          {" "}
          {cards.map((card, i) => {
            if (i % 2 === 0) {
              return (
                <div
                  key={i}
                  onClick={() => pickCard(i)}
                  className="animal-cards"
                >
                  {card.picked ? null : (
                    <img
                      src={card.img}
                      alt={card.name}
                      style={{ width: "150px", height: "100px" }}
                      className="animal-card"
                    />
                  )}
                </div>
              );
            }
          })}
        </div>
        <h3>You picked {pickedCards}/10 cards </h3>
      </div>
    </div>
  );
}
