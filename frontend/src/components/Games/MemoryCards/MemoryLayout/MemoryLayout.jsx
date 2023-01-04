import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import "./MemoryLayout.css";
import SwitchMemoryGame from "../SwitchMemoryGame/SwitchMemoryGame";
import { useMemoryCard } from "../../../../context/MemoryCardProvider";
import MemoryGame from "../MemoryGame";

export default function MemoryLayout() {
  const { cards, setCards } = useMemoryCard();

  const [switcher, setSwitcher] = useState(false);

  const [showCards, setShowCards] = useState([]);
  const [animals, setAnimals] = useState(
    cards.filter((card) => card.type === "animals")
  );
  const [cartoons, setCartoons] = useState(
    cards.filter((card) => card.type === "cartoons")
  );
  const [chars, setChars] = useState(false);

  // useEffect(() => {
  //   animals = cards.filter((card) => card.type === "animals")
  //   cartoons = cards.filter((card) => card.type === "cartoons")
  // },[]);
  console.log(animals);
  return (
    <div className="memoryLayout">
      {cards ? (
        <div>
          {" "}
          {switcher ? (
            <MemoryGame
              switcher={switcher}
              setSwitcher={setSwitcher}
              cards={cards}
              showCards={showCards}
              setShowCards={setShowCards}
            />
          ) : (
            <SwitchMemoryGame
              setSwitcher={setSwitcher}
              setShowCards={setShowCards}
              showCards={showCards}
              switcher={switcher}
              cards={cards}
              setCards={setCards}
              animals={animals}
              cartoons={cartoons}
              chars={chars}
              setChars={setChars}
            />
          )}
        </div>
      ) : (
        <h1>no cards</h1>
      )}
    </div>
  );
}
