import React, { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const learningContext = createContext();

export function LearningProvider({ children }) {
  const [learningData, setLearningData] = useState([]);

  useEffect(() => {
    fetchLearning();
  }, []);

  const fetchLearning = async () => {
    try {
      const res = await fetch("http://localhost:8006/learning");
      const data = await res.json();
      setLearningData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    learningData,
    setLearningData,
  };
  return (
    <learningContext.Provider value={value}>
      {children}
    </learningContext.Provider>
  );
}

export function useLearning() {
  return useContext(learningContext);
}
