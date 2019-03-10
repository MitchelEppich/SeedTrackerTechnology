import React from "react";

const line = ({
  mapState: { center, width, height, zoom },
  latLngToPixel,
  coordsArray,
  ...props
}) => {
  let _coordsArray = [...coordsArray];
  if (_coordsArray.length < 2) {
    return null;
  }

  let _speed = props.speed;
  let _delay = props.delay;

  let point;
  let path;

  while (_coordsArray.length != 0) {
    point = latLngToPixel(_coordsArray.shift());

    // Start of path
    if (path == null)
      // Move to start
      path = `M${point[0]} ${point[1]}`;
    else path = path + `L${point[0]} ${point[1]}`; // Add line point
  }

  let adjust = zoom == 4 ? 2900 : 500 + 2100 * Math.pow(2, zoom - 4);

  let pathObj = (
    <g>
      {/* The path */}
      <path
        fill="transparent"
        className="marker"
        d={path}
        style={{
          animation: `dash ${_speed}s linear forwards`,
          animationDelay: `${_delay}s`,
          strokeDasharray: adjust,
          strokeDashoffset: adjust,
          stroke: "rgba(181, 181, 181, 0.76)",
          strokeWidth: "6px"
        }}
      />
      <path
        className="marker"
        fill="#fff200"
        d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"
        style={{
          motionPath: `path('${path}')`,
          offsetPath: `path('${path}')`,
          animation: `move ${_speed}s linear forwards`,
          animationDelay: `${_delay}s`,
          transform: "scale(0) translateX(-50px) translateY(-250px)",
          WebkitTransform: "scale(0) translateX(-50px) translateY(-250px)",
          OTransform: "scale(0) translateX(-50px) translateY(-250px)",
          MozTransform: "scale(0) translateX(-50px) translateY(-250px)",
          MsTransform: "scale(0) translateX(-50px) translateY(-250px)"
        }}
      />
    </g>
  );

  return (
    <div className="pin-t absolute">
      {props.misc.clientInfo.context != null &&
      props.misc.clientInfo.context != 2 ? (
        <svg width={width} height={height} style={{ top: 0, left: 0 }}>
          {pathObj}
        </svg>
      ) : null}
    </div>
  );
};

export default line;
