import React, { useState } from "react";
import "./WallContent.css";
import PostInput from "../PostInput/PostInput";
import EachPost from "./EachPost/EachPost";
import { useUsers } from "../../../context/UserProvider";
import { useWallContent } from "../../../context/WallProvider";
import uuid4 from "uuid4";
import { useTimeAndDate } from "../../../context/TimeAndDateProvider";
import ResponsiveBests from "../MainPageSide/ResponsiveSection/ResponsiveBests";

export default function WallContent({}) {
  const { user, setUser, updateUser } = useUsers();
  const { wallContent, fetchWallData } = useWallContent();
  const [postContent, setPostContent] = useState("");
  const { currentDate, currentTime } = useTimeAndDate();
  const [showBests, setShowBests] = useState(false);

  const postAuthor = {
    username: user.username,
    avatar: user.avatar.url,
    _id: user._id,
  };

  const newPost = {
    _id: uuid4(),
    currentTime,
    currentDate,
    postContent,
    postAuthor,
    likes: [],
  };

  const sendNewPost = async () => {
    if (postContent) {
      await fetch("http://localhost:8006/wall/create-new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      const updatedUser = { ...user, myContent: [...user.myContent, newPost] };
      setUser(updatedUser);
      updateUser(updatedUser);
      fetchWallData();
    }
  };
  return (
    <div className="wallContent">
      <div className="mobile-only-button">
        <button
          className="show-best-players-responsive"
          onClick={() => setShowBests(!showBests)}
        >
          {showBests ? "Hide best players" : "Show best players"}
        </button>
        {showBests ? (
          <div className="responsive-best-players">
            <ResponsiveBests />
          </div>
        ) : null}
      </div>

      <div className="post-send-container">
        <PostInput
          setPostContent={setPostContent}
          postContent={postContent}
          sendNewPost={sendNewPost}
        />
      </div>
      <div className="posts">
        {wallContent
          .map(({ _id }) => <EachPost postId={_id} key={_id} />)
          .reverse()}
      </div>
    </div>
  );
}
