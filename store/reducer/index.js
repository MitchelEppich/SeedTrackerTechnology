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
  searched: false,
  number: null,
  currentLocation: -1,
  currentInformation: -1,
  showCopyright: false,
  showMenuCollapsed: false,
  infoTab: 0,
  landmarks: {
    spain: {
      name: "Spain",
      anchor: [41.24, -4.39],
      type: "producer",
      description: {       
        dates: {
          depart: "Jun 9",
          harvest: "Aug 1",          
        },       
        facts: {
          origin: "Madrid, Spain",
          effects: "Indica strains are believed to be physically sedating, perfect for relaxing with a movie or as a nightcap before bed.",
          potency: "90%",
        },
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png",        
      }
    },
    cks: {
      name: "Crop King Seeds",
      anchor: [49.268, -122.981],
      type: "company",
      description: {        
        dates: {        
          package: "Aug 2",
          ship: "Aug 9"
        },        
        imageUrl:
          "http://www.marijuanaseedscenter.com/wp-content/uploads/2016/05/crop-king-seeds-logo-283x300.png",
        website: "http://www.cropkingseeds.com",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
    swg: {
      name: "Crop King Seeds",
      anchor: [49.2687, -123.2428]
    },
    "mjsc.ca": {
      name: "Crop King Seeds",
      anchor: [49.1887, -123.0812]
    },
    "mjsc.com": {
      name: "Crop King Seeds",
      anchor: [49.1887, -123.0812]
    },
    mjg: {
      name: "Crop King Seeds",
      anchor: [49.2332, -122.9931]
    },
    bvr: {
      name: "Beaver Seeds",
      anchor: [49.29173, -123.13522]
    },
    snm: {
      name: "Sonoma Seeds",
      anchor: [49.2775, -123.044]
    },
    sfw: {
      name: "Star Flower Seeds",
      anchor: [49.2728, -123.15233]
    },
    you: {
      name: "YOU",
      // anchor: [-23.080,-50.449],
      anchor: [43.8, -101.8],
      type: "consumer",
      description: {        
        address: {
          street: "Hastings St",          
          city: "Vancouver, BC"
        },
        imageUrl:
          "http://1.bp.blogspot.com/_BaxMlnoKZyY/SXLzZU-fYoI/AAAAAAAABY0/3UmZzmZRpEk/s320/funny-dogs-smoking-cigarette.jpg",
        email: "doggyhemp@smoke.com",     
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
  },
  locations: null,
  context: 0,
  email: null,
  seed: null
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRACK_NUMBER:
      return updateObject(state, { number: action.number });
    case actionTypes.SEARCH:
      return updateObject(state, {
        searched: action.value
      });
    case actionTypes.TOGGLE_INFO_SECTION:
      return updateObject(state, {
        currentInformation: action.index 
      });
    case actionTypes.TOGGLE_LANDMARKS:
      return updateObject(state, {
        currentLocation: action.index
      });
    case actionTypes.TOGGLE_COPYRIGHT:
      return updateObject(state, {
        showCopyright: !state.showCopyright
      });
    case actionTypes.TOGGLE_MENU:
      return updateObject(state, {
        showMenuCollapsed: !state.showMenuCollapsed
      });
    case actionTypes.CLOSE_ALL:
      return updateObject(state, {
        currentInformation: -1,
        currentLocation: -1,
        searched: true
      });
    case actionTypes.SET_LOCATIONS:
      return updateObject(state, {
        locations: action.input
      });
    case actionTypes.SET_CONTEXT:
      return updateObject(state, { context: action.input });
    case actionTypes.SET_EMAIL:
      return updateObject(state, { email: action.input });
    case actionTypes.CHECK_ENTRY:
      // console.log("ENTRY EXISTS", action);
      return updateObject(state, {
        email: action.entry.email,
        trackNumber: action.entry.number,
        context: action.entry.context,
        seed: action.seed
      });
    case actionTypes.RECORD_ENTRY:
      return updateObject(state, { seed: action.seed });
    case actionTypes.SET_INFO_TAB:
      return updateObject(state, { infoTab: action.infoTab });

    default:
      return state;
  }
};

export default indexReducer;
// export default combineReducers({
// });
