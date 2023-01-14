import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

import { useUsers } from "../../../../context/UserProvider";
import UpdatePostMenu from "../../../MUI/AdminPostMenu";
import UserPostMenu from "../../../MUI/UserPostMenu";

export default function EachPost({ post }) {
  const { user } = useUsers();

  const postAuthor = post.user._id;
  const userId = user._id;

  const delPost = () => {
    //  const remain = wallcontent...
  };
  return (
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
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{post.currentDate}</p>
          <p style={{ fontWeight: "700" }}>{post.currentTime}</p>
          {user.role === "admin" ? (
            <UpdatePostMenu delPost={delPost} />
          ) : (
            <div>
              {" "}
              {postAuthor === userId ? (
                <UserPostMenu delPost={delPost} />
              ) : null}
            </div>
          )}
        </div>
      </div>
      <div
        className="message"
        style={{
          display: "flex",
          justifyContent: "space-start",
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
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          {<AiOutlineLike style={{ fontSize: "25px" }} />}
        </button>
      </div>
    </div>
  );
}
