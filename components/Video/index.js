import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

// let screen = window.innerWidth;
// console.log("test", screen )

const Video = props => {
  return (
    <div
      id="video"
      style={{ background: "#202020", marginTop: "80px" }}
      className="relative"
    >
      <div
        style={{
          marginBottom: "-3px",
          height: "650px",
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
        <div className="h-400 items-center flex justify-start w-600 flex-col">
          <h1 className="text-4xl shadow-md text-white pl-32 w-full mt-48 bg-almost-transparent p-4">
            <span className="text-3/5xl">Introducing the </span>Industry Leading
            System
          </h1>
          <p className="text-3xl pl-32 w-full mt-2 bg-almost-transparent uppercase text-white p-4 shadow-md">
            Seed Tracker Technology ®
          </p>
        </div>
        <div className="absolute pin-r pin-t mt-24 mr-24">
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
            style={{
              width: "800px",
              height: "100%",
              boxShadow: "2px 6px 11px rgba(10, 10, 10, 0.94)"
            }}
          >
            <source src="../../static/video/stt_1920.mp4" type="video/mp4" />
          </video>
          <div className="pin-r pin-t absolute mt-4 mr-2">
            <div
              onClick={e => {
                e.target.muted = !e.target.muted;
                props.toggleMuteVideo({ value: e.target.muted });
              }}
              className="w-12 h-12 text-center text-white opacity-50"
            >
              <FontAwesomeIcon
                icon={props.videoMuted ? faVolumeMute : faVolumeUp}
                className="fa-2x pb-1 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
