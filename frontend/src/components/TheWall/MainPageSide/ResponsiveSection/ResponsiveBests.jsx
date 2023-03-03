import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../../../context/UserProvider";

export default function ResponsiveBests() {
  const { user, bestTestsResult, bestMemoryPlayer } = useUsers();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        padding: "50px",
      }}
    >
      <div
        className="best-test-results"
        style={{
          backgroundColor: "#282828",
          width: "65vw",
        }}
      >
        <Link
          to={bestTestsResult._id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="best-results-title">
            <p
              style={{
                fontWeight: "700",
                height: "15px",
                color: "rgb(1, 244, 1)",
              }}
            >
              Best tests score
            </p>
          </div>
          <div
            className="best-results-content"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "10px",
              color: "white",
            }}
          >
            <div
              className="best-results-picture"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img
                src={bestTestsResult.avatar.url}
                alt=""
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "100px",
                  padding: "10px",
                }}
              />
            </div>

            <div
              className="best-resuts-props"
              style={{
                display: "flex",
                fontSize: "14px",
                height: "70px",
                padding: "6px",
              }}
            >
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

      <div
        className="best-test-results"
        style={{
          backgroundColor: "#282828",
          width: "65vw",
        }}
      >
        <Link
          to={bestMemoryPlayer._id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="best-results-title">
            <p
              style={{
                fontWeight: "700",
                height: "15px",
                color: "rgb(1, 244, 1)",
              }}
            >
              Best Memory cards Player
            </p>
          </div>
          <div
            className="best-results-content"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "10px",
              color: "white",
            }}
          >
            <div
              className="best-results-picture"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img
                src={bestMemoryPlayer.avatar.url}
                alt=""
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "100px",
                  padding: "10px",
                }}
              />
            </div>

            <div
              className="best-resuts-props"
              style={{
                display: "flex",
                fontSize: "14px",
                height: "70px",
                padding: "6px",
              }}
            >
              {bestMemoryPlayer._id === user._id ? (
                <div>
                  {" "}
                  <p style={{ paddingBottom: "10px" }}>
                    {" "}
                    My score: {bestMemoryPlayer.testsScore}
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    {bestMemoryPlayer.username}`s score:{" "}
                    {bestMemoryPlayer.testsScore}
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
    </div>
  );
}
