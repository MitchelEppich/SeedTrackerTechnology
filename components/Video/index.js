import React from "react";

// let screen = window.innerWidth;
// console.log("test", screen )

const Video = props => {
  return (
    <div id="video" style={{}} className="bg-yellow">
      <div
        style={{ marginTop: "80px", marginLeft: "12%", marginBottom: "-3px" }}
      >
        <video
          className="overflow-hidden"
          loop
          muted
          id="videoTag"
          autoPlay
          onClick={e => {
            e.target.muted = !e.target.muted;
            props.toggleMuteVideo({ value: e.target.muted });
          }}
          style={{ width: "85%" }}
        >
          {}
          {/* {screen.innerWidth > 650 ? (          */}
          <source src="../../static/video/stt_1920.mp4" type="video/mp4" />
          {/* ):            
                    (<source src="../../static/video/stt_360.mp4" type="video/mp4"></source>) } */}
        </video>
        <div style={{ position: "absolute" }}>
          {props.videoMuted ? "MUTED" : "Not"}
        </div>
      </div>
    </div>
  );
};

export default Video;
