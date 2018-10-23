/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

// const uri = `https://growreel-dev.herokuapp.com:443/graphql`;
// const uri = "http://localhost:3000/graphql";
// const uri = "http://192.168.0.43:3000/graphql";
const uri = "http://localhost:3000/graphql";

const imports = {
};

const actionTypes = {
  TRACK_NUMBER:"TRACK_NUMBER",
  SEARCH:"SEARCH",
  TOGGLE_INFO_SECTION: "TOGGLE_INFO_SECTION",
  TOGGLE_LANDMARKS: "TOGGLE_LANDMARKS",
  CLOSE_ALL: "CLOSE ALL",
  SET_LOCATIONS: "SET_LOCATIONS",
  TOGGLE_COPYRIGHT: "TOGGLE_COPYRIGHT", 
};

const actions = {
  // shiftPosition: (position) => {    
  //   return {
  //     type: actionTypes.SHIFT_POSITION,
  //     position: position
  //   }  
  // },
  trackNumber: (number) => {
    return {
      type: actionTypes.TRACK_NUMBER,
      number: number
    }
  },
  search: (value) => {   
    return {
      type: actionTypes.SEARCH,
      value: value
    }
  },
  toggleInfoSection: (index) => {  
    return {
      type: actionTypes.TOGGLE_INFO_SECTION,
      index: index
    }
  },
  toggleLandmarks: (index) => {  
    return {
      type: actionTypes.TOGGLE_LANDMARKS,
      index: index
    }
  },
  toggleCopyright: () => {  
    return {
      type: actionTypes.TOGGLE_COPYRIGHT      
    }
  },  
  closeAll: input => {    
    return {
      type: actionTypes.CLOSE_ALL,
      input: input
    };
  },
  setLocations: input => {   
    return {
      type: actionTypes.SET_LOCATIONS,
      input: input
    };
  },

};

const query = {
};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
