import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./MainPageRight.css";
import { useUsers } from "../../../context/UserProvider";
import { useGamesResults } from "../../../context/GamesResultsProvider";

export default function MainPageRight() {
  const { user, allOfUsers } = useUsers();
  const { memoryResults } = useGamesResults();
  const bestUserTotal = allOfUsers.sort((a, b) => {
    return Number(b.testsScore) - Number(a.testsScore);
  });

  if (!bestUserTotal[0]) {
    return <div>Loading...</div>;
  }
  const bestTestsResult = bestUserTotal[0];

  const sortPlayers = allOfUsers.sort((a, b) => {
    return Number(a.memoryGameRecord) - Number(b.memoryGameRecord);
  });

  const bestMemoryPlayer = sortPlayers[0];

  return (
    <div className="mainPage-right">
      <div className="mainPage-right-container">
        <div className="best-test-results">
          <p>Best tests score</p>
          <Link to={bestTestsResult._id}>
            <img
              src={bestTestsResult.avatar.url}
              alt={bestTestsResult.username}
            />
          </Link>
          {bestTestsResult._id === user._id ? (
            <div>
              {" "}
              <p style={{ paddingBottom: "10px" }}>
                {" "}
                My score: {bestTestsResult.testsScore}
              </p>
            </div>
          ) : (
            <div>
              <p>
                {bestTestsResult.username}`s score: {bestTestsResult.testsScore}
              </p>
              <p style={{ paddingBottom: "10px" }}>
                My score: {user.testsScore}
              </p>
            </div>
          )}
        </div>
        {memoryResults.length ? (
          <div className="best-memory-player">
            <p>Best Memory cards Player</p>
            <Link to={bestMemoryPlayer._id}>
              <img
                src={bestMemoryPlayer.avatar.url}
                alt={bestMemoryPlayer.username}
              />
            </Link>
            {bestMemoryPlayer._id === user._id ? (
              <div>
                {" "}
                <p style={{ paddingBottom: "10px" }}>
                  {" "}
                  My score: {bestMemoryPlayer.memoryGameRecord}
                </p>
              </div>
            ) : (
              <div>
                <p>
                  {bestMemoryPlayer.username}`s score:{" "}
                  {bestMemoryPlayer.memoryGameRecord}
                </p>
                <p style={{ paddingBottom: "10px" }}>
                  My score: {user.memoryGameRecord}
                </p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
