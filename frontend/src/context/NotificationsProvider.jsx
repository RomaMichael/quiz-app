import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { useUsers } from "./UserProvider";

const notificationContext = createContext({});

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const { user } = useUsers();

  const myNotifications = notifications.filter(
    (note) => note.reciever._id === user._id
  );

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const res = await fetch("http://localHost:8006/notifications");
    const data = await res.json();
    setNotifications(data);
  };

  const addNotification = async (notification) => {
    await fetch("http://localHost:8006/notifications/addNew", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notification),
    });
  };

  const updateNotification = async (notification) => {
    await fetch(
      `http://localHost:8006/notifications/update-notification/:${notification._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notification),
      }
    );
  };

  const value = {
    notifications,
    setNotifications,
    addNotification,
    fetchNotifications,
    myNotifications,
    updateNotification,
  };

  return (
    <notificationContext.Provider value={value}>
      {children}
    </notificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(notificationContext);
}
