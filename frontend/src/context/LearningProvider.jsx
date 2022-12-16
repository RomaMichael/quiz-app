import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import LearningData from "../quizapp/learning.json";

const learningContext = createContext();

export function LearningProvider({ children }) {
  const [learningData, setLearningData] = useState(LearningData);

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
