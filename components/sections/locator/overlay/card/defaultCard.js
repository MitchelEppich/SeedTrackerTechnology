import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTree,
  faPlaneDeparture,
  faPlane,
  faBoxOpen,
  faEnvelope,
  faGlobe,
  faDesktop,
  faGlobeAmericas,
  faMobileAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { width } from "window-size";

import moment from "moment";
import gen from "random-seed";
import PercentageStrainGraphs from "./percentageStrainGraphs";
import StrainInfoGraphs from "./strainInfoGraphs";

const DefaultCard = props => {
  let marker = props.locations[props.currentInformation];
  if (marker == null) return <div />;

  let rand = gen.create(props.strain.seed);
  let locationAmount = props.locations.length - 1;
  // STT NUMBERS:
  // 4540720
  // 4521242
  // 4013420

  return (
    <div>
      <div className="absolute text-sm w-400 h-550 pin-b pin-l mb-12 ml-2 z-50 bg-white z-50">
        <div
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px"
          }}
          className="text-white flex mb-2"
        >
          {props.currentInformation == 0 ? (
            <div className="w-full p-2 sm:text-lg text-center">
              <h5 className="mt-2 w-100 mx-auto text-grey sm:text-lg text-center border-b-2 border-grey-dark pb-1">
                Origin:
              </h5>
              <h3 className="text-grey text-2xl uppercase p-1 sm:text-lg my-1 text-center animate-text">
                {marker.name}
              </h3>
            </div>
          ) : null}
          {props.currentInformation == 1 ? (
            <div className="w-full text-navy-blue p-2 sm:text-lg text-center">
              <h5 className="mt-2 w-100 mx-auto text-grey sm:text-lg text-center border-b-2 border-grey-dark pb-1">
                Company Seller:
              </h5>
              <h3 className="text-grey text-2xl uppercase p-1 sm:text-lg my-1 text-center animate-text">
                {marker.name}
              </h3>
            </div>
          ) : null}
          {props.currentInformation == 2 ? (
            <div className="w-full text-navy-blue p-2 sm:text-lg text-center">
              <h5 className="mt-2 w-100 mx-auto text-grey sm:text-lg text-center border-b-2 border-grey-dark pb-1">
                Destination:
              </h5>
              <h3 className="text-grey text-2xl uppercase p-1 sm:text-lg my-1 text-center animate-text">
                {marker.name}
              </h3>
            </div>
          ) : null}
          <div
            className="absolute pin-r pin-t cursor-pointer text-center h-10 w-10 py-3 hover:bg-grey hover:text-white float-right text-grey mr-1 mt-1"
            onClick={() => {
              props.closeAllHandler();
            }}
          >
            <FontAwesomeIcon icon={faTimes} className="fa-lg" />
          </div>
        </div>
        <div className="px-0">
          {props.currentInformation == 0 ? (
            <div className="px-1">
              <div className="bg-white">
                <h3 className="px-2 text-grey bg-yellow-dark text-center uppercase p-1 mb-1 ">
                  {props.strain.name}
                </h3>
                <div className="flex flex-wrap justify-around">
                  <div className="flex-col w-3col bg-grey-lightest shadow text-center my-1">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold uppercase">Type:</p>
                    </div>
                    <div className="w-full">
                      <p className="font-normal p-1">{props.strain.genetic}</p>
                    </div>
                  </div>
                  <div className="flex-col w-3col bg-grey-lightest shadow text-center my-1">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold uppercase">Avg. Yield:</p>
                    </div>
                    <div className="w-full">
                      <p className="font-normal p-2">
                        {props.strain.avgYield}g
                      </p>
                    </div>
                  </div>
                  <div className="flex-col w-3col bg-grey-lightest shadow text-center my-1">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold uppercase">Flower Time:</p>
                    </div>
                    <div className="w-full">
                      <p className="font-normal p-2">
                        {props.strain.flowerTime}
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-2 my-1 bg-grey-lightest">
                    <p className="font-bold text-center uppercase bg-grey-light p-1">
                      Levels:
                    </p>
                    <div className="inline-flex w-full flex justify-around">
                      <div style={{ width: "115px" }} className="p-2 w-150">
                        {" "}
                        <StrainInfoGraphs {...props} />
                      </div>
                      <div className="w-150 p-1 mt-1">
                        <p
                          style={{ background: "#546e79" }}
                          className="font-normal p-1 text-white mt-1"
                        >
                          TCH: {props.strain.pThc[0]} %
                        </p>
                        <p
                          style={{ background: "#d0d0d0" }}
                          className="font-normal p-1 mt-1"
                        >
                          CBN: {props.strain.pCbn[0]}%
                        </p>
                        <p
                          style={{ background: "#33434e" }}
                          className="font-normal p-1 text-white mt-1"
                        >
                          CBD: {props.strain.pCbd[0]}%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <PercentageStrainGraphs {...props} />
                  </div>
                </div>
              </div>
              <div className="mt-1 pb-2">
                <h3 className="px-2 text-grey uppercase bg-yellow-dark p-1 mb-1 text-center">
                  Germination Tests
                </h3>
                <div className="inline-flex w-full">
                  <div className="w-1/2 bg-white rounded mx-2 mt-2 shadow">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold text-center uppercase">
                        In House:{" "}
                      </p>
                    </div>
                    <div className="w-full mt-2 inline-flex">
                      <div className="w-4/5 p-1">
                        <div
                          style={{
                            width: "100%",
                            background: "#cecece",
                            height: "15px"
                          }}
                          className="w-4/5 relative rounded"
                        >
                          <p
                            style={{
                              width: props.strain.germ[2] + "%",
                              background: "#6783a2",
                              height: "15px"
                            }}
                            className="w-full rounded absolute"
                          />
                        </div>
                      </div>
                      <div className="ml-1">
                        <p className="font-normal py-1">
                          {props.strain.germ[2]}%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 bg-white rounded mx-2 mt-2 shadow">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold text-center uppercase">
                        30 days:{" "}
                      </p>
                    </div>
                    <div className="w-full mt-2 inline-flex">
                      <div className="w-4/5 p-1">
                        <div
                          style={{
                            width: "100%",
                            background: "#cecece",
                            height: "15px"
                          }}
                          className="w-4/5 relative rounded"
                        >
                          <p
                            style={{
                              width: props.strain.germ[0] + "%",
                              background: "#4a8882",
                              height: "15px"
                            }}
                            className="w-full rounded absolute"
                          />
                        </div>
                      </div>
                      <div className="ml-1">
                        <p className="font-normal py-1">
                          {props.strain.germ[0]}%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 bg-white rounded mx-2 mt-2 shadow">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold text-center uppercase">
                        45 days:{" "}
                      </p>
                    </div>
                    <div className="w-full mt-2 inline-flex">
                      <div className="w-4/5 p-1">
                        <div
                          style={{
                            width: "100%",
                            background: "#cecece",
                            height: "15px"
                          }}
                          className="w-4/5 relative rounded"
                        >
                          <p
                            style={{
                              width: props.strain.germ[1] + "%",
                              background: "#404042",
                              height: "15px"
                            }}
                            className="w-full rounded absolute"
                          />
                        </div>
                      </div>
                      <div className="ml-1">
                        <p className="font-normal py-1">
                          {props.strain.germ[1]}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {props.clientInfo.context != 2 ? (
                <div className="pb-0 pt-1 mt-1">
                  <h3 className="px-2 bg-yellow-dark text-grey text-center uppercase p-1 mb-1 ">
                    Details
                  </h3>
                  <div className="inline-flex w-full">
                    <div className="w-10 pl-4 justify-center flex items-center">
                      <FontAwesomeIcon icon={faTree} className="fa-lg ml-1" />
                    </div>
                    <div className="inline-flex w-full">
                      <div className="w-2/5">
                        <p className="font-bold pl-1">Harvest Date: </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal">{props.strain.date[0]}</p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex w-full mt-1">
                    <div className="w-10 pl-4 justify-center flex items-center">
                      <FontAwesomeIcon
                        icon={faPlaneDeparture}
                        className="fa-lg pl-1"
                      />{" "}
                    </div>
                    <div className="inline-flex w-full">
                      <div className="w-2/5">
                        <p className="font-bold pl-1">Departure Date: </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal">{props.strain.date[1]}</p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div />
          )}
          {props.currentInformation == 1 ? (
            <div className="pb-3 px-1">
              <h3 className="px-2 text-grey bg-yellow-dark text-center uppercase p-1 mb-1 ">
                Germination Tests
              </h3>
              <div className="w-4/5 mx-auto bg-white rounded mx-2 mt-2 shadow">
                <div className="w-full bg-grey-light text-grey p-1">
                  <p className="font-bold text-center uppercase">In house: </p>
                </div>
                <div className="w-full mt-2 inline-flex">
                  <div className="w-4/5 p-2">
                    <div
                      style={{
                        width: "100%",
                        background: "#cecece",
                        height: "15px"
                      }}
                      className="w-4/5 relative rounded"
                    >
                      <p
                        style={{
                          width: props.strain.germ[2] + "%",
                          background: "#6783a2",
                          height: "15px"
                        }}
                        className="w-full rounded absolute"
                      />
                    </div>
                  </div>
                  <div className="ml-1">
                    <p className="font-normal p-2">{props.strain.germ[2]}%</p>
                  </div>
                </div>
              </div>

              {props.strain.context != 1 ? (
                <div className="pb-3 pt-2 mt-2">
                  <h3 className="px-2 text-grey bg-yellow-dark text-center uppercase p-1 mb-1 ">
                    Details
                  </h3>
                  <div className="inline-flex w-full mt-1">
                    <div className="w-10 pl-4 justify-center flex items-center">
                      <FontAwesomeIcon
                        icon={faBoxOpen}
                        className="fa-lg pl-1"
                      />{" "}
                    </div>
                    <div className="inline-flex w-full">
                      <div className="w-1/3">
                        <p className="font-bold pl-1">Package Date: </p>
                      </div>
                      <div className="w-2/3">
                        <p className="font-normal pl-1">
                          {props.strain.date[2]}
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex w-full mt-1">
                    <div className="w-10 pl-4 justify-center flex items-center">
                      <FontAwesomeIcon icon={faPlane} className="fa-lg pl-1" />{" "}
                    </div>
                    <div className="inline-flex w-full">
                      <div className="w-1/3">
                        <p className="font-bold pl-1">Ship Date: </p>
                      </div>
                      <div className="w-2/3">
                        <p className="font-normal pl-1">
                          Approx. {props.strain.date[3]}
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pb-3 pt-2" />
              )}
              <h3 className="px-2 text-grey bg-yellow-dark text-center uppercase p-1 mb-1 mt-2">
                Get in Touch
              </h3>

              <div className="w-full">
                <div className="px-4 inline-flex bg-grey-light w-full">
                  <div className="w-1/5 text-grey p-1">
                    <p className="font-bold uppercase">Website:</p>
                  </div>
                  <div className="w-4/5 p-1">
                    <a
                      // href={marker.description.website}
                      target="blank"
                      className="text-grey"
                    >
                      http://www.
                      {/* {marker.description.website} */}
                    </a>
                  </div>
                </div>
                <div className="px-4 inline-flex bg-white w-full">
                  <div className="w-1/5 text-grey p-1">
                    <p className="font-bold uppercase">Phone:</p>
                  </div>
                  <div className="w-4/5 p-1 text-grey">
                    <a href={`tel:${marker.phone}`} className="text-grey">
                      {marker.phone}
                    </a>
                  </div>
                </div>
                <div className="px-4 inline-flex bg-grey-light w-full">
                  <div className="w-1/5 text-grey p-1">
                    <p className="font-bold uppercase">Email:</p>
                  </div>
                  <div className="w-4/5 p-1 text-grey">
                    <a href={`mailto: ${marker.email}`}>{marker.email}</a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div />
          )}
          {props.currentInformation == 2 ? (
            <div className="">
              <div className="pb-3 px-1">
                <h3 className="px-2 text-grey bg-yellow-dark text-center uppercase p-1 mb-1 ">
                  Your Details
                </h3>

                <div>
                  <div className="px-4 inline-flex bg-grey-light w-full">
                    <div className="w-2/5 text-grey p-1 inline-flex">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="fa-lg mr-2"
                      />{" "}
                      <p className="font-bold uppercase">Email:</p>
                    </div>
                    <div className="w-3/5 p-1 text-grey">
                      <p>{props.email}</p>
                    </div>
                  </div>
                  <div className="px-4 inline-flex bg-white w-full">
                    <div className="w-2/5 text-grey p-1 inline-flex">
                      <FontAwesomeIcon icon={faGlobe} className="fa-lg mr-2" />{" "}
                      <p className="font-bold">STT Number:</p>
                    </div>
                    <div className="w-3/5 p-1 text-grey">
                      <p>{props.number}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-32">
                <p className="text-center px-12 mb-6 mt-12">
                  Valuable information to make sure you have the best possible
                  genetics!
                </p>
                <p className="text-center px-12 mb-8">
                  Make sure all your seeds have an authentic STT Number before
                  your purchase to ensure you recieve quality seeds!
                </p>
                <h3 className="pb-1 px-12 text-center uppercase">
                  Thank you for using Seed Tracker Technology!
                </h3>
              </div>
            </div>
          ) : (
            <div />
          )}

          {props.clientInfo.context != 2 ? (
            <div
              style={{
                // position: "absolute",
                margin: "8px",
                width: "96%",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px"
              }}
              className="bg-white py-1 text-black inline-flex w-full sm:w-full sm:h-12 sm:pt-1 justify-around pin-b pin-l"
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="fa-2x text-grey hover:text-grey-darkest cursor-pointer animate-icons"
                onClick={() => {
                  if (props.currentInformation - 1 >= 0) {
                    props.toggleInfoSection(props.currentInformation - 1);
                  } else {
                    props.toggleInfoSection(locationAmount - 1);
                  }
                }}
              />
              <div
                style={{
                  borderLeft: "2px solid rgba(25, 25, 25, 0.69)",
                  height: "20px",
                  marginTop: "6px",
                  width: "3px"
                }}
              />
              <FontAwesomeIcon
                icon={faAngleRight}
                className="fa-2x text-grey hover:text-grey-darkest cursor-pointer animate-icons"
                onClick={() => {
                  if (props.currentInformation + 1 < locationAmount) {
                    props.toggleInfoSection(props.currentInformation + 1);
                  } else {
                    props.toggleInfoSection(0);
                  }
                }}
              />
            </div>
          ) : (
            <div className="mt-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
