import React from "react"

const Video = () => {
    return (
        <div className="w-full h-full mt-16 relative">        
            <div className="absolute w-full h-full"></div>  
            <div>
                <video className="w-full h-full" autoPlay controls loop>            
                    <source src="../../static/video/mainvideo.mp4" type="video/mp4"></source>
                </video>
                </div>
                
            
        </div>
        
    )
}

export default Video 