import React, { createContext, useContext, useState } from "react";

const linkContext = createContext();

export function LinkProvider({ children }) {
  const [link, setLink] = useState("/home");

  const value = { link, setLink };
  return <linkContext.Provider value={value}>{children}</linkContext.Provider>;
}

export function useLink() {
  return useContext(linkContext);
}
