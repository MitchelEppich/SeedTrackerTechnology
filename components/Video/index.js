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
        <div className="h-400 items-center flex justify-start w-600 xl:w-600 lg:w-500px md:w-4/5 sm:w-4/5 xs:w-4/5 flex-col">
          <h1 className="text-4xl xl:text-3/5xl md:text-3xl sm:text-2xl xs:text-2xl shadow-md text-white pl-32 xl:pl-16 lg:pl-16 md:pl-8 sm:pl-8 xs:pl-8 w-full mt-48 lg:mt-32 md:mt-8 sm:mt-8 xs:mt-8 bg-almost-transparent p-4">
            Introducing the Industry Leading System
          </h1>
          <p className="text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl pl-32 xl:pl-16 lg:pl-16 md:pl-8 sm:pl-8 xs:pl-8 w-full mt-2 bg-almost-transparent uppercase text-white p-4 xl:p-3 md:p-3 sm:p-3 xs:p-3 shadow-md">
            Seed Tracker Technology 
          </p>
        </div>
        <div className="absolute pin-r mt-24 lg:mt-32 md:mt-48 sm:mt-48 xs:mt-64 pin-t  mr-24 xl:mr-12 lg:mr-8 md:mr-32 sm:mr-20 xs:mr-12">
          <video
            className="overflow-hidden xxxl:w-900 xxl:w-900 xl:w-700 lg:w-500px md:w-500px sm:w-400 xs:w-250"
            loop
            muted
            id="videoTag"
            autoPlay
            onClick={e => {
              e.target.muted = !e.target.muted;
              props.toggleMuteVideo({ value: e.target.muted });
            }}
            style={{
              height: "100%",
              boxShadow: "2px 6px 11px rgba(10, 10, 10, 0.94)"
            }}
          >
            <source
              src="../../static/video/stt_1920.mp4"
              type="video/mp4"
              className=""
            />
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
