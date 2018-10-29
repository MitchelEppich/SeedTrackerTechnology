import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { width } from "window-size";

import gen from "random-seed";

library.add(faTimes);

const InfoSection = props => {
  let marker = props.locations[props.currentInformation];
  if (marker == null) return <div />;

  let rand = gen.create(props.seed);

  return (
    <div
      style={{ borderRadius: "2%" }}
      className="absolute bg-yellow w-400 pin-b pin-l mb-12 ml-2 z-50 p-2 sm:w-300"
    >
      <div className="flex mb-2">
        <span className="w-1/3">
          <img
            style={{ borderRadius: "2%" }}
            className="p-2 sm:w-24 sm:h-24"
            src={marker.description.imageUrl}
          />
        </span>
        <h2 className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
          {marker.name}
        </h2>
        <div
          className="cursor-pointer text-center h-10 w-10 pt-2 hover:bg-grey-darkest hover:text-white float-right"
          onClick={() => {
            props.closeAllHandler();
          }}
        >
          <FontAwesomeIcon icon={faTimes} className="fa-lg" />
        </div>
      </div>
      <hr
        style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
      />
      <div className="p-2">
        <div className="pb-1 pt-1">
          <h3 className="p-2 px-0">Details:</h3>
          <p>
            Departure Date:{" "}
            <span className="italic font-bold">
              {marker.description.dates["depart"]}
            </span>{" "}
          </p>
          <p>
            Harvest Date:{" "}
            <span className="italic font-bold">
              {marker.description.dates["harvest"]}
            </span>{" "}
          </p>
          <p>
            Package Date:{" "}
            <span className="italic font-bold">
              {marker.description.dates["package"]}
            </span>
          </p>
          <p>
            Ship Date:{" "}
            <span className="italic font-bold">
              Approx {marker.description.dates["ship"]}
            </span>
          </p>
        </div>
        <hr
          style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
        />
        <div className="pb-1 pt-1">
          <h3 className="p-2 px-0">Germination:</h3>
          <p>
            30 days:{" "}
            <span className="italic font-bold">
              {`${rand.floatBetween(89.0, 94.9).toFixed(1)}%`}
            </span>
          </p>
          <p>
            45 days:{" "}
            <span className="italic font-bold">
              {`${rand.floatBetween(89.0, 94.9).toFixed(1)}%`}
            </span>
          </p>
          <p>
            In house:{" "}
            <span className="italic font-bold">
              {`${rand.floatBetween(84, 95).toFixed(1)}%`}
            </span>
          </p>
          <p>
            Facts on Seeds:{" "}
            <span className="italic font-bold">Very powerfull</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
