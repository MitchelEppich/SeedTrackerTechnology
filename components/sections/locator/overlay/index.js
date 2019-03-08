import React from "react";
import html2canvas from "html2canvas";
import Card from "./card";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faAngleLeft, faAngleRight);

const overlay = props => {
  let searched = null;
  let searchSection = null;

  let firstPoint = () => {
    setTimeout(function() {
      props.toggleInfoSection(props.currentInformation + 1);

      // Create growcard
      let input = document.querySelector("#growCard");
      input.hidden = false;
      html2canvas(input, {
        scale: 0.9,
        windowHeight: "8000px",
        windowWidth: "2000px"
      }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const jspdf = require("jspdf");
        const pdf = new jspdf({ format: [131, 173] });
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("growcard.pdf");
        input.hidden = true;
      });
    }, 4000);
  };

  // function secondPoint() {
  //   setTimeout(
  //     function() {
  //    props.toggleInfoSection(
  //     props.currentInformation + 2
  //     )}, 4000);
  // }

  // function thirdPoint() {
  //   setTimeout(
  //     function() {
  //    props.toggleInfoSection(
  //     props.currentInformation + 3
  //     )}, 7000);
  // }

  return (
    <div className="total-center relative z-50">
      {props.searched == false ? (
        <div
          style={{ position: "absolute", zIndex: "9" }}
          className="ml-0 mt-64 w-450 sm:w-400 xs:w-250 main-message shadow-lg sm:m-0 xs:m-0 text-center"
          ref={searchPanel => {
            searchSection = searchPanel;
          }}
        >
          <h2 className="text-grey-darkest mt-4 sm:text-xl xs:text-lg text-xxl uppercase">
            Seed Tracker
          </h2>
          <div
            className="cursor-pointer absolute pin-r pin-t text-center mr-4 mt-4 h-10 w-10 pt-2 bg-grey-darkest hover:text-white hover:bg-grey text-white float-right xs:mt-3 xs:mr-1"
            onClick={() => {
              props.closeAllHandler();
            }}
          >
            <FontAwesomeIcon icon={faTimes} className="fa-lg" />
          </div>
          <p className="p-4 px-10 my-2 sm:p-1 leading-normal text-justify xs:text-sm xs:p-1">
            Enter your email address and your unique tracking number on your
            package of seeds or in the information that was sent to you when you
            made your online purchase.{" "}
          </p>

          <form
            onSubmit={async e => {
              e.preventDefault();
              // Get Entry
              let entry = await props.checkEntry({
                email: props.email,
                context: props.context,
                number: searched.value,
                websites: props.companySttWebsiteList
              });

              if (entry == null) return;
              // Entry is not supported yet
              if (
                !Object.keys(props.companySttWebsiteList).includes(
                  entry.number.toString()[0]
                )
              ) {
                props.setError(
                  "Sorry, this number is yet to be supported. . . try again later.",
                  props.email,
                  entry.number,
                  entry.context
                );
                return;
              }

              // Get Strain data
              let strain = await props.getStrainData({
                sttId: entry.sttId,
                website: entry.website,
                dispatchAt: entry.dispatchAt,
                context: entry.context,
                country: entry.country,
                seed: entry.seed
              });

              props.search("true");

              firstPoint();

              let originLocation = (() => {
                let arr = [];
                let index = 0;
                for (let loc of strain.coords) {
                  arr.push({
                    name: strain.aCountry[index],
                    anchor: [loc.lat, loc.lon],
                    type: "origin"
                  });
                  index++;
                }
                return arr;
              })();

              if (entry.context == 2) {
                // Tester code
                props.setLocations([...originLocation]);
              } else {
                // Get company
                let company = await props.getCompany({
                  website: entry.website,
                  country: entry.country.toLowerCase()
                });

                let companyLocation = {
                  name: company.name,
                  anchor: [
                    parseFloat(company.location[0]),
                    parseFloat(company.location[1])
                  ],
                  type: "company",
                  description: {
                    website: company.website,
                    social: (() => {
                      let obj = {};
                      for (let url of company.mediaUrls) {
                        obj[url.split(".")[1]] = url;
                      }
                      return obj;
                    })()
                  }
                };

                let customerLocation = {
                  name: "You",
                  anchor: [parseFloat(entry.lat), parseFloat(entry.lon)]
                };

                props.setLocations([
                  ...originLocation,
                  companyLocation,
                  customerLocation
                ]);
              }
            }}
          >
            <div className="w-full pb-4 xs:pb-1 bg-white">
              <div className="border-b-4 border-grey-lightest pb-6">
                <div className="xs:p-0">
                  <h3 className="p-2 sm:text-sm xs:text-sm xs:p-0 xs:mb-4 uppercase text-xs text-grey-dark font-normal">
                    Please, select one of the options:
                  </h3>
                </div>
                <div className="block flex mt-2 w-300 sm:w-200 xs:w-200 mx-auto text-center xs:h-6 justify-between text-base xs:text-sm">
                  <div className="uppercase">
                    <label className="h-12 text-base text-grey-darkest">
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={props.context == 0}
                        onChange={() => {
                          props.setContext(0);
                        }}
                      />
                      Online
                    </label>
                  </div>
                  <div className="uppercase">
                    <label className="h-12 text-grey-darkest">
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={props.context == 1}
                        onChange={() => {
                          props.setContext(1);
                        }}
                      />
                      Store
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-b-4 border-grey-lightest pb-6">
                <div className="p-2">
                  <h3 className="text-grey-dark font-normal sm:text-sm p-2 uppercase xs:text-sm xs:p-0 xs:mb-2 text-xs">
                    Insert your email to receive your Grow Card:
                  </h3>
                </div>
                <div className="inline-flex px-10 w-full sm:p-0 sm:w-full md:w-full xs:w-full px-12 sm:px-0 xs:px-0 xs:mb-1">
                  <input
                    required
                    className="h-10 w-full p-2 sm:w-full md:w-full border-light-grey p-2 xs:w-full shadow"
                    placeholder="Enter your email..."
                    type="email"
                    aria-label="Enter in your email"
                    // defaultValue={props.searched ? props.number : ""}
                    id="email"
                    name="email"
                    onChange={e => {
                      let input = e.target.value;
                      if (input.length != 0) {
                        props.setEmail(input);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="border-b-4 border-grey-lightest pb-6">
                <div className="p-2 sm:p-0 xs:p-0">
                  <h3 className="text-grey-dark font-normal sm:text-sm xs:text-sm p-2 uppercase text-xs ">
                    Enter your STT Number:
                  </h3>
                </div>
                <div className="inline-block sm:w-full xs:w-full w-full px-12 sm:px-0 xs:px-0 md:w-full">
                  <input
                    className="h-10 xs:w-full sm:w-full md:w-full w-full border-light-grey shadow p-2"
                    placeholder="Insert here your 7 digits code..."
                    type="number"
                    pattern="[0-9]{7}"
                    required="required"
                    maxLength={7}
                    aria-label="Track number"
                    // defaultValue={props.searched ? props.number : ""}
                    id="search"
                    ref={search => {
                      searched = search;
                    }}
                    name="search"
                    onChange={e => {
                      let inp = e.target;
                      inp.setCustomValidity("");
                      let input = e.target.value;

                      if (input.length < 7) {
                        inp.setCustomValidity(
                          "Forgot some numbers? Authentic STT numbers has 7 digits."
                        );
                      }
                      if (input.length > 7) {
                        // inp.setCustomValidity("Extra numbers! Authentic STT numbers has 7 digits.")
                        input = e.target.value = input.substring(0, 7);
                      }

                      if (input.length != 0) {
                        props.trackNumber(input);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="inline-block sm:w-full xs:w-full w-full sm:mt-2 xs:mt-2 md:w-full md:mt-2 px-12 sm:px-0 xs:px-0 mt-6">
                <button
                  className="h-10 slow bg-yellow-dark text-grey text-md uppercase px-5 sm:ml-0 xs:ml-0 md:ml-0 ml-0 font-bold hover:bg-grey hover:text-white sm:w-full md:w-full xs:w-full w-full"
                  type="submit"
                >
                  Track my Seeds
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default overlay;
