import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const wallContext = createContext();

export function WallProvider({ children }) {
  const [wallContent, setWallContent] = useState([]);

  const fetchWallData = async () => {
    const response = await fetch("http://localhost:8006/wall");

    const data = await response.json();
    setWallContent(data);
  };

  useEffect(() => {
    fetchWallData();
  }, []);

  const createPost = async (formData) => {
    console.log(formData);
    await fetch("http://localhost:8006/wall/create-new", {
      method: "POST",
      body: formData,
    });
  };

  const value = {
    fetchWallData,
    wallContent,
    setWallContent,
    createPost,
  };

  return <wallContext.Provider value={value}>{children}</wallContext.Provider>;
}

export function useWallContent() {
  return useContext(wallContext);
}
