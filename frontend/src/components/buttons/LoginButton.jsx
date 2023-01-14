import React from "react";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <div>
      {" "}
      <Link to="/loginpage">
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "30px",
            width: "300px",
            height: "50px",
            fontSize: "20px",
            fontFamily: "700",
            textTransform: "uppercase",
          }}
        >
          Login
        </button>
      </Link>
    </div>
  );
}
