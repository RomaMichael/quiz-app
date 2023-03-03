import * as React from "react";

import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

export default function LikesOnPost({ isLiked, post, like }) {
  return (
    <div className="like-button">
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          float: "right",
        }}
      >
        {!isLiked ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillLike
              style={{
                fontSize: "25px",
                color: "blue",
              }}
              onClick={() => like(post)}
            />
          </div>
        ) : (
          <AiOutlineLike
            style={{ fontSize: "25px" }}
            onClick={() => like(post)}
          />
        )}
      </button>
    </div>
  );
}
