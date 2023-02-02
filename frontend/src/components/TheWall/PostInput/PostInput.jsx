import React from "react";
import { useUsers } from "../../../context/UserProvider";
import "./PostInput.css";

export default function PostInput({
  setPostContent,
  postContent,
  sendNewPost,
}) {
  const { user } = useUsers();
  return (
    <div className="post-send">
      <img src={user.avatar.url} alt={user.username} />
      <input
        type="text"
        placeholder="Want to say something?"
        onChange={(e) => setPostContent(e.target.value)}
      />

      {/* <label htmlFor="file" style={{ border: "1px solid red" }}>
        <AiFillCamera />
        <input type="file" name="file" />
      </label> */}

      <button
        className={
          postContent.length > 0 ? "button-active" : "button-non-active"
        }
        onClick={sendNewPost}
        disabled={postContent.length === 0 ? true : false}
      >
        Send
      </button>
    </div>
  );
}
