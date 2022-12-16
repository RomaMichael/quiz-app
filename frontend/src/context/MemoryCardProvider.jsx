import React, { useContext, createContext, useState } from "react";
import Cards from "../quizapp/rememberCards.json";

const RememberCardContext = createContext();

export function MemoryProvider({ children }) {
  const [cards, setCards] = useState(Cards);

  const value = {
    cards,
    setCards,
  };
  return (
    <RememberCardContext.Provider value={value}>
      {children}
    </RememberCardContext.Provider>
  );
}

export function useMemoryCard() {
  return useContext(RememberCardContext);
}
