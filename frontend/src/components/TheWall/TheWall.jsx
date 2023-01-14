import React, { useState } from "react";
import { useUsers } from "../../context/UserProvider";
import { useWallContent } from "../../context/WallProvider";
import "./TheWall.css";
import moment from "moment";
import uuid4 from "uuid4";
import WallContent from "./WallContent/WallContent";
import PostInput from "./PostInput/PostInput";
import { useEffect } from "react";

export default function TheWall() {
  const { user, setUser, updateUser } = useUsers();
  const { wallContent, fetchWallData } = useWallContent();
  const [postContent, setPostContent] = useState("");

  const Data = new Date();
  const minutes =
    Data.getMinutes() > 9 ? Data.getMinutes() : `0${Data.getMinutes()}`;
  const hours = Data.getHours() > 9 ? Data.getHours() : `0${Data.getHours()}`;
  const currentTime = `${hours}:${minutes}`;
  const currentDate = moment().format("MMM Do YY");

  const newPost = {
    _id: uuid4(),
    currentTime,
    currentDate,
    postContent,
    user,
    likes: [],
  };

  

  const sendNewPost = async () => {
    await fetch("http://localhost:8006/wall/create-new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    fetchWallData();
    setUser((prev) => ({ ...prev, myContent: [...prev.myContent, newPost] }));
    updateUser(user);
  };

  return (
    <div className="the-wall">
      <div className="the-wall-container">
        <div className="post-send-container">
          <PostInput
            setPostContent={setPostContent}
            postContent={postContent}
            sendNewPost={sendNewPost}
          />
        </div>
        <div
          className="wall-content"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
            position: "relative",
            top: "100px",
            marginBottom: "150px",
          }}
        >
          <WallContent wallContent={wallContent} />
        </div>
      </div>
    </div>
  );
}
