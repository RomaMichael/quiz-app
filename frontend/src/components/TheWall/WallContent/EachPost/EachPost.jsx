import React from "react";
import "./EachPost.css";
import { useUsers } from "../../../../context/UserProvider";
import { useWallContent } from "../../../../context/WallProvider";
import LikesOnPost from "./LikeOnPost/LikesOnPost";
import AdminPostMenu from "../../../MUI/AdminPostMenu";
import UserPostMenu from "../../../MUI/UserPostMenu";
import { useTimeAndDate } from "../../../../context/TimeAndDateProvider";
import { Link } from "react-router-dom";
import { uuid4 } from "uuid4";
import { useNotifications } from "../../../../context/NotificationsProvider";

export default function EachPost({ post }) {
  const { user, updateUser, allOfUsers } = useUsers();
  const { delPost, setWallContent, wallContent, updatePost } = useWallContent();
  const { currentDate, currentTime } = useTimeAndDate();
  const { addNotification } = useNotifications();

  const userId = user._id;
  const deletePost = (deleted) => {
    const remainWallContent = wallContent.filter(
      (item) => item._id !== post._id
    );
    delPost(deleted);
    setWallContent(remainWallContent);

    if (user.role === "user") {
      const remainUserContent = user.myContent.filter(
        (item) => item._id !== post._id
      );
      const updatedUser = { ...user, myContent: remainUserContent };
      updateUser(updatedUser);
    }
    if (user.role === "admin") {
      const userAuthor = allOfUsers.find(
        (user) => user._id === post.postAuthor._id
      );

      const remainUserContent = userAuthor.myContent.filter(
        (item) => item._id !== post._id
      );
      const updatedUser = { ...userAuthor, myContent: remainUserContent };

      updateUser(updatedUser);
    }
  };
  const redactPost = (e) => {
    const updatedPost = { ...post, postContent: e };
    console.log(updatedPost);
    updatePost(updatedPost);
  };

  const like = (post) => {
    const likeIndex = user.likedPosts.findIndex(
      (like) => like._id === post._id
    );

    if (likeIndex !== -1) {
      return;
    }
    if (user._id !== post.postAuthor._id) {
      const messageToNotification = `${user.username} liked your post`;
      const notification = {
        _id: uuid4(),
        senderName: user.username,
        senderAvatar: user.avatar.url,
        currentTime: currentTime,
        currentDate: currentDate,
        content: post.postContent,
        reciever: post.postAuthor,
        seen: false,
        messageToNotification,
        newNotification: true,
      };
      addNotification(notification);
    }

    const likedPost = {
      ...post,
      likes: [...post.likes, user],
    };
    const userLiked = {
      ...user,
      likedPosts: [...user.likedPosts, post],
    };

    updatePost(likedPost);
    updateUser(userLiked);
  };

  const checkLike = (post) => {
    const index = user.likedPosts.findIndex((item) => item._id === post._id);

    if (index !== -1) {
      return false;
    } else {
      return true;
    }
  };

  const cancelLike = (postId) => {
    const { likedPosts, ...restOfUser } = user;
    const restOfPosts = likedPosts.filter(
      (likedPost) => likedPost._id !== postId
    );

    const updatedUser = { ...restOfUser, likedPosts: restOfPosts };

    updateUser(updatedUser);

    const removedLike = post.likes.filter(
      (userLiked) => userLiked._id !== user._id
    );

    const updatedPost = { ...post, likes: removedLike };

    updatePost(updatedPost);
  };

  const showLikes = () => {};

  return (
    <div className="post-body">
      <div
        className="post-title"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to={`/${post.postAuthor._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            className="user-properties"
            style={{ display: "flex", gap: "10px" }}
          >
            <img
              src={post.postAuthor.avatar}
              alt={post.postAuthor.username}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
              }}
            />
            <h4>{post.postAuthor.username}</h4>
          </div>
        </Link>
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
            <AdminPostMenu
              deletePost={deletePost}
              post={post}
              redactPost={redactPost}
            />
          ) : (
            <div>
              {" "}
              {post.postAuthor._id === userId ? (
                <UserPostMenu
                  deletePost={deletePost}
                  post={post}
                  redactPost={redactPost}
                />
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
        <LikesOnPost
          checkLike={checkLike}
          post={post}
          like={like}
          showLikes={showLikes}
          cancelLike={cancelLike}
        />
        <div>
          {" "}
          {post.likes.length ? (
            <div style={{ fontWeight: "700" }}>{post.likes.length}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
