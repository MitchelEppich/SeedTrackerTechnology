import React from "react"
import HomeTracker from "../Main/HomeTracker"
import ReactDOM from 'react-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker/react'
import Overlay from 'pigeon-overlay'
import Line from "../Map/Line"
import InfoSection from "../Main/InfoSection"

library.add(faPlus, faMinus);



const Main = props => {  

let markers = props.locations
    const showMarkers = markers.map((marker, index) => {
        if (index == markers.length - 1) return null
        // console.log("MARKER", marker)
        return (
            <Overlay
                key={index}
                anchor={marker.anchor} 
                payload={index}>
                <div 
                onMouseOver={() => {      
                    console.log(props.currentInformation)             
                    props.toggleLandmarks(index)                    
                }}
                onMouseOut={() => {                    
                    props.toggleLandmarks(-1)
                }}
                onClick={()=>{
                    if (marker.description) 
                        props.toggleInfoSection(props.currentInformation == index ? -1 : index)
                }}
                style={{
                    position: 'absolute',
                    backgroundColor: "#ac3130",
                    boxShadow: "rgba(0, 0, 0, 0.73) 1px 1px 5px",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    transform: "translateX(-12.5px) translateY(-12.5px)",
                    cursor: "pointer"
                    }}>                    
                </div>
                {props.currentLocation == index ? 
                (
                    <div className="info-landmark">                     
                      <h2 className="text-almost-brown font-bold bg-yellow text-center p-2">{marker.name}</h2>
                        
                                         
                      <div className="mx-auto arrow-down" />
                    </div>
                  ) : null}
            </Overlay>
        )
    })



    
    return (
        <div 
        style={{
            width: "100vw",
            height: "100vh",
            overflowY: "hidden",
            overflowX: "hidden"            
        }}
        >        
            <Map 
            limitBounds='edge' 
            defaultCenter={[0, 0]}
            // defaultCenter={[45.21, -82.27]}
             zoom={4} maxZoom={7} minZoom={3}
              >
                {showMarkers} 
                <Line coordsArray={ markers.map(marker => marker.anchor) } />    

            </Map>
            {props.currentInformation != -1 ? <InfoSection {...props} /> : null }
            

            {/* <div className="absolute pin-b pin-l">           
                {Object.keys(markers).map(key => (
                    <button key={key} onClick={() => updateValues({ center: markers[key][0], zoom: markers[key][1] })}>{markers[key]}</button>
                ))}
            </div> */}
            
            <HomeTracker />
        </div>
    )
}

export default Main;