import React, { Fragment } from "react";
import "./WallContent.css";

import EachPost from "./EachPost/EachPost";

export default function WallContent({ wallContent }) {
  return (
    <Fragment>
      {wallContent
        .map((post) => <EachPost post={post} key={post._id} />)
        .reverse()}
    </Fragment>
  );
}
