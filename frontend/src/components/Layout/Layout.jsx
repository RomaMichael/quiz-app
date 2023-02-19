import React from "react";
import { Route, Routes } from "react-router-dom";
import PaintGame from "../Games/CanvasGame/PaintGame";
import Games from "../Games/Games";
import Labirynth from "../Games/Labirynth/Labirynth";
import MemoryLayout from "../Games/MemoryCards/MemoryLayout/MemoryLayout";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import SignUp from "../LoginPage/SignUp/SignUp";
import Statistics from "../Statistics/Statistics";
import TestsPage from "../TestsPsge/TestsPage";
import TheTest from "../TheTest/TheTest";
import UserProfile from "../UserProfile/UserProfile";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="Layout">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testspage" element={<TestsPage />} />
        <Route path="/thetest" element={<TheTest />} />
        <Route path="/games" element={<Games />} />
        <Route path="/memorygame" element={<MemoryLayout />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/:id" element={<UserProfile />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/paintgame" element={<PaintGame />} />
      </Routes>
    </div>
  );
}
