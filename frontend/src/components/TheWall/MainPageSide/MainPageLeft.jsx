import React from "react";
import "./MainPageSide.css";
import { Link } from "react-router-dom";
import { useUsers } from "../../../context/UserProvider";

export default function MainPageLeft() {
  const { user } = useUsers();
  return (
    <div className="mainPageSide">
      <div className="mainPageSide-container">
        <Link
          to={`/${user._id}`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          {" "}
          <p
            style={{
              fontWeight: "700",
              width: "150px",
              fontSize: "22px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            My profile
          </p>
        </Link>
        <Link
          to="/statistics"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <p
            style={{
              fontWeight: "700",
              width: "150px",
              fontSize: "22px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            Statistics
          </p>
        </Link>

        <Link
          to="/testspage"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p
            style={{
              fontWeight: "700",
              width: "150px",
              fontSize: "22px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Tests
          </p>
        </Link>

        <Link to="/games" style={{ textDecoration: "none", color: "black" }}>
          <p
            style={{
              fontWeight: "700",
              width: "150px",
              fontSize: "22px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Games
          </p>
        </Link>
      </div>
    </div>
  );
}
