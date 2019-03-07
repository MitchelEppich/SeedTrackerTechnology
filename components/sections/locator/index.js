import React from "react";
import Overlay from "./overlay";
import Map from "./map";

const locator = props => {
  return (
    <div>
      <Overlay {...props} />
      <Map {...props} />
    </div>
  );
};

export default locator;
