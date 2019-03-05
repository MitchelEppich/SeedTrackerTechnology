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
  error: null,
  landmarks: {
    cks: {
      name: "Crop King Seeds",
      anchor: [49.268, -122.981],
      usAnchor: [34.787, -119.443],
      type: "company",
      phone: "(604) 563 0291",
      usPhone: "+1 (844) 276-7546",
      email: "info@cropkingseeds.com",
      description: {
        dates: {
          package: "Aug 2",
          ship: "Aug 9"
        },
        imageUrl:
          "http://www.marijuanaseedscenter.com/wp-content/uploads/2016/05/crop-king-seeds-logo-283x300.png",
        website: "https://www.cropkingseeds.com",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
    swg: {
      name: "SunWest Genetics",
      anchor: [49.2687, -123.2428],
      usAnchor: [34.787, -119.443],
      type: "company",
      phone: "+1 (800) 805-7835",
      email: "info@sunwestgenetics.com",
      description: {
        dates: {
          package: "Aug 2",
          ship: "Aug 9"
        },
        imageUrl:
          "https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwidpuba08PfAhXiq1QKHbAkCY8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.sunwestgenetics.com%2F&psig=AOvVaw0uRA16zBhLDgtIf4uHMctW&ust=1546125294006034",
        website: "https://www.sunwestgenetics.com",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
    "mjsc.ca": {
      // NOT READY
      name: "Mary Janes Seeds Canada",
      anchor: [49.1887, -123.0812],
      usAnchor: [34.787, -119.443],
      type: "company",
      phone: "(604) 563 0291",
      email: "info@cropkingseeds.com",
      description: {
        dates: {
          package: "Aug 2",
          ship: "Aug 9"
        },
        imageUrl:
          "http://www.marijuanaseedscenter.com/wp-content/uploads/2016/05/crop-king-seeds-logo-283x300.png",
        website: "https://www.cropkingseeds.com",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
    "mjsc.com": {
      // NOT READY
      name: "Mary Jane Seeds",
      anchor: [49.1887, -123.0812],
      usAnchor: [34.787, -119.443],
      type: "company",
      phone: "(604) 563 0291",
      email: "info@cropkingseeds.com",
      description: {
        dates: {
          package: "Aug 2",
          ship: "Aug 9"
        },
        imageUrl:
          "http://www.marijuanaseedscenter.com/wp-content/uploads/2016/05/crop-king-seeds-logo-283x300.png",
        website: "https://www.cropkingseeds.com",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
    mjg: {
      // NOT READY
      name: "Crop King Seeds",
      // name: "Mary Janes Garden",
      anchor: [49.2332, -122.9931],
      usAnchor: [34.787, -119.443],
      type: "company",
      phone: "(604) 563 0291",
      email: "info@cropkingseeds.com",
      description: {
        dates: {
          package: "Aug 2",
          ship: "Aug 9"
        },
        imageUrl:
          "http://www.marijuanaseedscenter.com/wp-content/uploads/2016/05/crop-king-seeds-logo-283x300.png",
        website: "https://www.cropkingseeds.com",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
    bvr: {
      name: "Beaver Seeds",
      anchor: [49.29173, -123.13522],
      usAnchor: [34.787, -119.443],
      type: "company",
      phone: "Visit Website",
      email: "info@beaverseeds.ca",
      description: {
        dates: {
          package: "Aug 2",
          ship: "Aug 9"
        },
        imageUrl:
          "https://www.google.ca/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F412388918193967104%2FwsqJ9Cfp_400x400.png&imgrefurl=https%3A%2F%2Ftwitter.com%2Fbeaverseeds&docid=ss4FvcrXYdEddM&tbnid=27b4DtjO2P0iiM%3A&vet=10ahUKEwjkkL_l1MPfAhVcGTQIHerVAfwQMwg7KAEwAQ..i&w=400&h=400&client=opera&bih=939&biw=1880&q=beaver%20seeds&ved=0ahUKEwjkkL_l1MPfAhVcGTQIHerVAfwQMwg7KAEwAQ&iact=mrc&uact=8",
        website: "https://www.beaverseeds.ca",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
    snm: {
      name: "Sonoma Seeds",
      anchor: [49.2775, -123.044],
      usAnchor: [34.787, -119.443],
      type: "company",
      phone: "+1 (855) 766-6627",
      email: "info@sonomaseeds.com",
      description: {
        dates: {
          package: "Aug 2",
          ship: "Aug 9"
        },
        imageUrl:
          "https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjklbWf1cPfAhXHFzQIHW-HCkcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fsonomaseeds%2F&psig=AOvVaw04YCdDvO8M4CmYE4NBHi_B&ust=1546125708761202",
        website: "https://www.sonomaseeds.com",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
    },
    sfw: {
      // NOT READY
      name: "Star Flower Seeds",
      anchor: [49.2728, -123.15233],
      usAnchor: [34.787, -119.443],
      type: "company",
      phone: "(604) 563 0291",
      email: "info@cropkingseeds.com",
      description: {
        dates: {
          package: "Aug 2",
          ship: "Aug 9"
        },
        imageUrl:
          "http://www.marijuanaseedscenter.com/wp-content/uploads/2016/05/crop-king-seeds-logo-283x300.png",
        website: "https://www.cropkingseeds.com",
        socials: {
          facebook: "http://www.facebook.com",
          twitter: "http://www.twitter.com",
          instagram: "http://www.instagram.com"
        }
      }
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
    }
  },
  locations: null,
  context: 0,
  email: null,
  seed: null,
  clientInfo: null,
  strain: null,
  videoMuted: true
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRACK_NUMBER:
      return updateObject(state, { number: action.number });
    case actionTypes.SET_ERROR:
      return updateObject(state, { error: action.error });
    case actionTypes.MUTE_VIDEO:
      return updateObject(state, { videoMuted: action.input });
    case actionTypes.SET_GERMINATION_PERCENT:
      return updateObject(state, {
        strain: { ...state.strain, germ: action.input }
      });
    case actionTypes.SEARCH:
      return updateObject(state, { searched: action.value });
    case actionTypes.TOGGLE_INFO_SECTION:
      return updateObject(state, {
        currentInformation: action.index,
        currentLocation: action.index
      });
    case actionTypes.TOGGLE_LANDMARKS:
      return updateObject(state, { currentLocation: action.index });
    case actionTypes.TOGGLE_COPYRIGHT:
      return updateObject(state, { showCopyright: !state.showCopyright });
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
      return updateObject(state, { locations: action.input });
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
        seed: action.seed,
        clientInfo: action.entry
      });
    case actionTypes.CREATE_TESTER_ENTRY:
      return updateObject(state, {
        email: action.entry.email,
        trackNumber: action.entry.number,
        context: action.entry.context,
        seed: action.seed,
        clientInfo: action.entry
      });
    case actionTypes.RECORD_ENTRY:
      return updateObject(state, {
        seed: action.seed,
        clientInfo: action.clientInfo
      });
    case actionTypes.SET_INFO_TAB:
      return updateObject(state, { infoTab: action.infoTab });
    case actionTypes.GET_STRAIN_DATA:
      return updateObject(state, { strain: action.strain });

    default:
      return state;
  }
};

export default indexReducer;
// export default combineReducers({
// });
