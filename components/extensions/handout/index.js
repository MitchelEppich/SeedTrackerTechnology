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
import PercentageStrainGraphs from "../../sections/locator/overlay/card/percentageStrainGraphs";
import StrainInfoGraphs from "../../sections/locator/overlay/card/strainInfoGraphs";

const handout = props => {
  let entry = props.misc.clientInfo;
  let strain = props.misc.strain;
  let company = props.misc.company;

  if (entry == null || strain == null || company == null) return null;

  // console.log(entry, strain, company);

  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "center",
        zIndex: "1",
        background: "white",
        fontSize: "14px"
      }}
      className="m-6 border-grey-light"
    >
      <div
        id="growCard"
        className="text-sm w-400 shadow-md pin-b pin-l pb-4 ml-2 bg-white z-50"
      >
        <div className="h-full">
          <div
            style={{
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px"
            }}
            className="text-white flex mb-2"
          />
          <div className="px-0">
            <div className="px-1">
              <div className="bg-white">
                <h3 className="px-2 text-grey bg-yellow-dark text-center uppercase p-1 mb-1 ">
                  {strain.name}
                </h3>
                <p className="px-2 text-grey text-center p-1 mb-1 text-xs">
                  <a
                    href={`http://${company.website}`}
                    target="_blank"
                    className="text-grey hover:text-yellow-dark"
                  >
                    by <span className="uppercase">{company.website}</span>
                  </a>
                </p>
                <div className="flex flex-wrap justify-around">
                  <div className="flex-col w-3col bg-grey-lightest shadow text-center my-1">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold uppercase">Type:</p>
                    </div>
                    <div className="w-full">
                      <p className="font-normal p-1">{strain.genetic}</p>
                    </div>
                  </div>
                  <div className="flex-col w-3col bg-grey-lightest shadow text-center my-1">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold uppercase">Avg. Yield:</p>
                    </div>
                    <div className="w-full">
                      <p className="font-normal p-2">{strain.avgYield}g</p>
                    </div>
                  </div>
                  <div className="flex-col w-3col bg-grey-lightest shadow text-center my-1">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold uppercase">Flower Time:</p>
                    </div>
                    <div className="w-full">
                      <p className="font-normal p-2">{strain.flowerTime}</p>
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
                      <div className="w-150 p-1 mt-2">
                        <p
                          style={{ background: "#546e79" }}
                          className="font-normal p-1 text-white mt-1"
                        >
                          THC: {strain.pThc[0]} %
                        </p>
                        <p
                          style={{ background: "#d0d0d0" }}
                          className="font-normal p-1 mt-1"
                        >
                          CBN: {strain.pCbn[0]}%
                        </p>
                        <p
                          style={{ background: "#33434e" }}
                          className="font-normal p-1 text-white mt-1"
                        >
                          CBD: {strain.pCbd[0]}%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <PercentageStrainGraphs {...props} />
                  </div>
                </div>
              </div>
              <div className="mt-1 pb-2 mt-6">
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
                              width: strain.germ[2] + "%",
                              background: "#6783a2",
                              height: "15px"
                            }}
                            className="w-full rounded absolute"
                          />
                        </div>
                      </div>
                      <div className="ml-1">
                        <p className="font-normal py-1">{strain.germ[2]}%</p>
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
                              width: strain.germ[0] + "%",
                              background: "#4a8882",
                              height: "15px"
                            }}
                            className="w-full rounded absolute"
                          />
                        </div>
                      </div>
                      <div className="ml-1">
                        <p className="font-normal py-1">{strain.germ[0]}%</p>
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
                              width: strain.germ[1] + "%",
                              background: "#404042",
                              height: "15px"
                            }}
                            className="w-full rounded absolute"
                          />
                        </div>
                      </div>
                      <div className="ml-1">
                        <p className="font-normal py-1">{strain.germ[1]}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {entry.context != 2 ? (
                <div className="pb-0 pt-1 mt-2">
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
                        <p className="font-normal">{strain.date[0]}</p>{" "}
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
                        <p className="font-normal">{strain.date[1]}</p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default handout;
