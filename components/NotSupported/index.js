import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faExclamationCircle);

const NotSupported = props => {
  return (
    <div className="w-full bg-black text-white browsers-list flex-1 h-screen content-center text-center">
      {/* <img src="../imgs/Thumbnail.png" alt="No Internet" class="img-error" /> */}
      {/* <FontAwesomeIcon icon={faExclamationCircle} className="mt-32 fa-9x sm:fa-5x text-yellow"/> */}
      <div>
          <img style={{
          transform: 'scale(0.9)',   
            width: "550px",
            height: "300px",   
          }} 
          src="../static/imgs/airplane.svg"  className=""/>
    </div>     
    <h1 className="text-yellow mb-12">Mayday... Mayday!</h1>
      <h2 className="mt-2 text-5x1 sm:text-lg px-5 mb-4 ">
        Unfortunately, this browser does not support our features!
      </h2> 
      <p className="text-5x1 sm:text-md">
        Please, choose one of these to download and track your seeds to grow like a Pro!
      </p>
      <div className="w-full browsers-list">
        <div className="browser-item text-center">
          <a href="https://www.google.com/chrome/" target="_blank">
            <img
              src="../static/imgs/browser_icons/logo-chrome.png"
              alt="logo chrome"
              className="logo-browsers text-center"
            />
            <p className="text-center text-white">Chrome</p>
          </a>
        </div>
        <div className="browser-item text-center">
          <a href="https://www.mozilla.org/pt-PT/firefox/new/" target="_blank">
            <img
              src="../static/imgs/browser_icons/logo-firefox.png"
              alt="logo firefox"
              className="logo-browsers text-center" 
            />
            <p className="text-center text-white">Firefox</p> 
          </a>
        </div>
        <div className="browser-item text-center">
          <a href="https://www.opera.com/pt-br/download" target="_blank">
            <img
              src="../static/imgs/browser_icons/logo-opera.png"
              alt="logo opera"
              className="logo-browsers text-center"
            />
            <p className="text-center text-white">Opera</p>
          </a>
        </div>
        <div className="browser-item text-center">
          <a href="https://support.apple.com/downloads/safari" target="_blank">
            <img
              src="../static/imgs/browser_icons/logo-safari.png"
              alt="logo safari"
              className="logo-browsers text-center"
            />
            <p className="text-center text-white">Safari</p>
          </a>
        </div>
      </div>
      <div className="w-full">
        <p className="line-through text-black mt-24">
          Internet Explorer and Edge sucks
        </p>
      </div>
    </div>
  );
};

export default NotSupported;
