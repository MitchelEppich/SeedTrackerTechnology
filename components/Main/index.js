import React from "react"
import HomeTracker from "../Main/HomeTracker"
import ReactDOM from 'react-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Map from 'pigeon-maps'
// import Marker from 'pigeon-marker/react'
import Overlay from 'pigeon-overlay'
import Line from "../Map/Line"
import InfoSection from "../Main/InfoSection"


library.add(faPlus, faMinus, faInfo);

const Main = props => {    

let markers = props.locations

    const showMarkers = markers != null ? 
    markers.map((marker, index) => {
        if (index == markers.length - 1) return null

        return (
            <Overlay            
                key={index}                
                anchor={marker.anchor} 
                payload={index}>
                <div 
                onMouseOver={() => {
                    props.toggleLandmarks(index)  
                                      
                }}
                onMouseOut={() => {                    
                    props.toggleLandmarks(-1)
                }}
                onClick={()=>{
                    if (marker.description) 
                        props.toggleInfoSection(props.currentInformation == index ? -1 : index)
                        
                }}
                className="landmark-points"
                // style={{ 
                //     position: 'absolute',
                //     backgroundColor: "#383838",
                //     boxShadow: "rgba(0, 0, 0, 0.73) 1px 1px 5px",
                //     width: "25px",
                //     height: "25px",
                //     borderRadius: "50%",
                //     transform: "translateX(-12.5px) translateY(-12.5px)",
                //     cursor: "pointer"
                // }}
                > 
                       
                </div>
                {props.currentLocation == index ? 
                (
                    <div className="info-landmark">                     
                      <h3 className="text-navy-blue font-bold bg-yellow uppercase text-center p-2">
                        {marker.name}
                      </h3>                 
                      <div className="mx-auto arrow-down" />
                    </div>
                  ) : null}
            </Overlay>
        )
    }) : null;



    
    return (
        <div
        id="stt" 
        style={{            
            height: "100vh",
            overflowY: "hidden",
            overflowX: "hidden",   
            position: "relative"         
        }}
        >        
            {props.searched ? <div className="inline-flex mt-24 absolute">
                                <input 
                                    className="h-10 w-searchBar sm:w-200 md:w-300 inline-flex border-2 border-light-blue p-2 z-50 ml-4" 
                                    placeholder="Track Number.. #8454d91Xcdx"
                                    id="searchvalue"
                                    defaultValue={props.searched ? props.navbarSearch : "" }
                                    onChange={e => {
                                        let input = e.target.value;
                                        console.log(input)
                                        if (input.length != 0) {
                                        props.trackNumber(e.target.value, 12);                      
                                        }
                                    }}
                                />
                                <button 
                                    style={{transition: 'all 0.5s ease'}}
                                    className="h-10 bg-grey-darkest inline-flex z-50 ml-4 text-white text-lg border border-1 border-light-brown px-6 font-bold hover:bg-grey-light hover:text-grey-darkest hover:border-transparent hover:border uppercase"
                                    onChange={e => {
                                        let input = e.target.value;
                                        console.log(input)
                                        if (input.length != 0) {
                                        props.trackNumber(e.target.value, 12);                      
                                        }
                                    }}
                                    onClick={e => {
                                        let searchvalue = document.querySelector('#searchvalue') 
                                        console.log("Searched Value: ", searchvalue.value)                                        
                                    }}>Search
                                </button>                
                </div> : <div />}

            <Map 
                limitBounds='edge'    
                animateMaxScreens={9}            
                center={props.currentInformation != -1 ? props.locations[props.currentInformation].anchor : [47.81,-50.14]}         
                zoom={props.currentInformation != -1 ? 7 : 4} 
                maxZoom={11} 
                minZoom={3}               
                metaWheelZoom={true}
                metaWheelZoomWarning={"Keep Pressing Window or CMD button to Scroll"}
              >
            
                {showMarkers} 

                {markers != null ? <Line coordsArray={ markers.map(marker => marker.anchor) } /> : null}    

            </Map>
            {props.currentInformation != -1 ? <InfoSection {...props} /> : null }
           

            <div className="absolute inline-flex pin-b pin-r mb-6 mr-4"> 
                <div className="inline-flex h-12">
                    {props.showCopyright == true ?     
                    
                    <div className="inline-flex">                        
                        <div className="bg-grey-darkest w-200 h-12"> 
                            <h4 className="text-center p-2 py-4 mr-1 text-sm text-white">© Copyright 2018 | SST</h4>   
                        </div>
                        <div className="arrow-right"></div>
                    </div>
                     : 
                     <div className="inline-flex h-12"/>
                     }
                    <FontAwesomeIcon 
                        icon={faInfoCircle} 
                        className="fa-2x h-12 text-grey-darkest cursor-pointer"
                        onClick={()=> {   
                            props.toggleCopyright()
                       }}/>     
                </div>
            </div>

            {/* LOCATION BUTTONS TO NAVIGATE 
             <div className="absolute pin-b pin-l">           
                {Object.keys(props.locations).map(key => (
                    <button 
                        className="bg-yellow m-2 p-2 text-almost-brown" 
                        key={key} 
                        onClick={() => {    
                            props.toggleInfoSection(props.currentInformation == key ? -1 : key) }}
                        >
                        {props.locations[key].name}                        
                    </button>
                ))}
            </div> */}
            
            <HomeTracker />
        </div>
    )
}

export default Main