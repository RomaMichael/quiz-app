import React, { useContext, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const userContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ isLoggedIn: false });

  const regUser = async (formData) => {
    await fetch("http://localhost:8006/users/register", {
      method: "POST",
      body: formData,
    });
  };

  const value = {
    regUser,
    user,
    setUser,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export function useUsers() {
  return useContext(userContext);
}
