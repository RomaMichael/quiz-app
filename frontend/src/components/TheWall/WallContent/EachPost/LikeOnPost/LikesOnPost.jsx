import * as React from "react";
import { useEffect } from "react";

import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

export default function LikesOnPost({
  checkLike,
  post,
  like,
  showLikes,
  cancelLike,
}) {
  return (
    <div className="like-button">
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          float: "right",
        }}
      >
        {checkLike(post) ? (
          <AiOutlineLike
            style={{ fontSize: "25px" }}
            onClick={() => like(post)}
            onMouseOver={() => showLikes()}
          />
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <AiFillLike
              style={{
                fontSize: "25px",

                color: "blue",
              }}
              onClick={() => cancelLike(post._id)}
              onMouseOver={() => showLikes()}
            />
          </div>
        )}
      </button>
    </div>
  );
}
