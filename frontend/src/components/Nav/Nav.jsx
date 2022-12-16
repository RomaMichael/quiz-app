import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FaUserPlus } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo-container">
          <Link to={"/home"}>
            <img
              src="data:image/png;base64,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"
              alt="logo"
              style={{ width: "100px", height: "50px" }}
            />
          </Link>
        </div>
        <div className="menu">
          <ul className="menu-items">
            <li>
              <Link
                to={"/learning"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Learning
              </Link>
            </li>
            <li>
              <Link
                to={"/testspage"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Tests
              </Link>
            </li>
            <li>
              <Link
                to="/games"
                style={{ textDecoration: "none", color: "black" }}
              >
                Games
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-buttons">
          <button>1</button>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <FaUserPlus style={{ fontSize: "35px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}