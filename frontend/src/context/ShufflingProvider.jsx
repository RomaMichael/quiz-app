import React, { createContext } from "react";
import { useContext } from "react";
import { useMemoryCard } from "./MemoryCardProvider";

const shuffleContext = createContext();

export function ShuffleProvider({ children }) {
  const { cards } = useMemoryCard();

  let cardsShuffle = cards.sort(() => Math.random() - 0.5);

  const value = {
    cardsShuffle,
  };

  return (
    <shuffleContext.Provider value={value}>{children}</shuffleContext.Provider>
  );
}

export function useShuffle() {
  return useContext(shuffleContext);
}
