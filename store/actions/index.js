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

import axios from "axios";
import moment from "moment";

// const uri = `https://growreel-dev.herokuapp.com:443/graphql`;
// const uri = "http://192.168.0.43:3000/graphql";

const uri = "http://localhost:3000/graphql";

// const uri = "http://192.168.0.27:3000/graphql";

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
  CHECK_ENTRY: "CHECK_ENTRY",
  SET_INFO_TAB: "SET_INFO_TAB"
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
  setInfoTab: input => {
    return {
      type: actionTypes.SET_INFO_TAB,
      infoTab: input
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
      axios
        .get(`https://www.cksoti.com/getcustomerorderdetail/${input.number}`)
        .then(res => {
          let data = res.data;
          let info = {};
          let tags = [
            "productname",
            "ShipAddress",
            "ShipCity",
            "ShipState",
            "ShipCountry",
            "ShipZipCode",
            "DispatchDate"
          ];
          for (let tag of tags) {
            info[tag] = data.split(`<${tag}>`)[1];
          }

          let link = new HttpLink({ uri, fetch: fetch });
          let operation = {
            query: mutation.getCoordinates,
            variables: {
              postalcode: info.ShipZipCode,
              street: info.ShipAddress,
              city: info.ShipCity,
              country: info.ShipCountry,
              state: info.ShipState
            }
          };

          makePromise(execute(link, operation)).then(data => {
            let coords = data.data.getCoordinates;

            info = {
              sttNumber: input.number,
              strain: info.productname
                .split("-")[1]
                .split("(")[0]
                .replace("Seeds", "")
                .trim(),
              dispatchAt: moment(info.DispatchDate).format("DD/MM/YYYY"),
              ...coords
            };

            link = new HttpLink({ uri, fetch: fetch });
            operation = {
              query: mutation.recordEntry,
              variables: { ...input, ...info }
            };

            makePromise(execute(link, operation))
              .then(data => {
                dispatch({
                  type: actionTypes.RECORD_ENTRY,
                  seed: data.data.createEntry._id,
                  clientInfo: info
                });
              })
              .catch(error => console.log(error));
          });
        });
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
        lat
        lon
        dispatchAt
        strain
      }
    }
  `
};

const mutation = {
  getCoordinates: gql`
    mutation(
      $postalcode: String
      $street: String
      $city: String
      $country: String
      $state: String
    ) {
      getCoordinates(
        input: {
          postalcode: $postalcode
          street: $street
          city: $city
          country: $country
          state: $state
        }
      ) {
        lon
        lat
      }
    }
  `,
  recordEntry: gql`
    mutation(
      $email: String!
      $number: Int!
      $context: Int!
      $strain: String!
      $lat: String!
      $lon: String!
      $dispatchAt: String!
    ) {
      createEntry(
        input: {
          email: $email
          number: $number
          context: $context
          lon: $lon
          lat: $lat
          strain: $strain
          dispatchAt: $dispatchAt
        }
      ) {
        _id
        email
        number
        context
        createdAt
        lon
        lat
        strain
        dispatchAt
        strain
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
