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
        className="absolute w-400 pin-b md:hidden lg:hidden xl:hidden xxl:hidden mb-6 ml-2 sm:mx-0 z-50 p-2 sm:w-7/8 sm:h-250 sm:text-sm bg-white z-50 p-2">

            {/* NOT SMART */}

             {props.currentInformation == 0 ?
            <div className="flex mb-2 justify-between">
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(0)
                }}>Producer</div>
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(1)
                }}>Detail</div>
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(2)
                }}>Tests</div>
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(3)
                }}>Facts</div>
            </div> : null }

            {props.currentInformation == 1 ?
            <div className="flex mb-2 justify-between">
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(0)
                }}>Company</div>
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(1)
                }}>Detail</div>
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(2)
                }}>Tests</div>
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(3)
                }}>Social</div>
            </div> : null }

            {props.currentInformation == 2 ?
            <div className="flex mb-2 justify-between">
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(0)
                }}>Destination</div>
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(1)
                }}>Detail</div>
                <div className="inline-flex p-2 text-center" onClick={()=>{
                    props.setInfoTab(3)
                }}>Social</div>                
            </div> : null }


            <hr style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }} /> 

            {/* COMPANY TAB */}
            {props.infoTab == 0 ? 
            <div className="flex h-140 mb-2">  
                <span className="w-1/3 sm:w-1/2">  
                    <img 
                    style={{ borderRadius: "15px" }}
                    className="p-2 w-imgCard h-imgCard md:w-32 md:h-32 sm:w-20 sm:h-20"
                    src={marker.description.imageUrl} 
                    /> 
                </span>
                {props.currentInformation == 0 ? 
                <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                    <h5 className="text-navy-blue sm:text-lg text-center">Producer:</h5>
                    <h2 className="text-navy-blue sm:text-lg text-center animate-text">                {marker.name}    
                    </h2>
                </span> : null }
                {props.currentInformation == 1 ? 
                <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                    <h5 className="text-navy-blue sm:text-lg text-center">Company:</h5>
                    <h2 className="text-navy-blue sm:text-lg text-center animate-text">
                    {marker.name}
                    </h2>
                </span> : null }
                {props.currentInformation == 2 ? 
                <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                    <h5 className="text-navy-blue sm:text-lg text-center">Destination:</h5>
                    <h2 className="text-navy-blue sm:text-lg text-center animate-text">
                    {marker.name}
                    </h2>
                </span> : null }
                
            </div>
            : null}
            {/* COMPANY TAB END */}
           

           {/* DETAILS TAB */}             
           {props.infoTab == 1 ? 
                <div className="flex h-140 px-2">   
                {props.currentInformation == 0 ?                 
                    <span className="pb-1 pt-1">
                        <h3 className="pb-1 px-0 uppercase">Details:</h3>
                        <p className="font-bold">
                            Departure Date:{" "}
                            <span className="font-normal">
                            {marker.description.dates["depart"]}
                            </span>{" "}
                        </p>
                        <p className="font-bold">
                            Harvest Date:{" "}
                            <span className="font-normal">
                            {marker.description.dates["harvest"]}
                            </span>{" "}
                        </p>            
                    </span>
                    : null }

                {props.currentInformation == 1 ?  
                    <span className="pb-1 pt-1">
                        <h3 className="pb-1 px-0 uppercase">Details:</h3>           
                        <p className="  font-bold">
                            Package Date:{" "}
                            <span className="font-normal">
                            {marker.description.dates["package"]}
                            </span>
                        </p>
                        <p className="  font-bold">
                            Ship Date:{" "}
                            <span className="font-normal">
                            Approx {marker.description.dates["ship"]}
                            </span>
                        </p>
                    </span>
                    : null }

                {props.currentInformation == 2 ?  
                    <span className="pb-1 pt-1">
                        <h3 className="pb-1 px-0 uppercase">Your Details:</h3>           
                        <p className="font-bold">
                            Address:{" "}
                            <span className="font-normal">
                            {marker.description.address.street},{" "} 
                            {marker.description.address.city}
                            </span>
                        </p>
                        <p className="font-bold">
                            Email:{" "}
                            <span className="font-normal">
                            {marker.description.email}
                            </span>
                        </p>                
                    </span> : null }
                </div> : null }
                {/* DETAILS TAB END */}
            

                {/* TEST SECTION TAB */}
            {props.infoTab == 2 ? 
                <div className="flex h-140 px-2">  
                {props.currentInformation == 0 ?  
                    <span className="pb-1 pt-1">
                        <h3 className="pb-1 px-0 uppercase">Germination Tests:</h3>
                        <p className="font-bold">
                            30 days:{" "}
                            <span className="font-normal">
                            {`${rand.floatBetween(89.0, 94.9).toFixed(1)}%`}
                            </span>
                        </p>
                        <p className="font-bold">
                            45 days:{" "}
                            <span className="font-normal">
                            {`${rand.floatBetween(89.0, 94.9).toFixed(1)}%`}
                            </span>
                        </p>   
                     </span> : null }                 

                    {props.currentInformation == 1 ?  
                    <span className="pb-1 pt-1">
                        <h3 className="pb-1 px-0 uppercase">Germination Tests:</h3>            
                        <p className="font-bold">
                            In house:{" "}
                            <span className="font-normal">
                            {`${rand.floatBetween(84, 95).toFixed(1)}%`}
                            </span>
                        </p>                        
                    </span> : null } 
                    </div> : null }
                {/* TEST SECTION TAB END */}



                {/* SOCIAL MEDIA TAB */}
                {props.infoTab == 3 ? 
                <div className="flex h-140 px-2"> 
                    {props.currentInformation == 0 ?  
                    <span className="pb-1 pt-1"> 
                        <h3 className="pb-1 px-0 uppercase">Facts on Seeds:</h3>
                        <p className="font-bold">
                            Origin:{" "}
                            <span className="font-normal">
                            {marker.description.facts.origin}
                            </span>
                        </p>
                        <p className="font-bold">
                            Effects:{" "}
                            <span className="font-normal">
                            {marker.description.facts.effects}
                            </span>
                        </p>
                        <p className="font-bold">
                            Potency:{" "}
                            <span className="font-normal">
                            {`${rand.floatBetween(84, 93).toFixed(1)}%`}
                            </span>
                        </p>        
                    </span> : null }
                    {props.currentInformation == 1 ?  
                    <span className="pb-1 pt-1"> 
                        <h3 className="pb-1 px-0 uppercase">{marker.name} - Social Media:</h3>
                        <p>
                            <a className="font-bold text-grey-darkest" 
                            href={marker.description.socials.facebook}>Facebook{" "}
                            </a>                 
                        </p>
                        <p>
                            <a className="font-bold text-grey-darkest" 
                            href={marker.description.socials.twitter}> Twitter{" "}
                            </a>  
                        </p>
                        <p>
                            <a className="font-bold text-grey-darkest" 
                            href={marker.description.socials.instagram}> Instagram{" "}
                            </a>  
                        </p>           
                    </span> : null }
                

                    {props.currentInformation == 2 ?  
                    <span className="pb-1 pt-1">
                    <h3 className="pb-1 px-0 uppercase">Your Social Media:</h3>
                    <p>
                        <a className="font-bold text-grey-darkest" 
                        href={marker.description.socials.facebook}>Facebook{" "}
                        </a>                 
                    </p>
                    <p>
                        <a className="font-bold text-grey-darkest" 
                        href={marker.description.socials.twitter}> Twitter{" "}
                        </a>  
                    </p>
                    <p>
                        <a className="font-bold text-grey-darkest" 
                        href={marker.description.socials.instagram}> Instagram{" "}
                        </a>  
                    </p>
                    </span> : null }
                </div> : null }
                {/* SOCIAL MEDIA TAB END */}

                <hr style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }} /> 

                <div className="absolute inline-flex w-400 sm:w-full sm:h-12 sm:pt-1 justify-around pin-b pt-4 pin-l pb-2">    
                    <FontAwesomeIcon 
                    icon={faAngleLeft} 
                    className="fa-3x text-almost-transparent hover:text-grey-darkest cursor-pointer animate-icons"
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
                        borderLeft: '2px solid rgba(0, 0, 0, 0.23)',
                        height: '30px',
                        width: '3px',
                        marginTop: '9px',
                    }} 
                    ></div>
                    <FontAwesomeIcon
                    icon={faAngleRight} 
                    className="fa-3x text-almost-transparent hover:text-grey-darkest cursor-pointer animate-icons" 
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





































            {/* PC VERSION: */}

            <div
        style={{ 
            borderRadius: "2%",          
        }}
        className="absolute w-400 min-h-card h-550 sm:hidden pin-b pin-l mb-12 ml-2 z-50 p-2  bg-white z-50 p-2"> 
            <div className="flex mb-2">
                <span className="w-1/3 sm:w-1/2">                
                    {props.currentInformation == 1 || props.currentInformation == 2 ? 
                    <img style={{ borderRadius: "15px" }}
                        className="p-2 w-imgCard h-imgCard md:w-32 md:h-32 sm:w-20 sm:h-20"
                        src={marker.description.imageUrl}
                    /> 
                    : null } 
                </span>
                {props.currentInformation == 0 ? 
                <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                    <h5 className="text-navy-blue sm:text-lg text-center">Producer:</h5>
                    <h2 className="text-navy-blue sm:text-lg text-center animate-text">
                    {marker.name}
                    </h2>
                </span> : null }
                {props.currentInformation == 1 ? 
                <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                    <h5 className="text-navy-blue sm:text-lg text-center">Company:</h5>
                    <h2 className="text-navy-blue sm:text-lg text-center animate-text">
                    {marker.name}
                    </h2>
                </span> : null }
                {props.currentInformation == 2 ? 
                <span className="w-2/3 text-navy-blue p-2 sm:text-lg text-center">
                    <h5 className="text-navy-blue sm:text-lg text-center">Destination:</h5>
                    <h2 className="text-navy-blue sm:text-lg text-center animate-text">
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
                    <h3 className="pb-1 px-0 uppercase">Details:</h3>
                    <p className="font-bold">
                        Departure Date:{" "}
                        <span className="font-normal">
                        {marker.description.dates["depart"]}
                        </span>{" "}
                    </p>
                    <p className="font-bold">
                        Harvest Date:{" "}
                        <span className="font-normal">
                        {marker.description.dates["harvest"]}
                        </span>{" "}
                    </p>            
                </div>
                : <div></div> }

                {props.currentInformation == 1 ?  
                <div className="pb-1 pt-1">
                    <h3 className="pb-1 px-0 uppercase">Details:</h3>           
                    <p className="  font-bold">
                        Package Date:{" "}
                        <span className="font-normal">
                        {marker.description.dates["package"]}
                        </span>
                    </p>
                    <p className="  font-bold">
                        Ship Date:{" "}
                        <span className="font-normal">
                        Approx {marker.description.dates["ship"]}
                        </span>
                    </p>
                </div>
                : <div></div> }

                {props.currentInformation == 2 ?  
                <div className="pb-1 pt-1">
                    <h3 className="pb-1 px-0 uppercase">Your Details:</h3>           
                    <p className="font-bold">
                        Address:{" "}
                        <span className="font-normal">
                        {marker.description.address.street},{" "} 
                        {marker.description.address.city}
                        </span>
                    </p>
                    <p className="font-bold">
                        Email:{" "}
                        <span className="font-normal">
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
                    <h3 className="pb-1 px-0 uppercase">Germination Tests:</h3>
                    <p className="font-bold">
                        30 days:{" "}
                        <span className="font-normal">
                        {`${rand.floatBetween(89.0, 94.9).toFixed(1)}%`}
                        </span>
                    </p>
                    <p className="font-bold">
                        45 days:{" "}
                        <span className="font-normal">
                        {`${rand.floatBetween(89.0, 94.9).toFixed(1)}%`}
                        </span>
                    </p>           
                    <hr
                    style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
                    /> 
                    <h3 className="pb-1 px-0 uppercase">Facts on Seeds:</h3>
                    <p className="font-bold">
                        Origin:{" "}
                        <span className="font-normal">
                        {marker.description.facts.origin}
                        </span>
                    </p>
                    <p className="font-bold">
                        Effects:{" "}
                        <span className="font-normal">
                        {marker.description.facts.effects}
                        </span>
                    </p>
                    <p className="font-bold">
                        Potency:{" "}
                        <span className="font-normal">
                        {`${rand.floatBetween(84, 93).toFixed(1)}%`}
                        </span>
                    </p>
                </div> : <div></div> }

                {props.currentInformation == 1 ?  
                <div className="pb-1 pt-1">
                    <h3 className="pb-1 px-0 uppercase">Germination Tests:</h3>            
                    <p className="font-bold">
                        In house:{" "}
                        <span className="font-normal">
                        {`${rand.floatBetween(84, 95).toFixed(1)}%`}
                        </span>
                    </p>  
                    <hr
                    style={{ backgroundColor: "rgba(21, 21, 21, 0.31)", height: "2px" }}
                    /> 
                    <h3 className="pb-1 px-0 uppercase">Social Media:</h3>
                    <p>
                        <a className="font-bold text-grey-darkest" 
                        href={marker.description.socials.facebook}>Facebook{" "}
                        </a>                 
                    </p>
                    <p>
                        <a className="font-bold text-grey-darkest" 
                        href={marker.description.socials.twitter}> Twitter{" "}
                        </a>  
                    </p>
                    <p>
                        <a className="font-bold text-grey-darkest" 
                        href={marker.description.socials.instagram}> Instagram{" "}
                        </a>  
                    </p> 
                </div> : <div></div> }

                {props.currentInformation == 2 ?  
                <div className="pb-1 pt-1">
                <h3 className="pb-1 px-0 uppercase">Your Social Media:</h3>
                <p>
                    <a className="font-bold text-grey-darkest" 
                    href={marker.description.socials.facebook}>Facebook{" "}
                    </a>                 
                </p>
                <p>
                    <a className="font-bold text-grey-darkest" 
                    href={marker.description.socials.twitter}> Twitter{" "}
                    </a>  
                </p>
                <p>
                    <a className="font-bold text-grey-darkest" 
                    href={marker.description.socials.instagram}> Instagram{" "}
                    </a>  
                </p>            
                </div> : <div></div> }


                
                <div className="absolute inline-flex w-400 sm:w-full sm:h-12 sm:pt-1 justify-around pin-b pt-4 pin-l pb-2">    
                    <FontAwesomeIcon 
                    icon={faAngleLeft} 
                    className="fa-3x text-almost-transparent hover:text-grey-darkest cursor-pointer animate-icons"
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
                        borderLeft: '2px solid rgba(0, 0, 0, 0.23)',
                        height: '40px',
                        width: '3px',
                        marginTop: '5px',
                    }} 
                    ></div>
                    <FontAwesomeIcon
                    icon={faAngleRight} 
                    className="fa-3x text-almost-transparent hover:text-grey-darkest cursor-pointer animate-icons" 
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
    
</div>

        
  );
};

export default InfoSection;
