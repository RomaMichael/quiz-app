import React, { useEffect } from "react";
import { useGamesResults } from "../../../../../context/GamesResultsProvider";

import { useUsers } from "../../../../../context/UserProvider";
import "./MemoryGameEnd.css";

export default function MemoryGameEnd({ gameResult }) {
  const { user } = useUsers();
  const { addGameResult, gamesResults } = useGamesResults();

  const myResults = gamesResults.filter((result) => result.userId === user._id);
  const currentGameResults = myResults.filter(
    (result) => result.gameType === "memory-game"
  );
  console.log(currentGameResults);
  useEffect(() => {
    const currentResult = {
      tries: gameResult.tries,
      gameType: "memory-game",
      userId: user._id,
    };
    addGameResult(currentResult);
  }, []);

  const allScores = currentGameResults.reduce((start, res) => {
    return start + res.tries;
  }, 0);

  const avarage = (allScores / currentGameResults.length).toFixed(2);

  const sortedResults = currentGameResults.sort((a, b) => {
    return a.tries - b.tries;
  });
  const bestShot = sortedResults[0];
  console.log(sortedResults);
  console.log(bestShot);

  return (
    <div className="MemoryGameEnd">
      <h1> You finish the game in {gameResult.tries} tries</h1>
      {myResults.length > 1 ? (
        <h2>Your avarage is {avarage} tries per round</h2>
      ) : null}

      <h3>
        Your best shot is:{" "}
        {gameResult.tries < bestShot.tries ? (
          <span>{gameResult.tries}</span>
        ) : (
          <span>{bestShot.tries}</span>
        )}
      </h3>
    </div>
  );
}
