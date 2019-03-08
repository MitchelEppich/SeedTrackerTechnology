import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faFlask,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";

import Header from "./header";
import Statement from "./statement";
import Tab from "./tab";

const About = props => {
  return (
    <div
      id="about"
      className="w-full relative pb-24 bg-white text-center text-grey"
    >
      <div style={{ height: "40px", backgroundColor: "#0E1112" }} />
      <Header {...props} />
      <Statement {...props} />
      <div className="px-2 md:px-6 sm:px-12 xs:px-6 xxl:px-12 xxxl:px-12 md:inline-flex lg:inline-flex xl:inline-flex xxl:inline-flex xxxl:inline-flex sm:flex-col  xs:flex-col mt-12 w-4/5 lg:w-7/8 md:w-full sm:w-full xs:w-full justify-around">
        <Tab
          {...props}
          image="../../static/imgs/feature-img-2.jpg"
          icon={faGlobe}
          title="Track your Seeds"
          text="Ad nulla veniam non anim. Consequat dolore labore anim ipsum
                cupidatat duis ut sit ex tempor aliquip Lorem duis. Proident sint
                velit nulla ullamco."
        />
        <Tab
          {...props}
          image="../../static/imgs/feature-img-3.jpg"
          icon={faFlask}
          title="Germination Tests"
          text="Ad nulla veniam non anim. Consequat dolore labore anim ipsum
                cupidatat duis ut sit ex tempor aliquip Lorem duis. Proident sint
                velit nulla ullamco."
        />
        <Tab
          {...props}
          image="../../static/imgs/feature-img-1.jpg"
          icon={faSeedling}
          title="Grow like a Pro!"
          text="Ad nulla veniam non anim. Consequat dolore labore anim ipsum
                cupidatat duis ut sit ex tempor aliquip Lorem duis. Proident sint
                velit nulla ullamco."
        />
      </div>
    </div>
  );
};

export default About;
