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
// const uri = "http://192.168.0.43:3000/graphql";

// const uri = "http://localhost:3000/graphql";

const uri = "http://192.168.0.27:3000/graphql";

const imports = {};

const actionTypes = {
  TRACK_NUMBER: "TRACK_NUMBER",
  SEARCH: "SEARCH",
  TOGGLE_INFO_SECTION: "TOGGLE_INFO_SECTION",
  TOGGLE_LANDMARKS: "TOGGLE_LANDMARKS",
  CLOSE_ALL: "CLOSE ALL",
  SET_LOCATIONS: "SET_LOCATIONS",
  TOGGLE_COPYRIGHT: "TOGGLE_COPYRIGHT",
  TOGGLE_MENU: "TOGGLE_MENU",
  SET_CONTEXT: "SET_CONTEXT",
  SET_EMAIL: "SET_EMAIL",
  RECORD_ENTRY: "RECORD_ENTRY",
  CHECK_ENTRY: "CHECK_ENTRY"
};

const actions = {  
  trackNumber: number => {
    return {
      type: actionTypes.TRACK_NUMBER,
      number: number
    };
  },
  search: value => {
    return {
      type: actionTypes.SEARCH,
      value: value
    };
  },
  setContext: input => {
    return { type: actionTypes.SET_CONTEXT, input: input };
  },
  setEmail: input => {
    return { type: actionTypes.SET_EMAIL, input: input };
  },
  toggleInfoSection: index => {
    return {
      type: actionTypes.TOGGLE_INFO_SECTION,
      index: index
    };
  },
  toggleLandmarks: index => {
    return {
      type: actionTypes.TOGGLE_LANDMARKS,
      index: index
    };
  },
  toggleCopyright: () => {
    return {
      type: actionTypes.TOGGLE_COPYRIGHT
    };
  },
  toggleMenu: () => {
    return {
      type: actionTypes.TOGGLE_MENU
    };
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
  checkEntry: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getEntry,
        variables: { number: input.number }
      };

      makePromise(execute(link, operation))
        .then(data => {
          let entry = data.data.entry;
          if (entry == null) {
            dispatch(actions.recordEntry(input));
          } else {
            dispatch({
              type: actionTypes.CHECK_ENTRY,
              entry: entry,
              seed: entry._id
            });
          }
        })
        .catch(error => console.log(error));
    };
  },
  recordEntry: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.recordEntry,
        variables: { ...input }
      };

      makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.RECORD_ENTRY,
            seed: data.data.createEntry._id
          });
        })
        .catch(error => console.log(error));
    };
  }
};

const query = {
  getEntry: gql`
    query($number: Int!) {
      entry(input: { number: $number }) {
        _id
        email
        number
        context
        createdAt
      }
    }
  `
};

const mutation = {
  recordEntry: gql`
    mutation($email: String!, $number: Int!, $context: Int!) {
      createEntry(
        input: { email: $email, number: $number, context: $context }
      ) {
        _id
        email
        number
        context
        createdAt
      }
    }
  `
};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
