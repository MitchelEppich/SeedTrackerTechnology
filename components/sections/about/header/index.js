import React from "react";

const header = props => {
  return (
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
  );
};

export default header;
