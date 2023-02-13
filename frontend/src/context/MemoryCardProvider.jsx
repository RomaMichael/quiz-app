import React, { useContext, createContext, useState, useEffect } from "react";

const RememberCardContext = createContext();

export function MemoryProvider({ children }) {
  const [cards, setCards] = useState([]);

  const [resetCards, setResetCards] = useState([]);
  useEffect(() => {
    fetchMemoryCards();
  }, []);

  const fetchMemoryCards = async () => {
    try {
      const res = await fetch("http://localhost:8006/memorycards");
      const data = await res.json();
      setCards(data);
      setResetCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    cards,
    setCards,
    resetCards,
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
