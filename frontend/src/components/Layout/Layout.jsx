import React from "react";
import { Route, Routes } from "react-router-dom";

import Pages from "../../pages/Pages";
import Games from "../Games/Games";
import MemoryLayout from "../Games/MemoryCards/MemoryLayout/MemoryLayout";

import Home from "../Home/Home";

import Learning from "../Learning/Learning";
import LoginPage from "../LoginPage/LoginPage";
import SignUp from "../LoginPage/SignUp/SignUp";
import TestsPage from "../TestsPsge/TestsPage";
import TheTest from "../TheTest/TheTest";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="Layout">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testspage" element={<TestsPage />} />
        <Route path="/thetest" element={<TheTest />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/learning/:id" element={<Pages />} />
        <Route path="/games" element={<Games />}></Route>
        <Route path="/memorygame" element={<MemoryLayout />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
