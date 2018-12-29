import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

// let screen = window.innerWidth;
// console.log("test", screen )

const Video = props => {
  return (
    <div id="video" style={{ background: "#202020" }} className="">
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
          style={{ width: "90%", height: "100%" }}
        >
          <source src="../../static/video/stt_1920.mp4" type="video/mp4" />
        </video>
        <div
          // style={{ marginRight: "185px" }}
          className="pin-r pin-t absolute mt-4 sm:mr-12 xs:mr-8 mr-24 xxl:mr-48 xxxl:mr-64"
        >
          <div style={{ color: "#202020" }} className="w-12 h-12 text-center">
            <FontAwesomeIcon
              icon={props.videoMuted ? faVolumeMute : faVolumeUp}
              className="fa-2x mt-24 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
