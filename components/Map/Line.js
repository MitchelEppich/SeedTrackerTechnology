import React from "react"

const Line = ({ mapState: {center, width, height, zoom }, latLngToPixel, coordsArray, }) => {
      if (coordsArray.length < 2) {
      return null
    }

    

    
    

    let pixel = latLngToPixel(coordsArray[0])
    let path = ""
    for (let i = 1; i < coordsArray.length; i++) {
      let pixel2 = latLngToPixel(coordsArray[i])
      if(i == 1) {
        path = path + `M${pixel[0]},${pixel[1]}`
      } else if(i == coordsArray.length){
        path = path + `Z${pixel[0]},${pixel[1]}`
      } else {
        path = path + `L${pixel[0]},${pixel[1]}`
      }
      pixel = pixel2
    }
    let adjust = zoom == 4 ? 2900 : 500 + (2000 * ( Math.pow(2, zoom - 4)))
    
    

    console.log("TOTAL LENGHT: ", ((coordsArray[0][0]) + (coordsArray[1][0]) + (coordsArray[2][0]) ), ((coordsArray[0][0]) + (coordsArray[1][1]) + (coordsArray[2][1]) ), "FIRST PART", coordsArray[0][0], "SECOND PART", coordsArray[1][0], "LAST PART", coordsArray[2][0]  )


    let pathObj = 
    <g>
          {/* The path */}
          <path 
            className="path"
            d={path} 
            style={{
              animation: `dash ${10}s linear forwards`,
              strokeDasharray: adjust,
              strokeDashoffset: adjust,
              motionPath: `path('${path}')`,
           
             }}>
          </path>

        
        <path 
          className="marker" 
          fill="currentColor" 
          d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z" 
          style={{
            motionPath: `path('${path}')`,
            offsetPath: `path('${path}')`,
            animation: `move ${10}s linear forwards`,
            transform:"scale(0.06) translateX(-50px) translateY(-250px)",          
           }}>
        </path>        
    
    </g>

    return ( 
      <div>       
      <svg width={width} height={height} style={{ top: 0, left: 0 }}>
        {pathObj}        
      </svg> 
      </div>
    )
  }

  export default Line;