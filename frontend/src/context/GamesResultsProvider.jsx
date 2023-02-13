import React, { useContext, useState, useEffect, createContext } from "react";
import { useUsers } from "./UserProvider";

const gamesResultsContext = createContext();

export function GamesResultsProvider({ children }) {
  const [gamesResults, setGamesResults] = useState([]);

  useEffect(() => {
    fetchGamesResults();
  }, []);

  const fetchGamesResults = async () => {
    try {
      const res = await fetch("http://localHost:8006/gamesresults");
      const data = await res.json();

      setGamesResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addGameResult = async (res) => {
    await fetch("http://localHost:8006/gamesresults/new-result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(res),
    });
  };
  const memoryResults = gamesResults;
  const value = {
    addGameResult,
    memoryResults,
  };

  return (
    <gamesResultsContext.Provider value={value}>
      {children}
    </gamesResultsContext.Provider>
  );
}

export function useGamesResults() {
  return useContext(gamesResultsContext);
}
