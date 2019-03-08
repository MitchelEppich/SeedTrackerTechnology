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

  console.log(markers, props);

  let showMarkers = () => {
    if (markers == null) return <div />;
    let index = 0;
    let arr = [];
    for (let marker of markers) {
      if (marker.name == null) continue;
      let _key = marker.type + index;

      arr.push(
        <PigeonOverlay key={_key} anchor={marker.anchor} payload={_key}>
          <div
            className="landmark-points"
            onClick={() => {
              props.toggleInfoSection(_key);
            }}
          />
          <div className="lds-ripple">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="info-landmark">
            <h4 className="text-navy-blue font-bold bg-yellow uppercase text-center p-2">
              {marker.name}
            </h4>
            <div className="mx-auto arrow-down" />
          </div>
          {/* {props.currentLocation == index ? (
              <div className="info-landmark">
                <h4 className="text-navy-blue font-bold bg-yellow uppercase text-center p-2">
                  {marker.name}
                </h4>
                <div className="mx-auto arrow-down" />
              </div>
            ) : null} */}
        </PigeonOverlay>
      );
      index++;
    }
    return arr;
  };

  let showMarkerLines = () => {
    /* {markers != null ? (
          <PigeonLine coordsArray={markers.map(marker => marker.anchor)} />
        ) : null} */

    if (markers == null) return <div />;
    let _orgins = (() => {
      let count = 0;
      for (let mark of markers) {
        if (mark.type == "origin") count++;
      }
      return count;
    })();

    let arr = [];
    for (let i = 0; i < _orgins; i++) {
      let _arr = [];
      _arr.push(markers[i].anchor);
      _arr.push(markers.slice(-2)[0].anchor);
      _arr.push(markers.slice(-2)[1].anchor);
      arr.push(<PigeonLine coordsArray={_arr} key={i} />);
    }
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
        {showMarkers()}
        {showMarkerLines()}
      </PigeonMap>
    </div>
  );
};

export default map;
