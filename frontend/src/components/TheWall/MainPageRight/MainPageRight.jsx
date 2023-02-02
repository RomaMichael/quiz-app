import { Link } from "react-router-dom";
import React from "react";
import "./MainPageRight.css";
import { useResultsTest } from "../../../context/ResultsTestProvider";
import { useUsers } from "../../../context/UserProvider";
import { useEffect } from "react";
import { useGamesResults } from "../../../context/GamesResultsProvider";

export default function MainPageRight() {
  const { testResults } = useResultsTest();
  const { user, setUser, updateUser, allOfUsers } = useUsers();
  const { gameResults } = useGamesResults();

  const myResults = testResults.filter((item) => item.userId === user._id);

  useEffect(() => {
    const totalScore = myResults.reduce((start, item) => {
      let totalSum = 0;

      switch (item.testLevel) {
        case "easy":
          totalSum += item.result;
          break;
        case "medium":
          totalSum += item.result * 2;
          break;
        case "hard":
          totalSum += item.result * 4;
          break;
      }

      return start + totalSum / myResults.length;
    }, 0);

    const updatedUser = { ...user, testsScore: totalScore.toFixed(2) };

    setUser(updatedUser);
    updateUser(updatedUser);
  }, []);

  const bestUserTotal = allOfUsers.sort((a, b) => {
    return b.testsScore - a.testsScore;
  });
  const bestTestsResult = bestUserTotal[0];

  console.log(gameResults);
  // const bestMemoryScore = gameResults.sort((a, b) => a.tries - b.tries);
  // console.log(bestMemoryScore);
  // const userPlayer = allOfUsers.filter(
  //   (user) => user._id === bestMemoryScore[0].userId
  // );

  // const bestMemoryPlayer = userPlayer[0];

  return (
    <div className="mainPage-right">
      <div className="mainPage-right-container">
        <div className="best-user">
          <p>Best tests score</p>
          <Link to={bestTestsResult._id}>
            <img
              src={bestTestsResult.avatar.url}
              alt={bestTestsResult.username}
            />
          </Link>
          <p>
            {bestTestsResult.username}`s Score: {bestTestsResult.testsScore}
          </p>
          {user._id !== bestTestsResult._id ? (
            <p>Score:{user.testsScore}</p>
          ) : null}
        </div>
        {/* <div className="best-memory-player">
          <p>Best Memory cards Player</p>
          <Link to={bestMemoryPlayer._id}>
            <img
              src={bestMemoryPlayer.avatar.url}
              alt={bestMemoryPlayer.username}
            />
          </Link>
          <p>
            {bestMemoryPlayer.username}`s Score: {bestTestsResult.testsScore}
          </p>
          {user._id !== bestTestsResult._id ? (
            <p>Best score:{user.testsScore}</p>
          ) : null}
        </div> */}
      </div>
    </div>
  );
}
