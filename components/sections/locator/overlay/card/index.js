import React from "react";
import moment from "moment";

import PercentageStrainGraphs from "./percentageStrainGraphs";
import StrainInfoGraphs from "./strainInfoGraphs";
import MobileCard from "./mobileCard";
import DefaultCard from "./defaultCard";

const card = props => {
  // STT NUMBERS:
  // 4540720
  // 4521242
  // 4013420

  let isSmallMediumOrLargeDevice = ["sm", "md"].includes(props.misc.mediaSize);
  return (
    <div>
      {isSmallMediumOrLargeDevice ? (
        <MobileCard {...props} />
      ) : (
        <DefaultCard {...props} />
      )}
    </div>
  );
};

export default card;
