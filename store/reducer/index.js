/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

const initialState = {  
  trackNumber: null,
  searched: false,
  navbarSearch: null,
  currentLocation: -1,
  currentInformation: -1,
  showCopyright: false,
  landmarks: {
    "spain": {
      name: "Spain",
      anchor: [41.24,-4.39],
      description: {
        germination: {
          "30" : "91%",
          "45" : "89%",
          "house" : "94%"
        },
        dates: {
          "depart" : "Jun 9",
          "harvest" : "Aug 1",
          "package" : "Aug 2",
          "ship" : "Aug 9"
        },
        imageUrl: "https://tokesignals.com/wp-content/uploads/2014/05/original-5.jpg",
        website: "https://www.tilray.com/",
        socials: {
          "facebook" : "http://www.instagram.com",
          "twitter" : "http://www.instagram.com",
          "instagram": "http://www.instagram.com"
        }
      }
    },
    "cks": {
      name: "Crop King Seeds",
      anchor: [49.268,-122.981],
      description: {
        germination: {
          "30" : "91%",
          "45" : "89%",
          "house" : "94%"
        },
        dates: {
          "depart" : "Jun 9",
          "harvest" : "Aug 1",
          "package" : "Aug 2",
          "ship" : "Aug 9"
        },
        imageUrl: "http://www.marijuanaseedscenter.com/wp-content/uploads/2016/05/crop-king-seeds-logo-283x300.png",
        website: "",
        socials: {
          "facebook" : "http://www.instagram.com",
          "twitter" : "http://www.instagram.com",
          "instagram": "http://www.instagram.com"
        }
      }
    },
    "swg": {
      anchor: [49.2687,-123.2428]
    },
    "mjsc.ca": {
      anchor: [49.1887,-123.0812]
    },
    "mjsc.com": {
      anchor: [49.1887,-123.0812]
    },
    "mjg": {
      anchor: [49.2332,-122.9931]
    },
    "bvr": {
      anchor: [49.29173,-123.13522]
    },
    "snm": {
      anchor: [49.2775,-123.0440]
    },
    "sfw": {
      anchor: [49.27280,-123.15233]
    },
  },
  locations: null,
}

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRACK_NUMBER:   
      return updateObject(state, {
        trackNumber:  action.number
      });
    case actionTypes.SEARCH:    
      return updateObject(state, {
        searched:  action.value,
        navbarSearch: state.trackNumber
      });
    case actionTypes.TOGGLE_INFO_SECTION:    
      return updateObject(state, {  
        currentInformation: action.index,      // ! to toggle the state
      });
    case actionTypes.TOGGLE_LANDMARKS: 
      return updateObject(state, {  
        currentLocation: action.index    
      });  
    case actionTypes.TOGGLE_COPYRIGHT: 
      return updateObject(state, {  
        showCopyright: !state.showCopyright    
      });     
    case actionTypes.CLOSE_ALL:  
      return updateObject(state, {   
        currentInformation: -1,
        currentLocation: -1       
      });
    case actionTypes.SET_LOCATIONS:  
      return updateObject(state, {   
        locations: action.input       
      });
   
    default:
      return state;
  }
};

export default indexReducer
// export default combineReducers({
// });
