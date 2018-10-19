import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);


const InfoSection = props => {  
    let marker = props.locations[props.currentInformation]
    
    if (!marker) return <div></div>

       return (
        <div className="absolute info-popup pin-b pin-l z-50 p-5">
        <div className="flex mb-2">                
            <span className="w-1/3" >
                <img style={{borderRadius:"2%", height:"120px"}} src={marker.description.imageUrl}/>
            </span>
            <h2 className="w-2/3 text-black p-2 text-center">{marker.name}</h2>
            <div
                className="cursor-pointer text-center h-10 w-10 pt-2 hover:bg-red float-right"
                onClick={() => {
                    props.closeAllHandler();
                }}
                >
                <FontAwesomeIcon icon={faTimes} className="fa-lg" />
            </div>
        </div>            
        <div>
            <h3 className="p-2 px-0">Details:</h3>
            <span>
                <p>Departure Date: <span className="italic font-bold">{marker.description.dates["depart"]}</span> </p>
                <p>Harvest Date: <span className="italic font-bold">{marker.description.dates["harvest"]}</span> </p>
                <p>Package Date: <span className="italic font-bold">{marker.description.dates["package"]}</span></p>
                <p>Ship Date: <span className="italic font-bold">Approx {marker.description.dates["ship"]}</span></p>    
            </span>    
            <h3 className="p-2 px-0">Germination:</h3>
            <span>
                <p>30 days: <span className="italic font-bold">{marker.description.germination["30"]}</span></p>
                <p>45 days: <span className="italic font-bold">{marker.description.germination["45"]}</span></p>
                <p>In house: <span className="italic font-bold">{marker.description.germination["house"]}</span></p>
                
                <p>Facts on Seeds: <span className="italic font-bold">Very powerfull</span> </p>
                
            </span>   

             
                       
        </div>
    </div>
    )
}


export default InfoSection