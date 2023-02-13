import React, { useEffect } from "react";
import { useGamesResults } from "../../../../../context/GamesResultsProvider";
import { useMemoryCard } from "../../../../../context/MemoryCardProvider";

import { useUsers } from "../../../../../context/UserProvider";
import "./MemoryGameEnd.css";

export default function MemoryGameEnd({
  gameResult,
  animals,
  cartoons,
  setCards,
  setChars,
}) {
  const { resetCards } = useMemoryCard();
  console.log(resetCards);
  let currentResult = null;
  useEffect(() => {
    currentResult = {
      tries: gameResult.tries,
      gameType: "memory-game",
      userId: user._id,
    };
    addGameResult(currentResult);
    setCards(resetCards);
    setChars(false);
  }, []);

  useEffect(() => {
    if (currentResult.tries < user.memoryGameRecord) {
      updateUser({ ...user, memoryGameRecord: currentResult.tries });
    }
  }, [currentResult]);

  const { user, updateUser } = useUsers();
  const { addGameResult, memoryResults } = useGamesResults();

  const myResults = memoryResults.filter(
    (result) => result.userId === user._id
  );
  const currentGameResults = myResults.filter(
    (result) => result.gameType === "memory-game"
  );
  animals = animals.map((animal) => animal.picked === false);
  cartoons = cartoons.map((cartoon) => cartoon.picked === false);

  const allScores = currentGameResults.reduce((start, res) => {
    return start + res.tries;
  }, 0);

  const avarage = (allScores / currentGameResults.length).toFixed(2);

  const sortedResults = currentGameResults.sort((a, b) => {
    return b.tries - a.tries;
  });
  const bestShot = sortedResults[0];
  console.log(sortedResults);
  console.log(bestShot.tries);
  console.log(gameResult);
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
