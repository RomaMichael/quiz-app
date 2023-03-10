import React, { useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const userContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ isLoggedIn: false });
  const [allOfUsers, setAllOfUsers] = useState([]);

  const navigate = useNavigate();

  const checkAuth = async () => {
    const response = await fetch("http://localhost:8006/users/check-auth", {
      credentials: "include",
    });

    const user = await response.json();

    if (user.username) {
      setUser({ ...user, isLoggedIn: true });
    } else {
      setUser({ ...user, isLoggedIn: false });
    }
  };
  useEffect(() => {
    checkAuth();
    allUsers();
  }, []);

  const login = async (credentials) => {
    const response = await fetch("http://localhost:8006/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include",
    });
    const userAuth = await response.json();

    if (response.status === 200) {
      setUser({ ...userAuth, isLoggedIn: true });
    }
  };

  const logout = async () => {
    const response = await fetch("http://localhost:8006/users/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.status === 200) {
      setUser({ ...user, isLoggedIn: false });
    }
    navigate("/", { replace: true });
  };

  const updateUser = useCallback(async (user) => {
    await fetch(`http://localhost:8006/users/update-user/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    setUser(user);
  }, []);

  const allUsers = async () => {
    try {
      const usersFromApi = await fetch("http://localhost:8006/users");
      const fetchUsers = await usersFromApi.json();

      setAllOfUsers(fetchUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const bestUserTotal = allOfUsers.sort((a, b) => {
    return Number(b.testsScore) - Number(a.testsScore);
  });

  const bestTestsResult = bestUserTotal[0];

  const sortPlayers = allOfUsers.sort((a, b) => {
    return Number(a.memoryGameRecord) - Number(b.memoryGameRecord);
  });

  const bestMemoryPlayer = sortPlayers[0];

  const value = {
    user,
    setAllOfUsers,
    setUser,
    logout,
    updateUser,
    login,
    bestTestsResult,
    bestMemoryPlayer,
    allUsers,
    allOfUsers,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export function useUsers() {
  return useContext(userContext);
}
