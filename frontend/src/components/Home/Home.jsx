import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "@chakra-ui/react";

import "./Home.css";
import LoginButton from "../buttons/LoginButton";
import { useUsers } from "../../context/UserProvider";
import TheWall from "../TheWall/TheWall";
export default function Home() {
  const { user } = useUsers();
  return (
    <div className="home">
      <div className="home-container">
        {user.isLoggedIn ? (
          <TheWall />
        ) : (
          <div className="login-to-the-app">
            <h1>
              Welcome to <span>Learn&Play</span>
            </h1>
            <h2>Want to play and learn with us?</h2>
            <h3>So what are you waiting for?</h3>
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
}
