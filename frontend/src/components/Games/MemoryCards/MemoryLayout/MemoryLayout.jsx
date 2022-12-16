import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import "./MemoryLayout.css";
import SwitchMemoryGame from "../SwitchMemoryGame/SwitchMemoryGame";
import { useMemoryCard } from "../../../../context/MemoryCardProvider";
import MemoryGame from "../MemoryGame";

export default function MemoryLayout() {
  const [switcher, setSwitcher] = useState(false);
  const [cardsShuffle, setCardsShuffle] = useState([]);
  const [showCards, setShowCards] = useState(cardsShuffle);
  const { cards, setCards } = useMemoryCard();

  return (
    <div className="memoryLayout">
      {switcher ? (
        <MemoryGame
          switcher={switcher}
          setSwitcher={setSwitcher}
          cardsShuffle={cardsShuffle}
          cards={cards}
          showCards={showCards}
          setShowCards={setShowCards}
        />
      ) : (
        <SwitchMemoryGame
          setCardsShuffle={setCardsShuffle}
          cardsShuffle={cardsShuffle}
          setSwitcher={setSwitcher}
          setShowCards={setShowCards}
          showCards={showCards}
          switcher={switcher}
          cards={cards}
          setCards={setCards}
        />
      )}
    </div>
  );
}
