import React from "react";

import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useUsers } from "../../context/UserProvider";

import "./UserProfile.css";

export default function UserProfile() {
  const { user } = useUsers();

  const myPosts = user.myContent;
  console.log(myPosts);

  const like = () => {};
  return (
    <div className="user-profile">
      <div className="user-profile-container">
        <div className="user-profile-title">
          <img src={user.avatar.url} alt={user.username} />
          <h1>Welcome to your profile, {user.username}!</h1>
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
            <div>
              {" "}
              {myPosts.map((post, i) => (
                <div key={post._id}>
                  <div
                    className="post-body"
                    style={{
                      backgroundColor: "white",
                      width: "400px",
                      minHeight: "200px",
                      borderRadius: "30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",

                      padding: "5px",
                    }}
                  >
                    <div
                      className="post-title"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="user-properties"
                        style={{ display: "flex", gap: "10px" }}
                      >
                        <img
                          src={post.user.avatar.url}
                          alt="avatar"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50px",
                          }}
                        />
                        <h4>{post.user.username}</h4>
                      </div>
                      <div
                        className="time-and-date"
                        style={{ display: "flex", width: "150px", gap: "15px" }}
                      >
                        <p>{post.currentDate}</p>
                        <p style={{ fontWeight: "700" }}>{post.currentTime}</p>
                      </div>
                    </div>
                    <div
                      className="message"
                      style={{
                        display: "flex",
                        justifyContent: "space-start",
                        width: "80%",
                        padding: "15px",
                      }}
                    >
                      {post.postContent}
                    </div>
                    <div
                      className="post-buttons"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {/* <button>Comment</button> */}
                      <button
                        onClick={like}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        {<AiOutlineLike style={{ fontSize: "25px" }} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
