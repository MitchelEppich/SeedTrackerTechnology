import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faInfo,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus, faInfo);

const Main = props => {
  return (
    <div className="w-full bg-grey-light">
      
      <div className="bg-blue-new text-white"> 
        <h2 className="text-white p-2 ml-6 pt-4">Welcome CSR,</h2>
        <p className="p-3 ml-6">Please select an option:</p>
      </div>
      
      <div style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: "0",
        right: "0",
        height: "800px"
      }}
      className="w-container h-halfscreen text-white mt-6">
        <div className="inline-flex w-full bg-grey justify-between">
            <div className="h-10 p-2 bg-grey mx-2">
              CKS <span style={{
                borderRadius: "50%",
                padding: "3px 5px",
                margin: "3px",
                background: "#636669",
                color: "white",
              }}> 72</span>
            </div>
            <div className="h-10 p-2 bg-grey mx-2">
              SONOMA  <span style={{
                borderRadius: "50%",
                padding: "3px 5px",
                margin: "3px",
                background: "#636669",
                color: "white",
              }} > 43</span>
            </div>
            <div className="h-10 p-2 bg-grey mx-2">
              SUNWEST <span style={{
                borderRadius: "50%",
                padding: "3px 5px",
                margin: "3px",
                background: "#636669",
                color: "white",
              }} > 14</span>
            </div>
            <div className="h-10 p-2 bg-grey mx-2">
              BEAVER <span style={{
                borderRadius: "50%",
                padding: "3px 5px",
                margin: "3px",
                background: "#636669",
                color: "white",
              }} > 27</span>
            </div>
            <div className="h-10 p-2 bg-grey mx-2">
              STARFLOWER <span style={{
                borderRadius: "50%",
                padding: "3px 5px",
                margin: "3px",
                background: "#636669",
                color: "white",
              }} > 13</span>
            </div>
            <div className="h-10 p-2 bg-grey mx-2">
              MJG <span style={{
                borderRadius: "50%",
                padding: "3px 5px",
                margin: "3px",
                background: "#636669",
                color: "white",
              }} >13</span>
            </div>
            <div className="h-10 p-2 bg-grey mx-2">
              MJSC <span style={{
                borderRadius: "50%",
                padding: "3px 5px",
                margin: "3px",
                background: "#636669",
                color: "white",
              }} > 22</span>
            </div>
          </div>

          <div className="inline-block w-full h-650 bg-white text-black overflow-y-auto">
            <div className="inline-flex w-full p-2 bg-grey-darker uppercase text-white text-sm absolute"> 
              <div className="w-1/5 pl-2">Number</div>
              <div className="w-3/5 pl-2">Order Number</div>
              <div className="w-1/5 pl-2 pl-4">Action</div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter mt-8"> 
              <div className="w-1/5 pl-2">1</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">2</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">3</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">4</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">5</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">6</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">7</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">5</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">6</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">7</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">5</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">6</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">7</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">5</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">6</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">7</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">5</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">6</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">7</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">5</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">6</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">7</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">5</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2"> 
              <div className="w-1/5 pl-2">6</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
            <div className="inline-flex w-full p-2 bg-grey-lighter"> 
              <div className="w-1/5 pl-2">7</div>
              <div className="w-3/5 pl-2">Order #455454</div>
              <div className="w-1/5 pl-2"> <a href="" className="uppercase bg-red text-white px-3 py-1">Claim</a></div>              
            </div>
          </div>  

        </div>
    </div>
   
  );
};

export default Main;
