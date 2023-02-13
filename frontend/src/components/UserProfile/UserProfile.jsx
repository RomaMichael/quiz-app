import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../../context/UserProvider";
import { useWallContent } from "../../context/WallProvider";
import EachPost from "../TheWall/WallContent/EachPost/EachPost";
import "./UserProfile.css";

export default function UserProfile() {
  const { allOfUsers, allUsers } = useUsers();
  const {} = useWallContent();

  useEffect(() => {
    allUsers();
  }, []);

  const { id } = useParams();

  const currentUser = allOfUsers.find((user) => user._id === id);
  console.log(currentUser);
  const myPosts = currentUser.myContent.reverse();

  console.log(myPosts);

  return (
    <div className="user-profile">
      <div className="user-profile-container">
        <div className="user-profile-title">
          <img src={currentUser.avatar.url} alt={currentUser.username} />
          <h1>Welcome to your profile, {currentUser.username}!</h1>
        </div>
        <div
          className="my-wall"
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
          {myPosts.length > 0 ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {" "}
              {myPosts.map((post, i) => (
                <div key={post._id}>
                  <EachPost post={post} />
                </div>
              ))}{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
