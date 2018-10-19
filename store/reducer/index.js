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
  locations: 
  [
    {
      name: "Spain",
      anchor: [50.08,-22.81],
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
    {
      name: "Crop King Seeds",
      anchor: [29.25,-13.14],
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
    {
      name: "YOU",
      anchor: [19.514, 49.043],
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
    {
      name: "YOU",
      anchor: [19.514, 49.043],
      description: undefined
    },
    {
      name: "NULL",
      anchor: [null,null]
    },
  ],
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
    console.log("NOOOO")
      return updateObject(state, {  
        currentInformation: action.index,      // ! to toggle the state
      });
    case actionTypes.TOGGLE_LANDMARKS: 
      return updateObject(state, {  
        currentLocation: action.index    
      });  
   
    default:
      return state;
  }
};

export default indexReducer
// export default combineReducers({
// });
