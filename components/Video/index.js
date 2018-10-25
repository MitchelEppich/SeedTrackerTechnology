import React from "react"

const Video = () => {
    return (
        <div id="video" className="w-full h-full bg-yellow relative">        
            <div className="absolute w-full h-full">
            <div className="w-full h-full total-center text-white z-50">
                <h1 className="h1-title ">TRACKING YOUR SEEDS AROUND THE WORLD</h1>
            </div></div>  
            <div>
                <video className="w-full h-full overflow-hidden" autoPlay loop>            
                    <source src="../../static/video/mainvideo.mp4" type="video/mp4"></source>
                </video>
                </div>
                
            
        </div>
        
    )
}

export default Video 