import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faGlobe,
  faPlaneArrival,
  faLock,
  faPlaneDeparture
} from "@fortawesome/free-solid-svg-icons";

library.add(faGlobe, faPlaneDeparture, faLock);

const About = props => {
  return (
    <div
      id="about"
      className="w-full py-24 md:py-12 sm:py-12 bg-grey-darkest text-center text-white"
    >
      <h2
        style={{
          // fontSize: "45px",
          // color: "rgba(165, 165, 165, 0.62)",
          padding: "10px"
        }}
        className="text-yellow uppercase md:text-xxl sm:text-lg text-big"
      >
        About Seed Tracker Technology
      </h2>
      <p className="sm:px-2 px-12 inline-flex leading-normal mt-4 w-4/5 text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <div className="px-12 sm:px-2 md:inline-flex lg:inline-flex xl:inline-flex xxl:inline-flex sm:w-full w-4/5 mt-12 justify-around">
        <div className="px-4 py-2 m-2">
          <FontAwesomeIcon
            icon={faGlobe}
            className="fa-5x pb-4 text-yellow animate-icons hover:text-grey-light"
          />
          <h4>Track your Order</h4>
        </div>
        <div className="px-4 py-2 m-2 ">
          <FontAwesomeIcon
            icon={faPlaneDeparture}
            className="fa-5x pb-4 text-yellow animate-icons hover:text-grey-light"
          />
          <h4>Status Notifications</h4>
        </div>
        <div className="px-4 py-2 m-2 ">
          <FontAwesomeIcon
            icon={faLock}
            className="fa-5x pb-4 text-yellow animate-icons hover:text-grey-light"
          />
          <h4>Your order always safe</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
