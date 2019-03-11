import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const video = props => {
  return (
    <div className="absolute pin-r mt-24 lg:mt-32 md:mt-48 sm:mt-48 xs:mt-48 pin-t mr-24 xl:mr-12 lg:mr-8 md:mx-8 sm:mx-6 xs:mx-4 justify-center text-center items-center flex">
      <video
        className="overflow-hidden xxxl:w-900 xxl:w-900 xl:w-700 lg:w-500px md:w-full sm:w-full xs:w-full"
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
            icon={props.misc.videoMuted ? faVolumeMute : faVolumeUp}
            className="fa-2x pb-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default video;
