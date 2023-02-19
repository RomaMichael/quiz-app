import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useUsers } from "./UserProvider";

const wallContext = createContext();

export function WallProvider({ children }) {
  const [wallContent, setWallContent] = useState([]);
  const { user, updateUser } = useUsers();

  const myContent = wallContent.filter(
    (post) => post.postAuthor._id === user._id
  );

  const fetchWallData = async () => {
    const response = await fetch("http://localhost:8006/wall");
    const data = await response.json();
    setWallContent(data);
  };

  useEffect(() => {
    const userContent = { ...user, myContent: myContent };
    updateUser(userContent);
  }, [wallContent]);

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

  const delPost = async (deleted) => {
    await fetch(`http://localhost:8006/wall/delete-post/${deleted._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const updatePost = async (post) => {
    await fetch(`http://localhost:8006/wall/update-post/${post._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    fetchWallData();
  };
  const likeOnPost = async (post) => {
    console.log(post);
    await fetch(`http://localhost:8006/wall/like-post/${post._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    fetchWallData();
  };

  const value = {
    fetchWallData,
    wallContent,
    setWallContent,
    createPost,
    delPost,
    updatePost,
    likeOnPost,
  };

  return <wallContext.Provider value={value}>{children}</wallContext.Provider>;
}

export function useWallContent() {
  return useContext(wallContext);
}
