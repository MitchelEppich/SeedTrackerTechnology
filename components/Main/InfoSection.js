import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { width } from "window-size";

library.add(faTimes);


const InfoSection = props => {     

    let marker = props.locations[props.currentInformation] 
    if (marker == null) return <div></div>

            return (
                <div className="absolute bg-yellow info-popup pin-b pin-l z-50 p-2">
            <div className="flex mb-2">                
                <span className="w-1/3" >
                    <img style={{borderRadius:"2%", height:"120px", width:"120px"}} className="p-2" src={marker.description.imageUrl}/>
                </span>
                <h2 className="w-2/3 text-navy-blue p-2 text-center">{marker.name}</h2>
                <div
                    className="cursor-pointer text-center h-10 w-10 pt-2 hover:bg-grey-darkest hover:text-white float-right"
                    onClick={() => {                    
                        props.closeAllHandler();
                    }}
                    >
                    <FontAwesomeIcon icon={faTimes} className="fa-lg" />
                </div>
            </div>           
            <hr style={{ backgroundColor: 'rgba(21, 21, 21, 0.31)', height: '2px'}} />
            <div className="p-2">                
                <div className="pb-1 pt-1">
                    <h3 className="p-2 px-0">Details:</h3>
                    <p>Departure Date: <span className="italic font-bold">{marker.description.dates["depart"]}</span> </p>
                    <p>Harvest Date: <span className="italic font-bold">{marker.description.dates["harvest"]}</span> </p>
                    <p>Package Date: <span className="italic font-bold">{marker.description.dates["package"]}</span></p>
                    <p>Ship Date: <span className="italic font-bold">Approx {marker.description.dates["ship"]}</span></p>    
                </div>    
                <hr style={{ backgroundColor: 'rgba(21, 21, 21, 0.31)', height: '2px'}} />        
                <div className="pb-1 pt-1">
                    <h3 className="p-2 px-0">Germination:</h3>
                    <p>30 days: <span className="italic font-bold">{marker.description.germination["30"]}</span></p>
                    <p>45 days: <span className="italic font-bold">{marker.description.germination["45"]}</span></p>
                    <p>In house: <span className="italic font-bold">{marker.description.germination["house"]}</span></p>                
                    <p>Facts on Seeds: <span className="italic font-bold">Very powerfull</span></p>   
                </div>   
            </div>
        </div>
            )
    
}


export default InfoSection