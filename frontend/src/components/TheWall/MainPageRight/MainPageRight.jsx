import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./MainPageRight.css";
import { useUsers } from "../../../context/UserProvider";
import { useGamesResults } from "../../../context/GamesResultsProvider";

export default function MainPageRight() {
  const { user, bestTestsResult, bestMemoryPlayer } = useUsers();
  const { memoryResults } = useGamesResults();

  if (!bestTestsResult) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mainPage-right-container">
        <div className="best-test-results">
          <Link to={bestTestsResult._id}>
            <p className="best-result-title">Best tests score</p>
            <div className="best-test-results-content">
              <div className="best-test-results-picture">
                <img
                  src={bestTestsResult.avatar.url}
                  alt={bestTestsResult.username}
                />
              </div>
              <div className="best-test-results-props">
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
                      {bestTestsResult.username}`s score:{" "}
                      {bestTestsResult.testsScore}
                    </p>
                    <p style={{ paddingBottom: "10px" }}>
                      My score: {user.testsScore}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
        {memoryResults.length ? (
          <div className="best-memory-player">
            <Link to={bestMemoryPlayer._id}>
              <p className="best-memory-player-title">
                Best Memory cards Player
              </p>
              <div className="best-memory-player-content">
                <div className="best-memory-player-picture">
                  <img
                    src={bestMemoryPlayer.avatar.url}
                    alt={bestMemoryPlayer.username}
                  />
                </div>
                <div className="best-memory-player-props">
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
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}
