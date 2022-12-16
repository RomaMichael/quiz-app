import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useLink } from "../../context/LinkProvider";
import Pages from "../../pages/Pages";
import Games from "../Games/Games";
import MemoryLayout from "../Games/MemoryCards/MemoryLayout/MemoryLayout";

import Home from "../Home/Home";

import Learning from "../Learning/Learning";
import TestsPage from "../TestsPsge/TestsPage";
import TheTest from "../TheTest/TheTest";
import "./Layout.css";

export default function Layout() {
  const navigate = useNavigate();

  const { link, setLink } = useLink();

  useEffect(() => {
    //navigate(link, { replace: true });
  }, [link]);
  return (
    <div className="Layout">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/testspage" element={<TestsPage />} />
        <Route path="/thetest" element={<TheTest />}></Route>
        <Route path="/learning" element={<Learning />}></Route>
        <Route path="/learning/:id" element={<Pages />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/memorygame" element={<MemoryLayout />}></Route>
      </Routes>
    </div>
  );
}
