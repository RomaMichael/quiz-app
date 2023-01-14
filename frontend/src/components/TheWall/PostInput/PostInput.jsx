import React from "react";
import "./PostInput.css";

export default function PostInput({
  setPostContent,
  postContent,
  sendNewPost,
}) {
  return (
    <div className="post-send">
      <input
        type="text"
        placeholder="Want to say something?"
        onChange={(e) => setPostContent(e.target.value)}
      />
      <button
        className={postContent.length > 0 ? "active" : "non-active"}
        onClick={sendNewPost}
        disabled={postContent.length === 0 ? true : false}
      >
        Send
      </button>
    </div>
  );
}
