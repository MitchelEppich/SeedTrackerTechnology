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
  CLOSE_ALL: "CLOSE_ALL",
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
  CHECK_TESTER_ENTRY: "CREATE_NEW_TESTER_ENTRY",
  GET_COMPANY: "GET_COMPANY",
  GET_COMPANY_REF_STT_LIST: "GET_COMPANY_REF_STT_LIST",
  SET_MEDIA_SIZE: "SET_MEDIA_SIZE"
};

const actions = {
  trackNumber: number => {
    return {
      type: actionTypes.TRACK_NUMBER,
      number: number
    };
  },
  setMediaSize: input => {
    return {
      type: actionTypes.SET_MEDIA_SIZE,
      input: input.mediaSize
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
      console.log(input);
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
        return dispatch(actions.checkTesterEntry(input));

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
  checkTesterEntry: input => {
    return dispatch => {
      let website = input.websites[input.number[0]];

      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getEntry,
        variables: { number: input.number, email: input.email, website }
      };
      return makePromise(execute(link, operation)).then(data => {
        let _entry = data.data.entry;
        dispatch({
          type: actionTypes.CHECK_TESTER_ENTRY,
          entry: _entry
        });
        return Promise.resolve(_entry);
      });
    };
  },
  getCompany: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getCompany,
        variables: { ...input }
      };
      return makePromise(execute(link, operation)).then(data => {
        let _company = data.data.company;
        console.log(data, input);
        dispatch({
          type: actionTypes.GET_COMPANY,
          input: _company
        });
        return Promise.resolve(_company);
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
      console.log(input);
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getStrain,
        variables: { sttId: input.sttId, website: input.website }
      };

      return makePromise(execute(link, operation)).then(data => {
        let strain = inferStrainData(data.data.strain, {
          excludeGenetic: true
        });

        const operation = {
          query: mutation.getCoordinates,
          variables: { country: strain.aCountry }
        };
        return makePromise(execute(link, operation)).then(data => {
          console.log(data);
          let loc = data.data.getCoordinates;
          console.log(loc);

          // Set germination percents
          let rand = gen.create(input.seed);
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
            germ,
            date,
            potency,
            context: input.context
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
  getCompanyRefSttList: () => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getWebsiteRefSttList
      };
      return makePromise(execute(link, operation)).then(data => {
        let list = JSON.parse(data.data.getCompanyWebsitesRefToStt);
        dispatch({
          type: actionTypes.GET_COMPANY_REF_STT_LIST,
          input: list
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
              country: [info.ShipCountry],
              state: [info.ShipState],
              isCustomer: true
            }
          };

          return makePromise(execute(link, operation)).then(data => {
            let coordinates = data.data.getCoordinates;
            if (coordinates.coords == null || coordinates.coords.length == 0)
              coordinates = { coords: [{ lon: 0, lat: 0 }] };

            info = {
              sttNumber: input.number,
              country: info.ShipCountry,
              sotiId: info.productname.slice(0, 3),
              website: input.websites[input.number[0]],
              dispatchAt: moment(info.DispatchDate).format("DD/MM/YYYY"),
              ...coordinates.coords[0]
            };

            link = new HttpLink({ uri, fetch: fetch });

            operation = {
              query: mutation.recordEntry,
              variables: { ...input, ...info }
            };

            console.log(input, info);

            return makePromise(execute(link, operation))
              .then(data => {
                let _info = data.data.createEntry;
                if (_info == null)
                  dispatch(
                    actions.setError(
                      "Information Not Found",
                      input.email,
                      input.number,
                      input.context
                    )
                  );

                dispatch({
                  type: actionTypes.RECORD_ENTRY,
                  entry: _info
                });
                return Promise.resolve(_info);
              })
              .catch(error => console.log(error));
          });
        });
    };
  }
};

const query = {
  getWebsiteRefSttList: gql`
    query {
      getCompanyWebsitesRefToStt
    }
  `,
  getStrain: gql`
    query($sttId: String, $website: String) {
      strain(input: { sttId: $sttId, website: $website }) {
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
        website
      }
    }
  `,
  getCompany: gql`
    query($website: String, $country: String) {
      company(input: { website: $website, country: $country }) {
        _id
        name
        website
        country
        phone
        email
        image
        location
        mediaUrls
        sttId
      }
    }
  `,
  getEntry: gql`
    query($email: String, $number: Int, $website: String) {
      entry(input: { email: $email, number: $number, website: $website }) {
        _id
        email
        number
        context
        createdAt
        sttId
        sotiId
        website
        lon
        lat
        dispatchAt
        country
        seed
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
  createCompany: gql`
    mutation(
      $name: String
      $website: String
      $location: [Float]
      $country: String
      $phone: String
      $email: String
      $mediaUrls: [String]
      $image: String
      $sttId: String
    ) {
      createCompany(
        input: {
          name: $name
          website: $website
          location: $location
          country: $country
          phone: $phone
          email: $email
          mediaUrls: $mediaUrls
          image: $image
          sttId: $sttId
        }
      ) {
        _id
        name
        website
        country
        phone
        email
        image
        sttId
      }
    }
  `,
  getCoordinates: gql`
    mutation($country: [String], $state: [String], $isCustomer: Boolean) {
      getCoordinates(
        input: { country: $country, state: $state, isCustomer: $isCustomer }
      ) {
        coords {
          lon
          lat
        }
      }
    }
  `,
  recordEntry: gql`
    mutation(
      $email: String!
      $number: Int!
      $context: Int!
      $sotiId: String!
      $lat: Float!
      $lon: Float!
      $dispatchAt: String!
      $country: String!
      $website: String!
    ) {
      createEntry(
        input: {
          email: $email
          number: $number
          context: $context
          lon: $lon
          lat: $lat
          sotiId: $sotiId
          website: $website
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
        website
        sttId
        dispatchAt
        country
        seed
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
