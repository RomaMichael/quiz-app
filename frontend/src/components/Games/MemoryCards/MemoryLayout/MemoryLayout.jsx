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
  const animals = cards.filter((card) => card.type === "animals");

  const cartoons = cards.filter((card) => card.type === "cartoons");

  const [chars, setChars] = useState(false);

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
              animals={animals}
              cartoons={cartoons}
              setCards={setCards}
              setChars={setChars}
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
