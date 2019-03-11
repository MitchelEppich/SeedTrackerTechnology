import React from "react";

import Title from "./title";
import Video from "./video";

const main = props => {
  return (
    <div id="video">
      <div style={{ height: "80px", backgroundColor: "#0E1112" }} />
      <div style={{ background: "#202020" }} className="relative">
        <div
          className="h-700 lg:h-500px md:h-600 sm:h-550 xs:h-400"
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
    </div>
  );
};

export default main;
