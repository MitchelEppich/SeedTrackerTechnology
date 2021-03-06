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

const MobileCard = props => {
  let marker = props.misc.locations[props.misc.focusLocation];
  if (marker == null) return <div />;

  let rand = gen.create(props.misc.strain.seed);
  let locationAmount = props.misc.locations.length;
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        left: "0",
        right: "0"
      }}
      className="absolute w-400 pin-b mb-12 ml-2 sm:mx-0 z-50 sm:w-7/8 sm:h-300 xs:h-300 xs:w-7/8 xs:text-sm sm:text-sm bg-white z-50"
    >
      {/* TABS 
    //////////////// ORIGIN ///////////////
    */}
      {marker.type == "origin" ? (
        <div
          style={{
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px"
          }}
          className="flex mb-1 justify-around cursor-pointer bg-grey-light"
        >
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 0
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(0);
            }}
          >
            Origin
          </div>
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 1
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(1);
            }}
          >
            Strain
          </div>
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 2
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(2);
            }}
          >
            Tests
          </div>
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 3
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(3);
            }}
          >
            Stats
          </div>
        </div>
      ) : null}

      {/* TABS 
    //////////////// COMPANY ///////////////
    */}

      {marker.type == "company" ? (
        <div
          style={{
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px"
          }}
          className="flex mb-1 bg-grey-light text-grey justify-around cursor-pointer"
        >
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 0
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(0);
            }}
          >
            Company
          </div>
          {props.misc.strain.context != 1 ? (
            <div
              className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
                props.misc.infoTab == 1
                  ? "bg-yellow-dark text-black"
                  : "hover:bg-yellow-dark hover:text-black"
              }`}
              onClick={() => {
                props.setInfoTab(1);
              }}
            >
              Details
            </div>
          ) : null}
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 3
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(3);
            }}
          >
            Contact
          </div>
        </div>
      ) : null}

      {/* TABS 
    //////////////// DESTINATION ///////////////
    */}
      {marker.type == null ? (
        <div
          style={{
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px"
          }}
          className="flex mb-1 bg-grey-light text-grey justify-around cursor-pointer"
        >
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 0
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(0);
            }}
          >
            Destination
          </div>
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 1
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(1);
            }}
          >
            Details
          </div>
          <div
            className={`inline-flex p-2 text-center uppercase hover:bg-yellow-dark hover:text-black ${
              props.misc.infoTab == 3
                ? "bg-yellow-dark text-black"
                : "hover:bg-yellow-dark hover:text-black"
            }`}
            onClick={() => {
              props.setInfoTab(3);
            }}
          >
            More
          </div>
        </div>
      ) : null}

      {/* COMPANY TAB */}
      {props.misc.infoTab == 0 ? (
        <div className="flex h-140 mb-2">
          {marker.type == "origin" ? (
            <div className="w-full text-navy-blue p-2 sm:text-lg text-center">
              <h5 className="mt-2 w-100 mx-auto text-grey sm:text-lg text-center border-b-2 border-grey-dark pb-1">
                Origin:
              </h5>
              <p className="text-grey text-2xl uppercase p-1 sm:text-lg my-1 text-center animate-text">
                {marker.name}
              </p>
            </div>
          ) : null}
          {marker.type == "company" ? (
            <div className="w-full text-navy-blue p-2 sm:text-lg text-center">
              <h5 className="mt-2 w-100 mx-auto text-grey sm:text-lg text-center border-b-2 border-grey-dark pb-1">
                Company:
              </h5>
              <p className="text-grey text-2xl uppercase p-1 sm:text-lg my-1 text-center animate-text">
                {marker.name}
              </p>
            </div>
          ) : null}
          {marker.type == null ? (
            <div className="w-full text-navy-blue p-2 sm:text-lg text-center">
              <h5 className="mt-2 w-100 mx-auto text-grey sm:text-lg text-center border-b-2 border-grey-dark pb-1">
                Destination:
              </h5>
              <p className="text-grey text-2xl uppercase p-1 sm:text-lg my-1 text-center animate-text">
                {marker.name}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
      {/* COMPANY TAB END */}

      {/* DETAILS TAB */}
      {props.misc.infoTab == 1 ? (
        <div className="flex px-2">
          {marker.type == "origin" && props.misc.strain.context != 1 ? (
            <div className="w-full px-2">
              <p className="p-1 uppercase text-center font-bold bg-yellow-dark">
                Details
              </p>

              <div className="inline-flex w-full mt-2">
                <div className="mx-2 w-1/2 shadow">
                  <p className="bg-grey-light p-1 text-center">Name:</p>
                  <p className="font-normal p-1 text-center">
                    {props.misc.strain.name}
                  </p>
                </div>
                <div className="mx-2 w-1/2 shadow">
                  <p className="bg-grey-light p-1 text-center">Type:</p>
                  <p className="font-normal p-1 text-center">
                    {props.misc.strain.genetic}
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full mt-2">
                <div className="mx-2 w-1/2 shadow">
                  <p className="bg-grey-light p-1 text-center">
                    Average Yield:
                  </p>
                  <p className="font-normal p-1 text-center">
                    {props.misc.strain.avgYield}g
                  </p>
                </div>

                <div className="mx-2 w-1/2 shadow">
                  <p className="bg-grey-light p-1 text-center">Flower Time:</p>
                  <p className="font-normal p-1 text-center">
                    {props.misc.strain.flowerTime}
                  </p>
                </div>
              </div>
              {props.misc.clientInfo.context != 2 ? (
                <div className="pb-1 pt-1 mt-4">
                  <div className="inline-flex w-full">
                    <div className="w-10 pl-4 justify-center flex items-center">
                      <FontAwesomeIcon icon={faTree} className="fa-lg ml-1" />
                    </div>
                    <div className="inline-flex w-full">
                      <div className="w-2/5">
                        <p className="font-bold pl-1">Harvest Date: </p>
                      </div>
                      <div className="w-3/5">
                        <p className="font-normal pl-4">
                          {props.misc.strain.date[0]}
                        </p>{" "}
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
                        <p className="font-normal pl-4">
                          {props.misc.strain.date[1]}
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* COMPANY INFORMATION - DETAILS */}
          {marker.type == "company" && props.misc.strain.context != 1 ? (
            <div className="pb-1 pt-1 w-full">
              <div className="w-full">
                <div className="w-full px-2">
                  <p className="font-bold text-center uppercase bg-yellow-dark p-1">
                    Germination Tests
                  </p>
                  <div className="w-full bg-white rounded mt-2 shadow">
                    <div className="w-full bg-grey-light text-grey p-1">
                      <p className="font-bold text-center uppercase">
                        In house:{" "}
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
                              width: props.misc.strain.germ[1] + "%",
                              background: "#6783a2",
                              height: "15px"
                            }}
                            className="w-full rounded absolute"
                          />
                        </div>
                      </div>
                      <div className="ml-1">
                        <p className="font-normal py-1">
                          {props.misc.strain.germ[2]}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex w-full mt-4">
                <div className="w-10 pl-4 justify-center flex items-center">
                  <FontAwesomeIcon icon={faTree} className="fa-lg ml-1" />
                </div>
                <div className="inline-flex w-full">
                  <div className="w-2/5">
                    <p className="font-bold pl-1">Package Date: </p>
                  </div>
                  <div className="w-3/5">
                    <p className="font-normal pl-4">
                      {props.misc.strain.date[2]}
                    </p>{" "}
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
                    <p className="font-bold pl-1">Ship Date: </p>
                  </div>
                  <div className="w-3/5">
                    <p className="font-normal pl-4">
                      {props.misc.strain.date[3]}
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {/* END COMPANY SECTION DETAIL */}

          {marker.type == null ? (
            <div className="w-full px-2">
              <div className="w-full">
                <p className="font-bold w-full text-center uppercase bg-yellow-dark p-1">
                  Your Details
                </p>
              </div>
              <div className="w-full mt-1 inline-flex">
                <div className="w-1/2 text-grey p-1 inline-flex">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 fa-lg" />{" "}
                  <p className="font-bold">Email:</p>
                </div>
                <div className="ml-1 w-1/2">
                  <p className="font-normal py-1">{props.misc.email}</p>
                </div>
              </div>
              <div className="w-full mt-1 inline-flex">
                <div className="w-1/2 text-grey p-1 inline-flex">
                  {" "}
                  <FontAwesomeIcon icon={faGlobe} className="mr-2 fa-lg" />{" "}
                  <p className="font-bold">STT Number:</p>
                </div>
                <div className="ml-1 w-1/2">
                  <p className="font-normal py-1">{props.misc.trackNumber}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      {/* DETAILS TAB END */}

      {/* TEST SECTION TAB */}
      {props.misc.infoTab == 2 ? (
        <div className="flex px-2">
          {marker.type == "origin" ? (
            <div className="pb-2 w-full px-2">
              <p className="font-bold text-center uppercase bg-yellow-dark p-1">
                Germination Tests
              </p>

              <div className="inline-flex w-full xs:flex-col">
                <div className="w-1/3 xs:w-full bg-white rounded xs:mx-0 mx-2 mt-2 shadow">
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
                            width: props.misc.strain.germ[2] + "%",
                            background: "#6783a2",
                            height: "15px"
                          }}
                          className="w-full rounded absolute"
                        />
                      </div>
                    </div>
                    <div className="ml-1">
                      <p className="font-normal py-1">
                        {props.misc.strain.germ[2]}%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 xs:w-full bg-white rounded mx-2 xs:mx-0 mt-2 shadow">
                  <div className="w-full bg-grey-light text-grey p-1">
                    <p className="font-bold text-center uppercase">30 days: </p>
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
                            width: props.misc.strain.germ[0] + "%",
                            background: "#4a8882",
                            height: "15px"
                          }}
                          className="w-full rounded absolute"
                        />
                      </div>
                    </div>
                    <div className="ml-1">
                      <p className="font-normal py-1">
                        {props.misc.strain.germ[0]}%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 xs:w-full bg-white rounded mx-2 xs:mx-0 mt-2 shadow">
                  <div className="w-full bg-grey-light text-grey p-1">
                    <p className="font-bold text-center uppercase">45 days: </p>
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
                            width: props.misc.strain.germ[1] + "%",
                            background: "#404042",
                            height: "15px"
                          }}
                          className="w-full rounded absolute"
                        />
                      </div>
                    </div>
                    <div className="ml-1">
                      <p className="font-normal py-1">
                        {props.misc.strain.germ[1]}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      {/* TEST SECTION TAB END */}

      {/* SOCIAL MEDIA TAB */}
      {props.misc.infoTab == 3 ? (
        <div className="flex px-2">
          {marker.type == "origin" ? (
            <div className="pb-1 w-full">
              <div className="w-full px-2 bg-grey-lightest">
                <div>
                  <p className="font-bold text-center uppercase bg-yellow-dark p-1">
                    Levels:
                  </p>
                </div>
                <div className="inline-flex w-full sm:flex-col xs:flex-col">
                  <div className="inline-flex w-full flex justify-around">
                    <div style={{ width: "115px" }} className="p-1 mt-1 w-150">
                      {" "}
                      <StrainInfoGraphs {...props} />
                    </div>
                    <div className="w-150 mt-4">
                      <p
                        style={{ background: "#546e79" }}
                        className="font-normal p-1 text-white mt-1"
                      >
                        THC: {props.misc.strain.pThc[0]} %
                      </p>
                      <p
                        style={{ background: "#d0d0d0" }}
                        className="font-normal p-1 mt-1"
                      >
                        CBN: {props.misc.strain.pCbn[0]}%
                      </p>
                      <p
                        style={{ background: "#33434e" }}
                        className="font-normal p-1 text-white mt-1"
                      >
                        CBD: {props.misc.strain.pCbd[0]}%
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <PercentageStrainGraphs {...props} />
                  </div>{" "}
                </div>
              </div>
            </div>
          ) : null}
          {marker.type == "company" ? (
            <div className="pb-1 pt-1 w-full px-2">
              <p className="font-bold text-center uppercase bg-yellow-dark p-1">
                Contact
              </p>
              <div className="w-full mt-4 px-2">
                <div className="inline-flex w-full">
                  <div className="w-1/2">
                    <p className="inline-flex font-bold">
                      <FontAwesomeIcon
                        icon={faGlobeAmericas}
                        className="fa-lg mr-1"
                      />
                      <p className="font-bold text-grey-darkest">Website:</p>
                    </p>
                  </div>
                  <div className="w-1/2">
                    <a
                      className="text-grey-darkest"
                      href={`http://${props.misc.company.website}`}
                      target="_blank"
                    >
                      {props.misc.company.website}
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full mt-4 px-2">
                <div className="inline-flex w-full">
                  <div className="w-1/2">
                    <p className="inline-flex font-bold">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="fa-lg mx-1"
                      />
                      <a
                        className="font-bold ml-1 text-grey"
                        href={`tel:${props.misc.company.phone}`}
                      >
                        Phone:
                      </a>
                    </p>
                  </div>
                  <div className="w-1/2">{props.misc.company.phone}</div>
                </div>
              </div>
              <div className="w-full mt-4 px-2">
                <div className="inline-flex w-full">
                  <div className="w-1/2">
                    <p className="inline-flex font-bold">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="fa-lg mr-1"
                      />
                      <a
                        className="font-bold text-grey-darkest"
                        href={`mailto: ${props.misc.company.email}`}
                      >
                        Email:
                      </a>
                    </p>
                  </div>
                  <div className="w-1/2">{props.misc.company.email}</div>
                </div>
              </div>
            </div>
          ) : null}

          {marker.type == null ? (
            <span className="pb-1 pt-1">
              <p className="text-center px-2 mb-2 mt-4">
                Valuable information to make sure you have the best possible
                genetics!
              </p>
              <p className="text-center px-2 mb-2 pt-4">
                Make sure all your seeds have an authentic STT Number before
                your purchase to ensure you recieve quality seeds!
              </p>
              <h3 className="pb-1 px-2 text-center uppercase pt-4 xs:text-sm">
                Thank you for using Seed Tracker Technology!
              </h3>
            </span>
          ) : null}
        </div>
      ) : null}
      {/* SOCIAL MEDIA TAB END */}

      {props.misc.clientInfo.context != 2 ? (
        <div
          style={{
            width: "96%",
            height: "35px",
            margin: "8px",
            borderBottomLeftRadius: "3px",
            borderBottomRightRadius: "3px"
          }}
          className="absolute inline-flex sm:w-full justify-around bg-white text-grey pin-b pin-l"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="fa-2x hover:text-grey-darkest mt-1 cursor-pointer animate-icons"
            onClick={() => {
              let index = props.misc.focusLocation - 1;
              if (index < 0) index = locationAmount - 1;
              props.setFocusLocation({
                index
              });
            }}
          />
          <div
            style={{
              borderLeft: "2px solid rgba(4, 4, 4, 0.69)",
              height: "20px",
              width: "3px",
              marginTop: "9px"
            }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="fa-2x hover:text-grey-darkest mt-1 cursor-pointer animate-icons"
            onClick={() => {
              let index = props.misc.focusLocation + 1;
              if (index > locationAmount - 1) index = 0;
              props.setFocusLocation({
                index
              });
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default MobileCard;
