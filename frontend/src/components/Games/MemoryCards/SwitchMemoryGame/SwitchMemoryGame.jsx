import React, { useState } from "react";
import { useEffect } from "react";
import ChooseChars from "./ChooseChars/ChooseChars";
import "./SwitchMemoryGame.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function SwitchMemoryGame({
  showCards,
  setSwitcher,
  setShowCards,
  cards,
  setCards,
  animals,
  cartoons,
  chars,
  setChars,
}) {
  const [pickedCards, setPickedCards] = useState(0);

  useEffect(() => {
    setCards((prev) => prev.map((card) => ({ ...card, picked: false })));
  }, []);

  const pickCard = (i) => {
    if (pickedCards < 10) {
      setPickedCards((prev) => prev + 1);

      const currrentCharacter = cards[i].name;
      const findCard = cards.filter((card) => card.name === currrentCharacter);

      const currentIndex = showCards.findIndex(
        (card) => card.name === cards[i].name
      );

      if (currentIndex === -1) {
        setShowCards((prev) => {
          return [...prev, ...findCard];
        });
        setCards((prev) =>
          prev.map((card) => {
            if (card.id === findCard[0].id) {
              return { ...card, picked: true };
            } else {
              return card;
            }
          })
        );
      } else {
        return;
      }
    }
    if (pickedCards === 9) {
      // setTimeout(() => , 500);
      setSwitcher(true);
      return;
    }
  };
  const pickCartoons = () => {
    setCards(cartoons);
    setChars(true);
  };

  const pickAnimalss = () => {
    setCards(animals);
    setChars(true);
  };

  const allChars = () => {
    setChars(true);
  };

  return (
    <div className="switchmemorygame">
      {chars ? (
        <div className="switchmemorygame-container">
          <div
            className="button-back"
            style={{
              display: "flex",
              jusifyContent: "flex-start",
              position: "relative",
              top: "40px",
            }}
          >
            <button
              onClick={() => setChars(false)}
              style={{
                position: "relative",
                left: "80px",
                top: "30px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <BsFillArrowLeftCircleFill
                style={{
                  fontSize: "40px",
                }}
              />
            </button>
          </div>
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
                    onClick={card.picked ? null : () => pickCard(i)}
                    className="animal-cards"
                  >
                    {card.picked ? (
                      <div
                        style={{
                          width: "150px",
                          height: "100px",
                          borderRadius: "8px",
                          border: "1px solid black",
                        }}
                      ></div>
                    ) : (
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
      ) : (
        <ChooseChars
          animals={animals}
          cartoons={cartoons}
          pickCartoons={pickCartoons}
          pickAnimalss={pickAnimalss}
          allChars={allChars}
        />
      )}
    </div>
  );
}
