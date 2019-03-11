import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faFlask,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";

let iconsAbout = {
  borderRadius: "50%",
  height: "70px",
  width: "70px",
  marginTop: "130px"
};

const tab = props => {
  return (
    <div className="w-300 lg:w-250 md:w-200 animate-icons xs:mt-8 sm:mt-6 xs:w-full sm:w-full sm:my-4 flex items-center justify-center flex-col shadow-md relative">
      <div
        style={{
          background: "url(" + props.image + ")",
          backgroundSize: "cover"
        }}
        className="h-48 w-full justify-center flex text-white items-center relative"
      >
        {" "}
      </div>
      <div
        style={iconsAbout}
        className="absolute bg-grey-light pin-y mt-20 justify-center items-center flex"
      >
        <FontAwesomeIcon
          icon={props.icon}
          className="fa-2x text-grey text-center"
        />
      </div>
      <h4 className="pb-2 uppercase bg-grey text-white w-full pt-3">
        {props.title}
      </h4>

      <p className="mx-auto w-7/8 p-2">{props.text}</p>
    </div>
  );
};

export default tab;
