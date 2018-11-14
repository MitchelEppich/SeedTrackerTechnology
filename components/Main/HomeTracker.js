import React from "react";
import html2canvas from "html2canvas";
import InfoCard from "../Main/InfoCard"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faAngleLeft, faAngleRight);

const HomeTracker = props => {
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
  windowWidth: "2000px",             
}).then(canvas => {
  const imgData = canvas.toDataURL("image/png");
  const jspdf = require("jspdf");
  // const pdf = new jspdf({ format: 'letter' });
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
          className="ml-0 mt-64 w-550 sm:w-400 xs:w-250 main-message sm:m-0 xs:m-0 text-center rounded-lg bg-yellow"
          ref={searchPanel => {
            searchSection = searchPanel;
          }}
        >
          <h2 className="text-grey-darkest sm:text-xl xs:text-lg text-xxl uppercase">
            Track your Seed
          </h2>
          <div
            className="cursor-pointer text-grey-darkest absolute pin-r pin-t text-center mr-4 mt-4 h-10 w-10 pt-2 hover:bg-grey-darkest hover:text-white float-right xs:mt-3 xs:mr-1"
            onClick={() => {
              props.closeAllHandler();
            }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="fa-lg hover:text-white"
            />
          </div>
          <p className="p-4 my-2 sm:p-1 leading-normal xs:text-sm xs:p-1">
            Enter your email address and your unique tracking number on your
            package of seeds or in the information that was sent to you when you
            made your online purchase.{" "}
          </p>

          <hr
            style={{
              backgroundColor: "rgba(103, 112, 117, 0.2)",
              height: "2px"
            }}
          />
          <form
            onSubmit={e => {
              e.preventDefault();             
          

              props
                .checkEntry({
                  email: props.email,
                  context: props.context,
                  number: searched.value
                })
                .then(res => {
                  props.getStrainData(res.strain).then(data => {
                    props.search("true");

                    firstPoint();

                    let company;
                    switch (Math.round(res.number / 1000000)) {
                      case 1:
                        company = "mjsc.com";
                        break;
                      case 2:
                        company = "cks";
                        break;
                      case 3:
                        company = "mjsc.ca";
                        break;
                      case 4:
                        company = "mjg";
                        break;
                      case 5:
                        company = "swg";
                        break;
                      case 6:
                        company = "cks";
                        break;
                      case 7:
                        company = "bvr";
                        break;
                      case 8:
                        company = "snm";
                        break;
                      case 9:
                        company = "sfw";
                        break;
                    }

                    

                    props.setLocations([
                      {
                        name: data.origin,
                        anchor: [parseFloat(data.lat), parseFloat(data.lon)],
                        type: "producer",
                        description: {
                          facts: {
                            effects:
                              "",
                            potency: "90%"
                          },
                          imageUrl:
                            "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png"
                        }
                      },
                      props.landmarks[company],
                      {
                        name: "You",
                        anchor: [parseFloat(res.lat), parseFloat(res.lon)],
                        description : {
                          imageUrl:
                          "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png"
                      }
                    },
                      {
                        name: "null",
                        anchor: [null, null],
                        description : {
                          imageUrl:
                          "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png"
                      }
                    }
                    ]);
                  });
                });
            }}
          >
            <div className="w-full pb-4 xs:pb-1">
              <div className="p-2 xs:p-0">
                <h3 className="text-grey-darkest sm:text-sm xs:text-sm xs:p-0 xs:mb-4 p-2 uppercase">
                  Please, select one option:
                </h3>
              </div>
              <div className="block flex w-300 sm:w-200 xs:w-200 mx-auto text-center h-10 xs:h-6 justify-around xs:text-sm">
                <div className="uppercase">
                  <label className="h-12 text-grey-darkest">
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

              <hr
                style={{
                  backgroundColor: "rgba(103, 112, 117, 0.2)",
                  height: "2px"
                }}
              />

              <div className="p-2">
                <h3 className="text-grey-darkest sm:text-sm p-2 uppercase xs:text-sm xs:p-0 xs:mb-2">
                  Insert your email to receive your Grow Card:
                </h3>
              </div>
              <div className="inline-flex px-10 mb-4 w-full sm:p-0 sm:w-full md:w-full xs:w-full px-12 sm:px-0 xs:px-0 xs:mb-1">
                <input
                  required
                  className="h-10 w-full p-2 sm:w-full md:w-full border-2 border-light-grey p-2 xs:w-full"
                  placeholder="youremail@mail.ca"
                  defaultValue="youremail@mail.ca"
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

              <hr
                style={{
                  backgroundColor: "rgba(103, 112, 117, 0.2)",
                  height: "2px",
                  margin: "5px"
                }}
              />

              <div className="p-2">
                <h3 className="text-grey-darkest sm:text-sm xs:text-sm p-2 uppercase">
                  Tracking number:
                </h3>
              </div>
              <div className="inline-block sm:w-full xs:w-full w-full px-12 sm:px-0 xs:px-0 md:w-full">
                <input
                  className="h-10 xs:w-full sm:w-full md:w-full w-full border-2 border-light-grey p-2"
                  placeholder="Insert here your code: #8454d91"
                  type="number"
                  pattern="[0-9]{7}"
                  required="required"
                  maxLength={7}
                  aria-label="Track number"
                  defaultValue="4050202"
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
              <div className="inline-block sm:w-full xs:w-full w-full sm:mt-2 xs:mt-2 md:w-full md:mt-2 px-12 sm:px-0 xs:px-0 mt-2 ">
                <button
                  style={{ transition: "all 0.5s ease" }}
                  className="h-10 bg-grey-darkest text-white text-md border border-light-blue uppercase px-5 sm:ml-0 xs:ml-0 md:ml-0 ml-0  font-bold hover:bg-grey-light hover:text-grey-darkest hover:border-transparent hover:border sm:w-full md:w-full  xs:w-full w-full"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default HomeTracker;
