import React from "react";

import "./Home.css";

import { useUsers } from "../../context/UserProvider";
import TheWall from "../TheWall/TheWall";
import LoginPage from "../LoginPage/LoginPage";
export default function Home() {
  const { user } = useUsers();
  return (
    <div className="home">
      <div className="home-container">
        {user.isLoggedIn ? (
          <TheWall />
        ) : (
          <div className="login-to-the-app">
            <LoginPage />
          </div>
        )}
      </div>
    </div>
  );
}
