import React from "react";

export default function Notification({ notification }) {
  const seeNotification = () => {
    // const notificationUpdate = { ...notification, seen: true };
  };

  return (
    <div
      style={{
        height: "100px",
        width: "300px",
        padding: "2px",
        display: "flex",
        border: "1px solid black",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        backgroundColor: notification.newNotification ? "#50C878" : "white",
      }}
      onClick={seeNotification}
    >
      <img
        src={notification.senderAvatar}
        alt={notification.sederName}
        style={{ width: "60px", height: "60px", borderRadius: "50px" }}
      />
      <p>
        {notification.messageToNotification}: "{notification.content}"
      </p>
    </div>
  );
}
