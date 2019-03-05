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

const { inferStrainData } = require("../utilities/strain");

const uri = "http://localhost:3000/graphql";
// const uri = "http://seedtracker.com:80/graphql";

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
  MUTE_VIDEO: "MUTE_VIDEO",
  CREATE_TESTER_ENTRY: "CREATE_NEW_TESTER_ENTRY"
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

      if (parseInt(input.number.slice(3)) == 0)
        return dispatch(actions.createTesterEntry(input));

      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getEntry,
        variables: { number: input.number }
      };
      return makePromise(execute(link, operation)).then(async data => {
        let entry = data.data.entry;

        if (entry == null) {
          return await dispatch(actions.recordEntry(input));
        } else {
          dispatch({
            type: actionTypes.CHECK_ENTRY,
            entry: entry,
            seed: entry._id
          });

          return Promise.resolve(entry);
        }
      });
    };
  },
  createTesterEntry: input => {
    return dispatch => {
      // console.log(error, email, number, context);
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.createTesterEntry,
        variables: { ...input }
      };
      return makePromise(execute(link, operation)).then(data => {
        let entry = data.data.createTesterEntry;
        dispatch({
          type: actionTypes.CREATE_TESTER_ENTRY,
          entry,
          seed: "Tester Seed"
        });
      });
    };
  },
  setError: (error, email, number, context) => {
    return dispatch => {
      // console.log(error, email, number, context);
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
        let strain = inferStrainData(data.data.strain);

        const operation = {
          query: mutation.getCoordinates,
          variables: { country: strain.aCountry[0] }
        };
        return makePromise(execute(link, operation)).then(data => {
          let loc = data.data.getCoordinates;

          // Set germination percents
          let rand = gen.create(strain.seed);
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

          strain = {
            ...strain,
            ...loc,
            germ: germ,
            date: date,
            potency: potency,
            context: input.context,
            country: input.country
          };
          dispatch({
            type: actionTypes.GET_STRAIN_DATA,
            strain
          });
          return Promise.resolve(strain);
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
              sotiId: info.productname.slice(0, 3),
              company: companies[input.number[0]],
              dispatchAt: moment(info.DispatchDate).format("DD/MM/YYYY"),
              ...coords
            };

            link = new HttpLink({ uri, fetch: fetch });

            operation = {
              query: mutation.recordEntry,
              variables: { ...input, ...info }
            };

            return makePromise(execute(link, operation))
              .then(data => {
                let _info = data.data.createEntry;

                dispatch({
                  type: actionTypes.RECORD_ENTRY,
                  seed: data.data.createEntry._id,
                  clientInfo: info
                });
                return Promise.resolve(_info);
              })
              .catch(error => console.log(error));
          });
        });
    };
  }
};

let companies = {
  6: "cropkingseeds.com",
  4: "maryjanesgarden.com"
};

const query = {
  getStrain: gql`
    query($sttId: String, $company: String) {
      strain(input: { sttId: $sttId, company: $company }) {
        _id
        name
        flowerTime
        effect
        country
        indica
        sativa
        ruderalis
        yield
        pThc
        pCbd
        pCbn
        genetic
        type
        seed
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
        sttId
        sotiId
        company
        dispatchAt
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
      $sotiId: String!
      $lat: String!
      $lon: String!
      $dispatchAt: String!
      $country: String!
      $company: String!
    ) {
      createEntry(
        input: {
          email: $email
          number: $number
          context: $context
          lon: $lon
          lat: $lat
          sotiId: $sotiId
          company: $company
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
        company
        sttId
        dispatchAt
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
