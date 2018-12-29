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

const About = props => {
  return (
    <div
      id="about"
      className="w-full py-24 md:py-12 sm:py-12 xs:py-12 bg-grey-darkest text-center text-white"
    >
      <div className="inline-flex sm:inline-block sm:text-center xs:inline-block xs:text-center">
      <div>
        <h2
          style={{
            // fontSize: "45px",
            // color: "rgba(165, 165, 165, 0.62)",
            padding: "10px"
          }}
          className="text-yellow uppercase md:text-xxl sm:text-lg xs:text-sm text-big"
        >
          About Seed Tracker Technology
        </h2>
      </div>
        {/* BETA TAG */}
        <div className="bg-yellow text-grey-darker text-3xl h-10 ml-4 mt-5 w-100 rounded-sm md:mt-2 sm:mt-3 sm:text-sm sm:h-4 sm:mx-auto sm:text-center xs:mt-3 xs:text-sm xs:h-4 xs:mx-auto xs:text-center">
          BETA
        </div>
      </div>
      <p className="sm:px-2 px-12 inline-flex leading-normal mt-4 w-4/5 xs:px-2 text-center text-center">
        Seed Tracker Technology is built for growers, by growers. We offer all
        our amazing brands the information that their customers want and need to
        become successful growers. STT is an industry leader in reliablity,
        providing a dependable service which customers know they can trust.
        Every authentic STT branded seed comes with a unqiue Seed Tracker
        identifier which provides information on where those seeds were produced
        and when they were packaged and harvested. If you are interested in
        becoming a more knowledgable grower or want to provide your customers
        with the information they need to succeed look no further than Seed
        Tracker Technology.
      </p>
      <div className="px-12 sm:px-2 md:inline-flex lg:inline-flex xl:inline-flex xxl:inline-flex xxxl:inline-flex  sm:w-full sm:flex xs:w-full mt-12 w-4/5 justify-around">
        <div className="w-1/3 px-4 py-2 xs:mt-4 xs:w-full m-2">
          <FontAwesomeIcon
            icon={faGlobe}
            className="fa-5x pb-4 text-yellow animate-icons hover:text-grey-light"
          />
          <h4>Track your Seed</h4>
        </div>
        <div className="w-1/3 px-4 py-2 xs:mt-4 xs:w-full m-2">
          <FontAwesomeIcon
            icon={faFlask}
            className="fa-5x pb-4 text-yellow animate-icons hover:text-grey-light"
          />
          <h4>Germination Tests</h4>
        </div>
        <div className="w-1/3 px-4 py-2 xs:mt-4 xs:w-full m-2">
          <FontAwesomeIcon
            icon={faSeedling}
            className="fa-5x pb-4 text-yellow animate-icons hover:text-grey-light"
          />
          <h4>Grow like a Pro!</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
