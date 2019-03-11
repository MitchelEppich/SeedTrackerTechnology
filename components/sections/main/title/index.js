import React from "react";

const title = props => {
  return (
    <div className="h-400 items-center flex justify-start w-600 xl:w-600 lg:w-500px md:w-4/5 sm:w-4/5 xs:w-full flex-col">
      <h1 className="text-4xl xl:text-3/5xl md:text-3xl sm:text-2xl xs:text-2xl shadow-md text-white pl-32 xl:pl-16 lg:pl-16 md:pl-8 sm:pl-8 xs:pl-8 w-full mt-48 lg:mt-32 md:mt-8 sm:mt-8 xs:mt-8 bg-almost-transparent p-4">
        Introducing the Industry Leading System
      </h1>
      <p className="text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl pl-32 xl:pl-16 lg:pl-16 md:pl-8 sm:pl-8 xs:pl-8 w-full mt-2 bg-almost-transparent uppercase text-white p-4 xl:p-3 md:p-3 sm:p-3 xs:p-3 shadow-md">
        Seed Tracker Technology
      </p>
    </div>
  );
};

export default title;
