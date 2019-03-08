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
  locations: null,
  context: 0,
  email: null,
  seed: null,
  clientInfo: null,
  strain: null,
  videoMuted: true,
  company: null,
  companySttWebsiteList: null
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRACK_NUMBER:
      return updateObject(state, { number: action.number });
    case actionTypes.SET_ERROR:
      return updateObject(state, { error: action.error });
    case actionTypes.GET_COMPANY_REF_STT_LIST:
      return updateObject(state, { companySttWebsiteList: action.input });
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
    case actionTypes.GET_COMPANY:
      return updateObject(state, { company: action.input });
    case actionTypes.CHECK_ENTRY:
      // console.log("ENTRY EXISTS", action);
      return updateObject(state, {
        email: action.entry.email,
        trackNumber: action.entry.number,
        context: action.entry.context,
        seed: action.entry.seed,
        clientInfo: action.entry
      });
    case actionTypes.SUBSCRIBE_TO_NEWSLETTER:
      return updateObject(state, {});
    case actionTypes.CHECK_TESTER_ENTRY:
      return updateObject(state, {
        email: action.entry.email,
        trackNumber: action.entry.number,
        context: action.entry.context,
        seed: action.entry.seed,
        clientInfo: action.entry
      });
    case actionTypes.RECORD_ENTRY:
      return updateObject(state, {
        email: action.entry.email,
        trackNumber: action.entry.number,
        context: action.entry.context,
        seed: action.entry.seed,
        clientInfo: action.entry
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
