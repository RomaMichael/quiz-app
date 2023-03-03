import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

import { useUsers } from "../../context/UserProvider";

import UserProps from "../MUI/UserProps";

import Notifications from "../MUI/Notifications/Notifications";
import ResponsiveNav from "../MUI/ResponsiveNav";

export default function Nav() {
  const { user, logout } = useUsers();

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo-container">
          <Link to={"/"}>
            <img
              src="https://www.linkpicture.com/q/logo_567.png
              "
              alt="logo"
              style={{ width: "140px", height: "50px" }}
            />
          </Link>
        </div>
        {/* <div className="nav-input">
          <input type="text" placeholder="Search for members" />
        </div> */}
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
              <div className="burger-menu">
                {" "}
                <ResponsiveNav logout={logout} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
