import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { width } from "window-size";

import gen from "random-seed";

library.add(faTimes, faAngleLeft, faAngleRight);

const InfoSection = props => {
  let marker = props.locations[props.currentInformation];
  if (marker == null) return <div />;

  let rand = gen.create(props.seed);

    let locationAmount = props.locations.length - 1;   

  return (              
        <div
        style={{ 
            borderRadius: "2%",           
        }}
        className="absolute w-400 min-h-card h-550 pin-b pin-l mb-12 ml-2 z-50 p-2 sm:w-300 bg-yellow z-50 p-2 sm:w-300"
        >
        <div className="flex mb-2">
            <span className="w-1/3 sm:w-1/2">
            <img
                style={{
                    borderRadius: "15px",
                    width: '120px',
                    height: '120px', 
                }}
                className="p-2 sm:w-24 sm:h-24"
                src={marker.description.imageUrl}
            />
            </span>
            {props.currentInformation == 0 ? 
            <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                <h5 className="text-navy-blue  sm:text-lg text-center">Producer:</h5>
                <h2 className="text-navy-blue sm:text-lg text-center">
                {marker.name}
                </h2>
            </span> : null}
            {props.currentInformation == 1 ? 
            <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                <h5 className="text-navy-blue  sm:text-lg text-center">Company:</h5>
                <h2 className="text-navy-blue sm:text-lg text-center">
                {marker.name}
                </h2>
            </span> : null}
            {props.currentInformation == 2 ? 
            <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                <h5 className="text-navy-blue  sm:text-lg text-center">Destination:</h5>
                <h2 className="text-navy-blue sm:text-lg text-center">
                {marker.name}
                </h2>
            </span> : null}
            <div
            className="cursor-pointer text-center h-10 w-10 pt-2 hover:bg-grey-darkest hover:text-white float-right"
            onClick={() => {
                props.closeAllHandler();
            }}
            >
            <FontAwesomeIcon icon={faTimes} className="fa-lg" />
            </div>
        </div>
        <hr
            style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
        /> 
        <div className="px-2">
        
            {props.currentInformation == 0 ? 
            <div className="pb-1 pt-1">
                <h3 className="pb-1 px-0">Details:</h3>
                <p>
                    Departure Date:{" "}
                    <span className="italic font-bold">
                    {marker.description.dates["depart"]}
                    </span>{" "}
                </p>
                <p>
                    Harvest Date:{" "}
                    <span className="italic font-bold">
                    {marker.description.dates["harvest"]}
                    </span>{" "}
                </p>            
            </div>
            : <div></div> }

            {props.currentInformation == 1 ?  
            <div className="pb-1 pt-1">
                <h3 className="pb-1 px-0">Details:</h3>           
                <p>
                    Package Date:{" "}
                    <span className="italic font-bold">
                    {marker.description.dates["package"]}
                    </span>
                </p>
                <p>
                    Ship Date:{" "}
                    <span className="italic font-bold">
                    Approx {marker.description.dates["ship"]}
                    </span>
                </p>
            </div>
            : <div></div> }

            {props.currentInformation == 2 ?  
            <div className="pb-1 pt-1">
                <h3 className="pb-1 px-0">Your Details:</h3>           
                <p>
                    Address:{" "}
                    <span className="italic font-bold">
                    {marker.description.address.street},{" "} 
                    {marker.description.address.city}
                    </span>
                </p>
                <p>
                    Email:{" "}
                    <span className="italic font-bold">
                    {marker.description.email}
                    </span>
                </p>                
            </div>
            : <div></div> }
            
            <hr
            style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
            />
            {props.currentInformation == 0 ?  
            <div className="pb-1 pt-1">
                <h3 className="pb-1 px-0">Germination Tests:</h3>
                <p>
                    30 days:{" "}
                    <span className="italic font-bold">
                    {`${rand.floatBetween(89.0, 94.9).toFixed(1)}%`}
                    </span>
                </p>
                <p>
                    45 days:{" "}
                    <span className="italic font-bold">
                    {`${rand.floatBetween(89.0, 94.9).toFixed(1)}%`}
                    </span>
                </p>           
                <hr
                style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
                /> 
                <h3 className="pb-1 px-0">Facts on Seeds:</h3>
                <p>
                    Origin:{" "}
                    <span className="italic font-bold">
                    {marker.description.facts.origin}
                    </span>
                </p>
                <p>
                    Effects:{" "}
                    <span className="italic font-bold">
                    {marker.description.facts.effects}
                    </span>
                </p>
                <p>
                    Potency:{" "}
                    <span className="italic font-bold">
                    {`${rand.floatBetween(84, 93).toFixed(1)}%`}
                    </span>
                </p>
            </div> : <div></div> }

            {props.currentInformation == 1 ?  
            <div className="pb-1 pt-1">
                <h3 className="pb-1 px-0">Germination Tests:</h3>            
                <p>
                    In house:{" "}
                    <span className="italic font-bold">
                    {`${rand.floatBetween(84, 95).toFixed(1)}%`}
                    </span>
                </p>  
                <hr
                style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
                /> 
                <h3 className="pb-1 px-0">Social Media:</h3>
                <p>
                    <a className="italic font-bold text-grey-darkest" 
                    href={marker.description.socials.facebook}>Facebook{" "}
                    </a>                 
                </p>
                 <p>
                    <a className="italic font-bold text-grey-darkest" 
                    href={marker.description.socials.twitter}> Twitter{" "}
                    </a>  
                </p>
                <p>
                    <a className="italic font-bold text-grey-darkest" 
                    href={marker.description.socials.instagram}> Instagram{" "}
                    </a>  
                </p> 
            </div> : <div></div> }

            {props.currentInformation == 2 ?  
            <div className="pb-1 pt-1">
            <h3 className="pb-1 px-0">Your Social Media:</h3>
            <p>
                <a className="italic font-bold text-grey-darkest" 
                href={marker.description.socials.facebook}>Facebook{" "}
                </a>                 
            </p>
            <p>
                <a className="italic font-bold text-grey-darkest" 
                href={marker.description.socials.twitter}> Twitter{" "}
                </a>  
            </p>
            <p>
                <a className="italic font-bold text-grey-darkest" 
                href={marker.description.socials.instagram}> Instagram{" "}
                </a>  
            </p>            
            </div> : <div></div> }


            
            <div className="absolute inline-flex w-400 sm:w-300 justify-around pin-b pt-4 pin-l pb-2">    
                <FontAwesomeIcon 
                icon={faAngleLeft} 
                className="fa-3x text-almost-transparent hover:text-grey-darkest cursor-pointer"
                onClick={()=>{                   
                    if (props.currentInformation - 1 >= 0 ) {
                        props.toggleInfoSection(
                            props.currentInformation - 1                            
                        )                        
                    } 
                    else {                        
                        props.toggleInfoSection(
                            locationAmount - 1
                        )                        
                    }
                }}
                 /> 
                <div style={{
                    color: '#b7ae07',
                    borderLeft: '2px solid rgba(183, 174, 7, 0.53)',
                    height: '40px',
                    width: '3px',
                    marginTop: '5px',
                }} 
                ></div>
                <FontAwesomeIcon
                 icon={faAngleRight} 
                 className="fa-3x text-almost-transparent hover:text-grey-darkest cursor-pointer" 
                 onClick={()=>{                     
                    if (props.currentInformation + 1 < locationAmount ) {
                        props.toggleInfoSection(
                            props.currentInformation + 1                            
                        )                        
                    } 
                    else {                        
                        props.toggleInfoSection(
                            0
                        )                        
                    }
                 }}
                 />
            </div>
        </div> 
</div>
  );
};

export default InfoSection;
