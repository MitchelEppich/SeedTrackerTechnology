import React from "react";

import Title from "./title";
import Video from "./video";

const main = props => {
  return (
    <div
      id="video"
      style={{ background: "#202020", marginTop: "80px" }}
      className="relative"
    >
      <div
        className="h-700 md:h-450 sm:h-450 xs:h-450"
        style={{
          marginBottom: "-3px",
          overflow: "hidden"
        }}
      >
        <video
          className="overflow-hidden"
          loop
          muted
          id="videoTag"
          autoPlay
          style={{
            width: "100%",
            objectFit: "cover"
          }}
        >
          <source src="../../static/video/mainvideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="h-full w-full bg-almost-grey absolute pin-t justify-between">
        <Title {...props} />
        <Video {...props} />
      </div>
    </div>
  );
};

export default main;
