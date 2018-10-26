import React from "react"
import HomeTracker from "../Main/HomeTracker"
import ReactDOM from 'react-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Map from 'pigeon-maps'
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
                payload={index}
            >
                <div 
                    className="landmark-points" 
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
                > 
                </div>

                 {/*  LABEL UNDER LANDMARKS                    
                    
                    <span style={{
                        position: 'absolute',                   
                        color: '#fff200',
                        fontSize: '19px',
                        fontWeight: '900',
                        textShadow: '0 1px 3px #000000',
                        width: '70px',
                        borderRadius: '14px',
                        transform:' translateX(-64.5px) translateY(10.5px)',                 
                     }}> Step {index + 1}                   
                     </span> 
                     
                     */}

                     
                {props.currentLocation == index ? 
                    ( <div className="info-landmark">                     
                        <h3 className="text-navy-blue font-bold bg-yellow uppercase text-center p-2">
                            {marker.name}
                        </h3>                 
                        <div className="mx-auto arrow-down" />
                    </div>
                    ) : 
                    null
                    }
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
            {props.searched ? 
            
                <div className="inline-flex mt-24 absolute">
                    <input 
                        className="h-10 w-searchBar sm:w-200 md:w-300 inline-flex border-2 border-light-blue p-2 z-40 ml-4" 
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
                        className="h-10 bg-grey-darkest inline-flex z-40 ml-4 text-white text-lg border border-1 border-light-brown px-6 font-bold hover:bg-grey-light hover:text-grey-darkest hover:border-transparent hover:border uppercase"
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
                </div> :
                <div />
                }

            {/* MAP API */}
            <Map 
                limitBounds='edge'    
                animateMaxScreens={9}            
                center={props.currentInformation != -1 ? props.locations[props.currentInformation].anchor : [38.927,-90.877]}         
                zoom={props.currentInformation != -1 ? 6: 4} 
                maxZoom={11} 
                minZoom={3}               
                metaWheelZoom={true}
                metaWheelZoomWarning={"Keep Pressing Window or CMD button to Scroll"}
              >            
                {showMarkers} 

                {markers != null ? <Line coordsArray={ markers.map(marker => marker.anchor) } /> : null}
            </Map>


            {/* SHOW INFO SECTION */}
            {props.currentInformation != -1 ? <InfoSection {...props} /> : null }
           
            


            {/* COPYRIGHT ICON */}
            <div className="absolute inline-flex pin-b pin-r mb-6 mr-4"> 
                <div className="inline-flex h-12">
                    {props.showCopyright == true ?  
                    <div className="inline-flex">                        
                        <div className="bg-grey-darkest w-200 h-12"> 
                            <h4 className="text-center p-2 py-4 mr-1 text-sm text-white">
                            © Copyright 2018 | SST</h4>   
                        </div>
                        <div className="arrow-right"></div>
                    </div>
                     : 
                     <div></div>
                     }
                    <FontAwesomeIcon 
                        icon={faInfoCircle} 
                        className="fa-2x h-12 text-grey-darkest cursor-pointer"
                        onClick={()=> {   
                            props.toggleCopyright()
                       }}/>     
                </div>
            </div>




            {/* BOTTOM BUTTONS */}
             <div className="absolute pin-b pin-l ml-2">  
                {props.locations ?                                             
                Object.keys(props.locations).filter(key => {                   
                    if (key >= props.locations.length - 2) return false;
                    return true;
                    
                }).map(key => {
                    // let step = parseInt(key) + 1;                   
                 return (
                    <button 
                        style={{transition: "all 0.5s ease"}}
                        className="bg-grey-darkest m-2 p-2 text-white hover:bg-grey-light hover:text-grey-darkest active:bg-green active:text-white " 
                        key={key} 
                        
                        onClick={() => {    
                            props.toggleInfoSection(props.currentInformation == key ? -1 : key) }}
                        >                        
                        {/* Step {step} - */}
                         {props.locations[key].name}                        
                    </button>
                )}) : null}
            </div> 
            
            <HomeTracker />
        </div>
    )
}

export default Main