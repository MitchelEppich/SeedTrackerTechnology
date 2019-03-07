import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faInfo,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import PigeonMap from "../../../extensions/pigeon/map";
import PigeonLine from "../../../extensions/pigeon/line";
import PigeonOverlay from "pigeon-overlay";
import Card from "../overlay/card";

library.add(faPlus, faMinus, faInfo);

const map = props => {
  let markers = props.locations;

  const showMarkers =
    markers != null
      ? markers.map((marker, index) => {
          if (index == markers.length - 1) return null;
          return (
            <PigeonOverlay key={index} anchor={marker.anchor} payload={index}>
              <div
                className="landmark-points"
                onClick={() => {
                  if (marker.description)
                    props.toggleInfoSection(
                      props.currentInformation == index ? -1 : index
                    );
                }}
              />
              <div className="lds-ripple">
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              {props.currentLocation == index ? (
                <div className="info-landmark">
                  <h4 className="text-navy-blue font-bold bg-yellow uppercase text-center p-2">
                    {marker.name}
                  </h4>
                  <div className="mx-auto arrow-down" />
                </div>
              ) : null}
            </PigeonOverlay>
          );
        })
      : null;

  return (
    <div
      id="stt"
      style={{
        height: "90.5vh",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div className="bg-yellow w-full">
        <h2 className="uppercase text-center p-4 md:text-xxl sm:text-lg xs:text-sm text-grey text-xxl">
          Track now your Seed
        </h2>
      </div>
      {props.error != null ? (
        <div className="bg-red">
          <p className="text-center text-white font-bold p-2">{props.error}</p>
        </div>
      ) : null}
      {props.searched ? (
        <div className="inline-flex mt-4 absolute">
          <button
            style={{ transition: "all 0.5s ease" }}
            className="h-10 bg-grey-darkest inline-flex z-40 ml-4 py-2 text-white text-lg px-6 font-bold hover:bg-grey-light hover:text-grey-darkest uppercase"
            onClick={() => {
              props.closeAllHandler();
              props.search(false);
              props.setLocations(null);
            }}
          >
            Search Again
          </button>
        </div>
      ) : (
        <div />
      )}

      {/* MAP API */}
      <PigeonMap
        limitBounds="edge"
        animateMaxScreens={9}
        center={
          props.locations == null
            ? [0, 0]
            : props.currentInformation != -1
            ? props.locations[props.currentInformation].anchor
            : [38.927, -11.877]
        }
        zoom={props.currentInformation != -1 ? 4 : 3}
        maxZoom={11}
        minZoom={3}
        metaWheelZoom={true}
        metaWheelZoomWarning={
          "Keep Pressing Window key or CMD button to Scroll"
        }
      >
        {showMarkers}

        {markers != null ? (
          <PigeonLine coordsArray={markers.map(marker => marker.anchor)} />
        ) : null}
      </PigeonMap>

      {/* SHOW INFO SECTION */}
      {props.currentInformation != -1 ? <Card {...props} /> : null}

      {/* COPYRIGHT ICON */}
      <div className="absolute inline-flex pin-b pin-r mb-6 mr-4">
        <div className="inline-flex h-12">
          {props.showCopyright == true ? (
            <div className="inline-flex">
              <div className="bg-black rounded w-200 h-12">
                <h4 className="text-center p-2 py-4 mr-1 text-sm text-white">
                  © Copyright 2018 | SST
                </h4>
              </div>
              <div className="arrow-right" />
            </div>
          ) : (
            <div />
          )}
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="fa-2x h-12 text-yellow cursor-pointer"
            onMouseEnter={() => {
              props.toggleCopyright();
            }}
            onClick={() => {
              props.toggleCopyright();
            }}
          />
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <div className="absolute pin-b pin-l ml-2">
        {props.locations
          ? Object.keys(props.locations)
              .filter(key => {
                if (key >= props.locations.length - 1) return false;
                return true;
              })
              .map(key => {
                // let step = parseInt(key) + 1;
                return (
                  <button
                    style={{ transition: "all 0.5s ease" }}
                    className="bg-grey-darkest m-2 p-2 text-white hover:bg-grey-light hover:text-grey-darkest active:bg-green uppercase active:text-white "
                    key={key}
                    onClick={() => {
                      props.toggleInfoSection(
                        props.currentInformation == key ? -1 : key
                      );
                    }}
                  >
                    {/* Step {step} - */}
                    {props.locations[key].name}
                  </button>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default map;