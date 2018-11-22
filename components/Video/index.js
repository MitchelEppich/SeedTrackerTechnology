import React from "react"

// let screen = window.innerWidth;
// console.log("test", screen )

const Video = () => {    
    return (        
        <div id="video" className="w-full h-full bg-yellow relative">  
            <div>
                <video className="w-full overflow-hidden" autoPlay loop>    
                {/* {screen.innerWidth > 650 ? (          */}
                    <source src="../../static/video/stt_1920.mp4" type="video/mp4"></source> 
                    {/* ):            
                    (<source src="../../static/video/stt_360.mp4" type="video/mp4"></source>) } */}                   
                </video>
            </div>
        </div>        
    )
}

export default Video 