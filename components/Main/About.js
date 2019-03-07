import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faGlobe,
  faPlaneArrival,
  faLock,
  faPlaneDeparture,
  faFlask,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";

library.add(faGlobe, faPlaneDeparture, faLock, faFlask, faSeedling);

let iconsAbout = {
  borderRadius: "50%",
  height: "70px",
  width: "70px",
  marginTop: "130px"
};

const About = props => {
  return (
    <div
      id="about"
      className="w-full relative pb-24 bg-white text-center text-grey"
    >
      <div className="inline-flex sm:inline-block sm:text-center xs:inline-block xs:text-center w-full pt-16 bg-blue-darkest">
        <div className="bg-yellow w-full inline-flex flex justify-center">
          <h2 className="uppercase p-4 md:text-xxl sm:text-lg xs:text-sm text-xxxl">
            About Seed Tracker Technology
          </h2>
          {/* BETA TAG */}
          <div className="bg-grey text-yellow text-3xl h-10 ml-4 mt-5 w-100 rounded-sm md:mt-2 sm:mt-3 sm:text-sm sm:h-4 sm:mx-auto sm:text-center xs:mt-3 xs:text-sm xs:h-4 xs:mx-auto xs:text-center">
            BETA
          </div>{" "}
        </div>
      </div>
      <p className="px-2 xxl:px-12 xxxl:px-12 inline-flex leading-normal mt-8 w-4/5 lg:w-7/8 md:w-7/8 sm:w-7/8 text-justify">
        Seed Tracker Technology is built for growers, by growers. We offer all
        our amazing brands the information that their customers want and need to
        become successful growers. STT is an industry leader in reliablity,
        providing a dependable service which customers know they can trust.
        Every authentic STT branded seed comes with a unique Seed Tracker
        identifier which provides information on where those seeds were produced
        and when they were packaged and harvested. If you are interested in
        becoming a more knowledgeable grower or want to provide your customers
        with the information they need to succeed look no further than Seed
        Tracker Technology.
      </p>
      <div className="px-2 md:px-6 sm:px-12 xs:px-6 xxl:px-12 xxxl:px-12 md:inline-flex lg:inline-flex xl:inline-flex xxl:inline-flex xxxl:inline-flex sm:flex-col  xs:flex-col mt-12 w-4/5 lg:w-7/8 md:w-full sm:w-full xs:w-full justify-around">
        <div className="w-300 lg:w-250 md:w-200 animate-icons xs:mt-4 xs:w-full sm:w-full sm:my-4 flex items-center justify-center flex-col shadow-md relative">
          <div
            style={{ background: "url('../../static/imgs/feature-img-2.jpg')", backgroundSize: "cover" }}
            className="h-48 w-full justify-center flex text-white items-center relative"
          >
            {" "}
          </div>
          <div
            style={iconsAbout}
            className="absolute bg-grey-light pin-y mt-20 justify-center items-center flex"
          >
            <FontAwesomeIcon
              icon={faGlobe}
              className="fa-2x text-grey text-center"
            />
          </div>
          <h4 className="pb-2 uppercase bg-grey text-white w-full pt-3">
            Track your Seeds
          </h4>

          <p className="mx-auto w-7/8 p-2">
            Ad nulla veniam non anim. Consequat dolore labore anim ipsum
            cupidatat duis ut sit ex tempor aliquip Lorem duis. Proident sint
            velit nulla ullamco.
          </p>
        </div>
        <div className="w-300 lg:w-250 md:w-200 animate-icons xs:mt-4 xs:w-full sm:w-full sm:my-4 flex items-center justify-center flex-col shadow-md relative">
          <div
            style={{ background: "url('../../static/imgs/feature-img-3.jpg')", backgroundSize: "cover" }}
            className="h-48 w-full justify-center flex text-white items-center relative"
          >
            {" "}
          </div>
          <div
            style={iconsAbout}
            className="absolute bg-grey-light pin-y mt-20 justify-center items-center flex"
          >
            <FontAwesomeIcon
              icon={faFlask}
              className="fa-2x text-grey text-center"
            />
          </div>
          <h4 className="pb-2 uppercase bg-grey text-white w-full pt-3">
            Germination Tests
          </h4>
          <p className="mx-auto w-7/8 p-2">
            Ad nulla veniam non anim. Consequat dolore labore anim ipsum
            cupidatat duis ut sit ex tempor aliquip Lorem duis. Proident sint
            velit nulla ullamco.
          </p>
        </div>
        <div className="w-300 lg:w-250 md:w-200 animate-icons xs:mt-4 xs:w-full sm:w-full sm:my-4 flex items-center justify-center flex-col shadow-md relative">
          <div
            style={{ background: "url('../../static/imgs/feature-img-1.jpg')", backgroundSize: "cover" }}
            className="h-48 w-full justify-center flex text-white items-center relative"
          >
            {""}
          </div>
          <div
            style={iconsAbout}
            className="absolute bg-grey-light pin-y mt-20 justify-center items-center flex"
          >
            <FontAwesomeIcon
              icon={faSeedling}
              className="fa-2x text-grey text-center"
            />
          </div>
          <h4 className="pb-2 uppercase bg-grey text-white w-full pt-3">
            Grow like a Pro!
          </h4>

          <p className="mx-auto w-7/8 p-2">
            Ad nulla veniam non anim. Consequat dolore labore anim ipsum
            cupidatat duis ut sit ex tempor aliquip Lorem duis. Proident sint
            velit nulla ullamco.
          </p>
        </div>
      </div>
      {/* <div className="absolute w-full h-2 bg-grey pin-y">{""}</div> */}
    </div>
  );
};

export default About;
