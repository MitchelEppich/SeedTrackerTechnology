import React from "react";

const header = props => {
  return (
    <div className="inline-flex sm:inline-block sm:text-center xs:inline-block xs:text-center w-full pt-16 sm:pt-4 xs:pt-4 bg-blue-darkest">
      <div className="bg-yellow w-full inline-flex flex justify-center sm:flex-col xs:flex-col">
        <div className="">
          <h2 className="uppercase p-4 md:text-xxl sm:text-lg xs:text-base text-xxxl">
            About Seed Tracker Technology
          </h2>
        </div>
        {/* BETA TAG */}
        <div className="bg-grey text-yellow py-2 text-3xl md:text-2xl ml-4 w-100 rounded-sm xs:mx-auto sm:mx-auto sm:text-sm sm:text-center xs:text-sm xs:text-center my-3">
          <p>BETA</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default header;
