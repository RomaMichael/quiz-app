import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { FaUserPlus } from "react-icons/fa";
import { useUsers } from "../../context/UserProvider";
import { CiLogout } from "react-icons/ci";
import UserProps from "../MUI/UserProps";

export default function Nav() {
  const { user, logout } = useUsers();

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
          {user.isLoggedIn ? (
            <div className="logout">
              <div className="user-pic">
                <UserProps user={user} logout={logout} />
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
