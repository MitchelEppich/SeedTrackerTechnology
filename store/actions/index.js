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
import gen from "random-seed";

const uri = "http://localhost:3000/graphql";
// const uri = "http://seedtracker.com:3000/graphql";

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
  GET_STRAIN_DATA: "GET_STRAIN_DATA",
  SET_INFO_TAB: "SET_INFO_TAB",
  SET_ERROR: "SET_ERROR",
  MUTE_VIDEO: "MUTE_VIDEO"
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
  toggleMuteVideo: input => {
    return {
      type: actionTypes.MUTE_VIDEO,
      input: input.value
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
      if (input.number.toString()[0] == "0") {
        dispatch(
          actions.setError(
            "Invalid STT Number",
            input.email,
            input.number,
            input.context
          )
        );
        return;
      }
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getEntry,
        variables: { number: input.number }
      };
      return makePromise(execute(link, operation)).then(data => {
        let entry = data.data.entry;
        if (entry == null) {
          return dispatch(actions.recordEntry(input));
        } else {
          dispatch({
            type: actionTypes.CHECK_ENTRY,
            entry: entry,
            seed: entry._id
          });
          // console.log(entry);
          return Promise.resolve(entry);
        }
      });
    };
  },
  setError: (error, email, number, context) => {
    return dispatch => {
      console.log(error, email, number, context);
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.recordError,
        variables: { email: email, number: number.toString(), context: context }
      };
      return makePromise(execute(link, operation)).then(data => {
        dispatch({
          type: actionTypes.SET_ERROR,
          error: error
        });
      });
    };
  },
  getStrainData: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getStrain,
        variables: { strain: input.strain }
      };

      return makePromise(execute(link, operation)).then(data => {
        let seed = data.data.seed;
        const operation = {
          query: mutation.getCoordinates,
          variables: { country: seed.origin }
        };
        return makePromise(execute(link, operation)).then(data => {
          let loc = data.data.getCoordinates;

          // console.log(seed)
          // Set germination percents
          let rand = gen.create(seed.seed);
          let germ = [
            `${rand.floatBetween(89.0, 94.9).toFixed(1)}`,
            `${rand.floatBetween(89.0, 94.9).toFixed(1)}`,
            `${rand.floatBetween(84, 95).toFixed(1)}`
          ];

          let date = [
            `${moment(input.dispatchAt, "DD/MM/YYYY")
              .subtract(rand.intBetween(58, 64), "days")
              .format("DD/MM/YYYY")}`,
            `${moment(input.dispatchAt, "DD/MM/YYYY") // Harvest Date
              .subtract(rand.intBetween(14, 28), "days")
              .format("DD/MM/YYYY")}`,
            `${moment(input.dispatchAt, "DD/MM/YYYY") // Depart Date
              .subtract(rand.intBetween(4, 12), "days")
              .format("DD/MM/YYYY")}`,
            `${
              input.dispatchAt // Package Date
            }`
          ]; // Ship Date
          let potency = `${rand.floatBetween(84, 93).toFixed(1)}`;

          seed = {
            ...seed,
            ...loc,
            germ: germ,
            date: date,
            potency: potency,
            context: input.context,
            country: input.country
          };
          dispatch({
            type: actionTypes.GET_STRAIN_DATA,
            strain: seed
          });
          return Promise.resolve(seed);
        });
      });
    };
  },
  recordEntry: input => {
    return dispatch => {
      return axios
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
            if (info[tag] == "0000-00-00 00:00:00") {
              dispatch(
                actions.setError(
                  "Invalid Dispatch",
                  input.email,
                  input.number,
                  input.context
                )
              );
              return;
            }
            if (info[tag] == null) {
              dispatch(
                actions.setError(
                  "Information Not Found",
                  input.email,
                  input.number,
                  input.context
                )
              );
              return;
            }
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

          return makePromise(execute(link, operation)).then(data => {
            let coords = data.data.getCoordinates;

            info = {
              sttNumber: input.number,
              country: info.ShipCountry,
              strain: info.productname
                .split(info.productname.indexOf("-") == -1 ? undefined : "-")
                [
                  info.productname.indexOf("-") == -1 ||
                  info.productname.indexOf("-") > 10
                    ? 0
                    : 1
                ].split("(")[0]
                .replace("Seeds", "")
                .replace("Marijuana", "")
                .replace("Seed", "")
                .replace("Auto", "")
                .replace("Flower", "")
                .replace("Regular", "")
                .replace("Cannabis", "")
                .replace("Feminized", "")
                .replace("Fem", "")
                .replace("Auto", "")
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
            return Promise.resolve(info);
          });
        });
    };
  }
};

const query = {
  getStrain: gql`
    query($strain: String) {
      seed(input: { strain: $strain }) {
        _id
        strain
        genetic
        p_thc
        p_cbd
        p_cbn
        p_indica
        p_sativa
        p_ruderalis
        o_yield
        i_yield
        grow_time
        effect
        origin
        seed
        seedFrom
      }
    }
  `,
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
        country
      }
    }
  `
};

const mutation = {
  recordError: gql`
    mutation($email: String, $context: Int, $number: String) {
      createError(
        input: { email: $email, context: $context, number: $number }
      ) {
        _id
      }
    }
  `,
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
      $country: String!
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
          country: $country
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
        country
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
