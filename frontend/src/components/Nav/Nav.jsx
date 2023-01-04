import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { FaUserPlus } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo-container">
          <Link to={"/"}>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/quiz-1428698-1209568.png"
              alt="logo"
              style={{ width: "150px", height: "60px" }}
            />
          </Link>
        </div>
        <div className="menu">
          <ul className="menu-items">
            <li>
              <NavLink
                to={"/learning"}
                style={({ isActive }) => {
                  return isActive
                    ? {
                        textDecoration: "none",
                        color: "red",
                        fontWeight: "700",
                        fontFamily: "monospace",
                        fontSize: "30px",
                      }
                    : {
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "monospace",
                        fontSize: "20px",
                      };
                }}
              >
                Learning
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/testspage"}
                style={({ isActive }) => {
                  return isActive
                    ? {
                        textDecoration: "none",
                        color: "red",
                        fontWeight: "700",
                        fontFamily: "monospace",
                        fontSize: "30px",
                      }
                    : {
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "monospace",
                        fontSize: "20px",
                      };
                }}
              >
                Tests
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/games"
                style={({ isActive }) => {
                  return isActive
                    ? {
                        textDecoration: "none",
                        color: "red",
                        fontWeight: "700",
                        fontFamily: "monospace",
                        fontSize: "30px",
                      }
                    : {
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "monospace",
                        fontSize: "20px",
                      };
                }}
              >
                Games
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-buttons">
          <Link to="/loginpage">
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <FaUserPlus style={{ fontSize: "35px" }} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
