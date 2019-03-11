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
  let markers = props.misc.locations;

  let showMarkers = () => {
    if (markers == null) return <div />;
    let index = 0;
    let arr = [];
    for (let marker of markers) {
      let $index = index;
      if (marker.name == null) continue;
      let _key = marker.type + $index;

      arr.push(
        <PigeonOverlay
          key={_key}
          anchor={marker.anchor}
          payload={_key}
          className="absolute z-20"
        >
          <div
            className="landmark-points absolute z-10"
            onClick={() => {
              console.log($index, typeof $index);
              props.setFocusLocation({
                index: props.misc.focusLocation == $index ? null : $index
              });
            }}
          />
          {props.misc.focusLocation == null ||
          props.misc.focusLocation == $index ? (
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          ) : null}
          <div className="info-landmark">
            <h4 className="text-navy-blue font-bold bg-yellow uppercase text-center p-2">
              {marker.name}
            </h4>
            <div
              className="mx-auto arrow-down absolute z-20"
              style={{ marginLeft: "89px" }}
            />
          </div>
        </PigeonOverlay>
      );
      index++;
    }
    return arr;
  };

  let showMarkerLines = () => {
    let speed = 3;

    if (markers == null || props.misc.clientInfo.context == 2) return <div />;
    let _orgins = (() => {
      let count = 0;
      for (let mark of markers) {
        if (mark.type == "origin") count++;
      }
      return count;
    })();

    let arr = [];
    let i;
    for (i = 0; i < _orgins; i++) {
      let _arr = [];
      _arr.push(markers[i].anchor);
      _arr.push(markers.slice(-2)[0].anchor);
      arr.push(
        <PigeonLine
          coordsArray={_arr}
          key={i}
          delay={i}
          speed={speed}
          {...props}
        />
      );
    }
    arr.push(
      <PigeonLine
        className="absolute"
        coordsArray={[markers.slice(-2)[0].anchor, markers.slice(-2)[1].anchor]}
        key={"Last"}
        speed={speed}
        delay={speed + i - 1}
        {...props}
      />
    );
    return arr;
  };

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
      {props.misc.error != null ? (
        <div className="bg-red">
          <p className="text-center text-white font-bold p-2">
            {props.misc.error}
          </p>
        </div>
      ) : null}
      {props.misc.searched ? (
        <div className="inline-flex mt-4 absolute">
          <button
            style={{ transition: "all 0.5s ease" }}
            className="h-10 bg-grey-darkest inline-flex z-40 ml-4 py-2 text-white text-lg px-6 font-bold hover:bg-grey-light hover:text-grey-darkest uppercase"
            onClick={() => {
              props.closeAllHandler();
              props.setSearched(false);
              props.setLocations(null);
              props.setFocusLocation({ index: null });
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
        animateMaxScreens={3}
        center={
          props.misc.focusLocation == null || props.misc.locations == null
            ? [0, 0]
            : props.misc.locations[props.misc.focusLocation].anchor
        }
        zoom={3}
        maxZoom={3}
        minZoom={3}
        metaWheelZoom={true}
        metaWheelZoomWarning={""}
      >
        {showMarkers()}
        {showMarkerLines()}
      </PigeonMap>

      {/* SHOW INFO SECTION */}
      {props.misc.focusLocation != null ? <Card {...props} /> : null}

      {/* COPYRIGHT ICON */}
      <div className="absolute inline-flex pin-b pin-r mb-6 mr-4">
        <div className="inline-flex h-12">
          {props.misc.showCopyright == true ? (
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
            onClick={() => {
              props.toggleCopyright();
            }}
          />
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <div className="absolute pin-b pin-l ml-2">
        {props.misc.locations
          ? Object.keys(props.misc.locations)
              .filter(key => {
                if (key >= props.misc.locations.length) return false;
                return true;
              })
              .map(index => {
                // let step = parseInt(key) + 1;
                return (
                  <button
                    style={{ transition: "all 0.5s ease" }}
                    className="bg-grey-darkest m-2 p-2 text-white hover:bg-grey-light hover:text-grey-darkest active:bg-green uppercase active:text-white "
                    key={index}
                    onClick={() => {
                      let $index = parseInt(index);
                      props.setFocusLocation({
                        index:
                          props.misc.focusLocation == $index ? null : $index
                      });
                    }}
                  >
                    {/* Step {step} - */}
                    {props.misc.locations[index].name}
                  </button>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default map;
