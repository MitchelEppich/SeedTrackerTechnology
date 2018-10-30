import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faAngleLeft, faAngleRight);

const HomeTracker = props => {
  let searched = null;
  let searchSection = null;


  let firstPoint = () => {
    setTimeout(
      function() {       
     props.toggleInfoSection(
      props.currentInformation + 1
      )}, 4000);
  }
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
    
    <div className="total-center z-50">
      {props.searched == false ? (
        <div
          style={{ position: "absolute", zIndex: "999999" }}
          className="sm:mx-2 mt-64 absolute w-550 md:w-400 sm:w-300 main-message text-center rounded-lg bg-yellow"
          ref={searchPanel => {
            searchSection = searchPanel;
          }}
        >
          <h2 className="text-grey-darkest sm:text-xl text-xxl uppercase">
            Track your Seed
          </h2>
          <div
            className="cursor-pointer text-grey-darkest absolute pin-r pin-t text-center mr-4 mt-4 h-10 w-10 pt-2 hover:bg-grey-darkest hover:text-white float-right"
            onClick={() => {
                props.closeAllHandler();
            }}
            >
            <FontAwesomeIcon icon={faTimes} className="fa-lg hover:text-white" />
            </div>
          <p className="p-4 mb-4 leading-normal">
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
          <form onSubmit={(e) => {
            e.preventDefault()
                  props.checkEntry({
                    email: props.email,
                    context: props.context,
                    number: searched.value
                  });                  
                  props.search("true"); 

                  // FUNCTION TO FOCUS ON A SPECIFIC POINT                 
                  // props.toggleInfoSection(
                  //       props.currentInformation + 1                            
                  //   )
                  
                  firstPoint()
                  // secondPoint()
                  // thirdPoint()
                  
                  props.setLocations([
                    props.landmarks.spain,
                    props.landmarks.cks,
                    props.landmarks.you,                   
                    {
                      name: "null",
                      anchor: [null, null],
                      imageUrl:
                     "https://tokesignals.com/wp-content/uploads/2014/05/original-5.jpg",
                    }
                  ]);
                }}>
          <div className="w-full pb-4">
            <div className="p-2">
              <h3 className="text-grey-darkest sm:text-sm p-2 uppercase">
                Please, select one option:
              </h3>
            </div>
            <div className="block flex w-300 sm:w-200 mx-auto text-center h-10 justify-around">
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
              <h3 className="text-grey-darkest sm:text-sm p-2 uppercase">
                Insert here your email to receive a copy:
              </h3>
            </div>
            <div className="inline-flex px-10 mb-4 w-full sm:w-full md:w-full">
              <input
              required
                className="h-10 w-full p-2 sm:w-full md:w-full border-2 border-light-grey p-2"
                placeholder="youremail@mail.ca"
                type="email"
                aria-label="Enter in your email"
                defaultValue={props.searched ? props.number : ""}
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
                height: "2px"
              }}
            />

            <div className="p-2">
              <h3 className="text-grey-darkest sm:text-sm p-2 uppercase">
                Tracking number:
              </h3>
            </div>
            <div className="inline-flex sm:w-full md:w-full">
              <input                
                className="h-10 w-searchBar sm:w-full md:w-full border-2 border-light-grey p-2"
                placeholder="Insert here your code: #8454d91"
                // minLength="3"
                type="number"
                pattern="[0-9]{7}"
                required="required"
                maxLength={5}
                aria-label="Track number"
                defaultValue={props.searched ? props.number : ""}
                id="search"
                ref={search => {
                  searched = search;
                }}
                name="search"

                onChange={e => {
                  let inp = e.target
                  inp.setCustomValidity("")
                  let input = e.target.value;
                  
                  if (input.length < 7) {
                    inp.setCustomValidity("Forgot some numbers? Authentic STT numbers has 7 digits.")
                  }
                  if (input.length > 7) {
                    // inp.setCustomValidity("Extra numbers! Authentic STT numbers has 7 digits.")
                    input = e.target.value = input.substring(0, 7)
                  }
                  


                  if (input.length != 0) {
                    props.trackNumber(input);
                  }
                }}
              />
            </div>
            <div className="inline-flex sm:w-full sm:mt-2 md:w-full md:mt-2">
              <button                
                style={{ transition: "all 0.5s ease" }}
                className="h-10 bg-grey-darkest text-white text-md border border-light-blue uppercase px-5 ml-1 font-bold hover:bg-grey-light hover:text-grey-darkest hover:border-transparent hover:border sm:w-full md:w-full"
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
