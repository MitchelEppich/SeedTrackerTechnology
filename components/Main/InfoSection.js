import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { width } from "window-size";

import moment from "moment";
import gen from "random-seed";

library.add(faTimes, faAngleLeft, faAngleRight);

const InfoSection = props => {
  let marker = props.locations[props.currentInformation];
  if (marker == null) return <div />;

  let rand = gen.create(props.strain.seed);
  let locationAmount = props.locations.length - 1;

  // console.log("test", props.strain)

// console.log("tesste", props.clientInfo.email)

// STT NUMBERS:
// 4540720
// 4521242
// 4013420

let typeStrain = () => {
  if (props.strain.genetic == 0) {
      return "Feminized"
  } if (props.strain.genetic == 1) {
      return "Autoflower Feminized"
  } if (props.strain.genetic == 2) {
      return "Regular"  
  } if (props.strain.genetic == 3) {
          return "Medical"
      }
}


let averageYield = (props.strain.i_yield + props.strain.o_yield) / 2;


  return (
    <div>
      <div
        style={{
          borderRadius: "2%",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: "0",
          right: "0",          
        }}
        className="absolute w-400 pin-b md:hidden lg:hidden xl:hidden xxl:hidden mb-12 ml-2 sm:mx-0 z-50 p-2 sm:w-7/8 sm:h-250 xs:h-250 xs:w-7/8 xs:text-sm sm:text-sm bg-white z-50 p-2"
      >
     
        {props.currentInformation == 0 ? (
          <div style={{
             borderTopLeftRadius: "3px",
             borderTopRightRadius: "3px",

          }} className="flex mb-1 bg-grey text-yellow justify-between cursor-pointer">
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(0);
              }}
            >
              Producer
            </div>
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(1);
              }}
            >
              Details
            </div>
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(2);
              }}
            >
              Tests
            </div>
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(3);
              }}
            >
              Facts
            </div>
          </div>
        ) : null}


        {props.currentInformation == 1 ? (
          <div style={{
             borderTopLeftRadius: "3px",
             borderTopRightRadius: "3px",

          }} className="flex mb-1 bg-grey text-yellow justify-between cursor-pointer">
            <div
              className="inline-flex py-2 px-1 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(0);
              }}
            >
              Company
            </div>
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(1);
              }}
            >
              Details
            </div>
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(2);
              }}
            >
              Tests
            </div>
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(3);
              }}
            >
              Contact
            </div>
          </div>
        ) : null}

        {props.currentInformation == 2 ? (
          <div style={{
             borderTopLeftRadius: "3px",
             borderTopRightRadius: "3px",

          }} className="flex mb-1 bg-grey text-yellow justify-between cursor-pointer">
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(0);
              }}
            >
              Destination
            </div>
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(1);
              }}
            >
              Details
            </div>
            <div
              className="inline-flex p-2 text-center uppercase hover:bg-yellow hover:text-black"
              onClick={() => {
                props.setInfoTab(3);
              }}
            >
              More
            </div>
          </div>
        ) : null}
     
        {/* COMPANY TAB */}
        {props.infoTab == 0 ? (
          <div className="flex h-140 mb-2">
            <span className="w-1/3 sm:w-1/2">
              <img
                style={{ borderRadius: "15px" }}
                className="p-2 md:w-32 md:h-32 sm:w-20 sm:h-20"
                src={marker.description.imageUrl}
              />
            </span>
            {props.currentInformation == 0 ? (
              <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                <h5 className="text-navy-blue sm:text-lg text-center">
                  Producer:
                </h5>
                <h3 className="my-2 text-yellow bg-grey sm:text-lg text-center uppercase p-1  animate-text">
                  {" "}
                  {marker.name}
                </h3>
              </span>
            ) : null}
            {props.currentInformation == 1 ? (
              <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                <h5 className="text-navy-blue sm:text-lg text-center">
                  Company:
                </h5>
                <h3 className="my-2 text-yellow bg-grey sm:text-lg text-center uppercase p-1  animate-text">
                  {marker.name}
                </h3>
              </span>
            ) : null}
            {props.currentInformation == 2 ? (
              <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                <h5 className="text-navy-blue sm:text-lg text-center">
                  Destination:
                </h5>
                <h3 className="my-2 text-yellow bg-grey sm:text-lg text-center uppercase p-1  animate-text">
                  {marker.name}
                </h3>
              </span>
            ) : null}
          </div>
        ) : null}
        {/* COMPANY TAB END */}

        {/* DETAILS TAB */}
        {props.infoTab == 1 ? (
          <div className="flex h-140 px-2">
            {props.currentInformation == 0 ? (
              <span className="pb-1 pt-1">
                <h3 className="pb-1 px-0 uppercase">Details:</h3>
                <p className="font-bold ml-2">
                  Harvest Date:{" "}
                  <span className="font-normal">
                  {moment(props.strain.seedFrom)
                    .subtract(rand.intBetween(54, 58), "days")
                    .format("DD/MM/YYYY")}
                  </span>{" "}
                </p>
                <p className="font-bold ml-2">
                  Departure Date:{" "}
                  <span className="font-normal">
                    {moment(props.strain.seedFrom)
                    .subtract(rand.intBetween(48, 52), "days")
                    .format("DD/MM/YYYY")}
                  </span>{" "}
                </p>
                
              </span>
            ) : null}

            {props.currentInformation == 1 ? (
              <span className="pb-1 pt-1">
                <h3 className="pb-1 px-0 uppercase">Details:</h3>
                <p className=" ml-2  font-bold">
                  Package Date:{" "}
                  <span className="font-normal">
                  {moment(props.clientInfo.dispatchAt, "DD/MM/YYYY")
                    .subtract(rand.intBetween(4, 12), "days")
                    .format("DD/MM/YYYY")}
                  </span>
                </p>
                <p className=" ml-2  font-bold">
                  Ship Date:{" "}
                  <span className="font-normal">
                    Approx {moment(props.clientInfo.dispatchAt, "DD/MM/YYYY").format(
                    "DD/MM/YYYY"
                  )}
                  </span>
                </p>
              </span>
            ) : null}

            {props.currentInformation == 2 ? (
              <span className="pb-1 pt-1">
                <h3 className="pb-1 px-0 uppercase">Your Details:</h3>
                <p className="font-bold ml-2">
                Email:{" "}
                  <span className="font-normal">
                  {props.clientInfo.email}
                  </span>
                </p>
                <p className="font-bold ml-2">
                STT Number:{" "}
                  <span className="font-normal">
                  {props.clientInfo.number}
                  </span>
                </p>
              </span>
            ) : null}
          </div>
        ) : null}
        {/* DETAILS TAB END */}

        {/* TEST SECTION TAB */}
        {props.infoTab == 2 ? (
          <div className="flex h-140 px-2">
            {props.currentInformation == 0 ? (
              <span className="pb-1 pt-1">
                <h3 className="pb-1 px-0 uppercase">Germination Tests:</h3>
                <p className="font-bold ml-2">
                  30 days:{" "}
                  <span className="font-normal">
                    {props.strain.germ[0]}%
                  </span>
                </p>
                <p className="font-bold ml-2">
                  45 days:{" "}
                  <span className="font-normal">
                    {props.strain.germ[1]}%
                  </span>
                </p>
              </span>
            ) : null}

            {props.currentInformation == 1 ? (
              <span className="pb-1 pt-1">
                <h3 className="pb-1 px-0 uppercase">Germination Tests:</h3>
                <p className="font-bold ml-2">
                  In house:{" "}
                  <span className="font-normal">
                    {props.strain.germ[2]}%
                  </span>
                </p>
              </span>
            ) : null}
          </div>
        ) : null}
        {/* TEST SECTION TAB END */}

        {/* SOCIAL MEDIA TAB */}
        {props.infoTab == 3 ? (
          <div className="flex h-140 px-2">
            {props.currentInformation == 0 ? (
              <span className="pb-1 pt-1">
                <h3 className="pb-1 px-0 uppercase">Facts on Seeds:</h3>
                <p className="font-bold ml-2">
                Strain:{" "}
                  <span className="font-normal">
                    {props.strain.strain}
                  </span>
                </p>
                <p className="font-bold ml-2">
                  Origin:{" "}
                  <span className="font-normal">
                    {props.strain.origin}
                  </span>
                </p>
                <p className="font-bold ml-2">
                  THC:{" "}
                  <span className="font-normal">
                  {props.strain.p_thc}%; {props.strain.p_cbn != null ? <span>CBN {props.strain.p_cbn}%;</span> : null } CBD {props.strain.p_cbd}%
                  </span>
                </p>
                <p className="font-bold ml-2">
                  Indica:{" "}
                  <span className="font-normal">
                    {props.strain.p_indica}%
                  </span>
                </p>
                <p className="font-bold ml-2">
                  Sativa:{" "}
                  <span className="font-normal">
                    {props.strain.p_sativa}%
                  </span>
                </p>
                {props.strain.p_ruderalis != null ?
                  <p className="font-bold ml-2">  
                    Ruderalis:{" "}
                    <span className="font-normal"> 
                    {props.strain.p_ruderalis}%
                    </span>
                  </p> : null }
                <p className="font-bold ml-2">
                  Average Yield:{" "}
                  <span className="font-normal">
                  {averageYield}g
                  </span>
                </p>
                <p className="font-bold ml-2">
                  Effects:{" "}
                  <span className="font-normal">
                    {props.strain.effect}
                  </span>
                </p>
                <p className="font-bold ml-2">
                  Potency:{" "}
                  <span className="font-normal">
                  {props.strain.potency}%
                  </span>
                </p>
              </span>
            ) : null} 
            {/* {console.log(props.strain)} */}
            {props.currentInformation == 1 ? (
              <span className="pb-1 pt-1">
                <h3 className="pb-1 px-0 uppercase">Contact:</h3>
                <p>
                  <a
                    className="font-bold text-grey-darkest ml-2"
                    href={marker.description.website}
                  >
                    Website:{" "} <span className="font-normal">{marker.description.website}</span>
                  </a>
                </p>
                <p>
                  <a
                    className="font-bold text-grey-darkest ml-2"
                    href={marker.phone}
                  >
                    {" "}
                    Phone: {" "} <span className="font-normal">{marker.phone}</span>
                  </a>
                </p>
                <p>
                  <a
                    className="font-bold text-grey-darkest ml-2"
                    href={`mailto: ${marker.email}`}
                  >
                    {" "}
                    Email: <span className="font-normal">{marker.email}</span>
                  </a>                  
                </p>
              </span>
            ) : null}

            {props.currentInformation == 2 ? (
              <span className="pb-1 pt-1">
               <p className="text-center px-2 mb-2 xs:hidden">Valuable information to make sure you have the best possible genetics!</p>    
            <p className="text-center px-2 mb-2">Make sure all your seeds have an authentic STT Number before your purchase to ensure you recieve quality seeds!</p>  
            <h3 className="pb-1 px-2 text-center uppercase">Thank you for using Seed Tracker Technology!</h3>   
              </span>
            ) : null}
          </div>
        ) : null}
        {/* SOCIAL MEDIA TAB END */}

        {/* <hr
          style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
        /> */}

        <div style={{
            width: "96%",
            height: "35px",
            margin: "8px",
            borderBottomLeftRadius: "3px",
            borderBottomRightRadius: "3px",
            }} 
            className="absolute inline-flex sm:w-full justify-around bg-grey text-white pin-b pin-l">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="fa-2x text-white hover:text-grey-darkest mt-1 cursor-pointer animate-icons"
            onClick={() => {
              if (props.currentInformation - 1 >= 0) {
                props.toggleInfoSection(props.currentInformation - 1);
              } else {
                props.toggleInfoSection(locationAmount - 1);
              }
            }}
          />
          <div
            style={{            
              borderLeft: "2px solid rgba(255, 255, 255, 0.69)",
              height: "20px",
              width: "3px",
              marginTop: "9px"
            }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="fa-2x text-white hover:text-grey-darkest mt-1 cursor-pointer animate-icons"
            onClick={() => {
              if (props.currentInformation + 1 < locationAmount) {
                props.toggleInfoSection(props.currentInformation + 1);
              } else {
                props.toggleInfoSection(0);
              }
            }}
          />
        </div>
      </div>





      {/* ===================
          PC VERSION: 
      ====================*/}

      <div
        style={{ borderRadius: "2%" }}
        className="absolute text-sm w-400 min-h-card h-550 sm:hidden xs:hidden pin-b pin-l mb-12 ml-2 z-50 p-2  bg-white z-50 p-2"
      >
        <div 
        style={{
          minHeight: "112px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        className="text-white flex bg-grey mb-2">
          <span className="w-1/3 sm:w-1/2">
            {props.currentInformation == 1 ? (
              <img
                style={{ 
                  borderRadius: "50%",                
                  background: "white",
                  padding: "5px",
                  margin: "10px" 
                }}
                className="p-2 w-imgCard h-imgCard"
                src={marker.description.imageUrl}
              />
            ) : null}
          </span>
          {props.currentInformation == 0 ? (
            <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
              <h5 className="mt-6 text-white sm:text-lg text-center">
                Producer:
              </h5>
              <h3 className="bg-grey text-yellow uppercase p-1 sm:text-lg my-2 text-center animate-text">
                {marker.name}
              </h3>
            </span>
          ) : null}
          {props.currentInformation == 1 ? (
            <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
              <h5 className="mt-6 text-white sm:text-lg text-center">
                Company:
              </h5>
              <h3 className="bg-grey text-yellow uppercase p-1 sm:text-lg my-2 text-center animate-text">
                {marker.name}
              </h3>
            </span>
          ) : null}
          {props.currentInformation == 2 ? (
            <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
              <h5 className="mt-6 text-white sm:text-lg text-center">
                Destination:
              </h5>
              <h3 className="bg-grey text-yellow uppercase p-1 sm:text-lg my-2 text-center animate-text">
                {marker.name}
              </h3>
            </span>
          ) : null}
          <div style={{borderRadius:"5px"}}
            className="cursor-pointer text-center h-10 w-10 py-3 hover:bg-grey-darkest hover:text-white float-right"
            onClick={() => {
              props.closeAllHandler();
            }}
          >
            <FontAwesomeIcon icon={faTimes} className="fa-lg" />
          </div>
        </div>
        {/* {console.log("teste", props.strain)} */}
        <div className="px-0">    
          {props.currentInformation == 0 ? (
            <div className="pb-3">
              <div className="pb-3">
                  <h3 className="px-2 bg-grey text-yellow uppercase p-1 mb-1 ">Facts on Seeds:</h3>
                  <p className="font-bold pl-2">
                    Strain:{" "}
                    <span className="font-normal">{props.strain.strain}</span>
                  </p>
                  <p className="font-bold pl-2">
                    Type:{" "}
                    <span className="font-normal">{typeStrain()}</span>
                  </p>
                  <p className="font-bold pl-2">
                    THC:{" "}
                    <span className="font-normal">
                    {props.strain.p_thc}%; {props.strain.p_cbn != null ? <span>CBN {props.strain.p_cbn}%;</span> : null } CBD {props.strain.p_cbd}%
                    </span>
                  </p>
                  <p className="font-bold pl-2">
                    Indica:{" "}
                    <span className="font-normal">
                    {props.strain.p_indica}%
                    </span>
                  </p>
                  <p className="font-bold pl-2">
                    Sativa:{" "}
                    <span className="font-normal">
                    {props.strain.p_sativa}%
                    </span>
                  </p>
                  {props.strain.p_ruderalis != null ?
                  <p className="font-bold pl-2">  
                    Ruderalis:{" "}
                    <span className="font-normal"> 
                    {props.strain.p_ruderalis}%
                    </span>
                  </p> : null }
                  <p className="font-bold pl-2">
                    Average Yield:{" "}
                    <span className="font-normal">
                    {averageYield}g
                    </span>
                  </p>
                  <p className="font-bold pl-2">
                    Average Grow Time:{" "}
                    <span className="font-normal">
                    {props.strain.grow_time} weeks
                    </span>
                  </p>
                  
              </div>
              <div className="pb-3">
                  <h3 className="px-2 bg-grey text-yellow uppercase p-1 mb-1 ">Germination Tests:</h3>
                  <p className="font-bold pl-2">
                    30 days:{" "}
                    <span className="font-normal">
                    {props.strain.germ[0]}%
                    </span>
                  </p>
                  <p className="font-bold pl-2 ">
                    45 days:{" "}
                    <span className="font-normal">
                    {props.strain.germ[1]}%
                    </span>
                  </p>
              </div>

              <div className="pb-3 pt-1">
                <h3 className="px-2 bg-grey text-yellow uppercase p-1 mb-1 ">Details:</h3>
                <p className="font-bold pl-2">
                  Harvest Date:{" "}
                  <span className="font-normal">
                    {moment(props.strain.seedFrom)
                      .subtract(rand.intBetween(54, 58), "days")
                      .format("DD/MM/YYYY")}
                  </span>{" "}
                </p>
                <p className="font-bold pl-2">
                  Departure Date:{" "}
                  <span className="font-normal">
                    {moment(props.strain.seedFrom)
                      .subtract(rand.intBetween(48, 52), "days")
                      .format("DD/MM/YYYY")}
                  </span>{" "}
                </p>
                
              </div>  
            </div>
          ) : (
            <div />
          )}
          {props.currentInformation == 1 ? (
            <div className="pb-3">
              <h3 className="px-2 bg-grey text-yellow uppercase p-1 mb-1 ">Germination Tests:</h3>
              <p className="font-bold pl-2">
                In house:{" "}
                <span className="font-normal">
                {props.strain.germ[2]}%
                </span>
              </p>

              <div className="pb-3 pt-2">
                <h3 className="px-2 bg-grey text-yellow uppercase p-1 mb-1 ">Details:</h3>
                <p className="font-bold pl-2">
                  Package Date:{" "}
                  <span className="font-normal">
                    {moment(props.clientInfo.dispatchAt, "DD/MM/YYYY")
                      .subtract(rand.intBetween(4, 12), "days")
                      .format("DD/MM/YYYY")}
                  </span>
                </p>
                <p className="font-bold pl-2">
                  Ship Date:{" "}
                  <span className="font-normal">
                    Approx{" "}
                    {moment(props.clientInfo.dispatchAt, "DD/MM/YYYY").format(
                      "DD/MM/YYYY"
                    )}
                  </span>
                </p>
              </div>
              
              <h3 className="px-2 bg-grey text-yellow uppercase p-1 mb-1  ">Contact:</h3>
              <p className="pl-2 font-bold">Website: 
                <a                  
                  href={marker.description.website}
                  target="blank"
                >
                   <span className="font-normal"> {marker.description.website}</span>
                </a>
              </p>
              <p className="pl-2">
                    <span className="font-bold">Phone: </span>
                    {marker.phone}
              </p>
              <p className="pl-2">
              
                    <span className="font-bold">Email: </span>
                    <a href={`mailto: ${marker.email}`}>
                    {marker.email}</a>
              </p>
              
            </div>
          ) : (
            <div />
          )}
          {props.currentInformation == 2 ? (
            <div className="">
              <div className="pb-3">
                <h3 className="px-2 bg-grey text-yellow uppercase p-1 mb-1 ">Your Details:</h3>
                
                <p className="font-bold pl-2">
                  Email:{" "}
                  <span className="font-normal">{props.clientInfo.email}</span>
                </p>
                <p className="font-bold pl-2">
                  STT Number:{" "}
                  <span className="font-normal">{props.clientInfo.number}</span>
                </p>
              </div>

                <p className="text-center px-12 mb-6 mt-12">Valuable information to make sure you have the best possible genetics!</p>    
                <p className="text-center px-12 mb-8">Make sure all your seeds have an authentic STT Number before your purchase to ensure you recieve quality seeds!</p>  
                <h3 className="pb-1 px-12 text-center uppercase">Thank you for using Seed Tracker Technology!</h3>           
            </div>
          ) : (
            <div />
          )} 
         
          <div 
          style={{
            position: "absolute",
            margin: "8px",
            width: "96%",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
          className="bg-grey py-1 text-black inline-flex w-full sm:w-full sm:h-12 sm:pt-1 justify-around pin-b pin-l">
         
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="fa-2x text-white hover:text-grey-darkest cursor-pointer animate-icons"
              onClick={() => {
                if (props.currentInformation - 1 >= 0) {
                  props.toggleInfoSection(props.currentInformation - 1);  
                } else {
                  props.toggleInfoSection(locationAmount - 1);
                }
              }}
            />
            <div
              style={{
                borderLeft: "2px solid rgba(255, 255, 255, 0.69)",
                height: "20px",
                marginTop: "6px",
                width: "3px",                
              }}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="fa-2x text-white hover:text-grey-darkest cursor-pointer animate-icons"
              onClick={() => {
                if (props.currentInformation + 1 < locationAmount) {
                  props.toggleInfoSection(props.currentInformation + 1);
                } else {
                  props.toggleInfoSection(0);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
