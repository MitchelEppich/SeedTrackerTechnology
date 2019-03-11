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
      className="w-full relative pb-24 sm:pb-6 xs:pb-6 bg-white text-center text-grey"
    >
      <Header {...props} />
      <Statement {...props} />
      <div className="px-2 md:px-6 sm:px-12 xs:px-6 xxl:px-12 xxxl:px-12 md:inline-flex lg:inline-flex xl:inline-flex xxl:inline-flex xxxl:inline-flex sm:flex-col  xs:flex-col mt-12 w-4/5 lg:w-7/8 md:w-full sm:w-full xs:w-full justify-around">
        <Tab
          {...props}
          image="../../static/imgs/feature-img-2.jpg"
          icon={faGlobe}
          title="Track your Seeds"
          text="Get information on when your seeds were harvested and shipped so you can better understand your seeds."
        />
        <Tab
          {...props}
          image="../../static/imgs/feature-img-3.jpg"
          icon={faFlask}
          title="Germination Tests"
          text="Get all the batch germination tests for your seed so you have a better idea of what your germination rates will be."
        />
        <Tab
          {...props}
          image="../../static/imgs/feature-img-1.jpg"
          icon={faSeedling}
          title="Grow like a Pro!"
          text="Expand your knowledge and become a better grower with all the information you need at your finger tips."
        />
      </div>
    </div>
  );
};

export default About;
