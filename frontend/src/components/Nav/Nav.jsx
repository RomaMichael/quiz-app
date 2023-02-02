import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { FaUserPlus } from "react-icons/fa";
import { useUsers } from "../../context/UserProvider";

import UserProps from "../MUI/UserProps";

import Notifications from "../MUI/Notifications/Notifications";

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
        <div className="nav-input">
          <input type="text" placeholder="Search for members" />
        </div>
        <div className="nav-buttons">
          {user.isLoggedIn ? (
            <div
              className="user-icons"
              style={{ display: "flex", gap: "15px", alignItems: "center" }}
            >
              <Notifications />
              <div className="user-pic">
                <UserProps user={user} logout={logout} />
              </div>
            </div>
          ) : (
            <div>
              {/* <Link to="/loginpage">
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <FaUserPlus style={{ fontSize: "35px" }} />
                </button>
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
