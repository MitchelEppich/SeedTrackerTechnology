const EntryResolvers = require("./entry");
const ErrorResolvers = require("./error");
const SeedResolvers = require("./seed");
const StrainResolvers = require("./strain");
const CompanyResolvers = require("./company");

const NodeGeocoder = require("node-geocoder");

const { Entry, Error, Email } = require("../../models");

const request = require("request-promise");
const emailTemplates = require("../emails");

let options = {
  provider: "openstreetmap"
};

let geocoder = NodeGeocoder(options);

const resolvers = {
  Query: {
    ...EntryResolvers.Query,
    // ...SeedResolvers.Query,
    ...ErrorResolvers.Query,
    ...CompanyResolvers.Query,
    ...StrainResolvers.Query,
    getEmailList: async (_, { input }) => {
      let errorEmails = (await Error.find({})).map(a => a.email);
      let entryEmails = (await Entry.find({})).map(a => a.email);
      let newsletterEmails = (await Email.find({})).map(a => a.email);
      return [
        ...new Set(errorEmails.concat(...[...entryEmails, ...newsletterEmails]))
      ];
    }
  },
  Mutation: {
    ...EntryResolvers.Mutation,
    // ...SeedResolvers.Mutation,
    ...ErrorResolvers.Mutation,
    ...StrainResolvers.Mutation,
    ...CompanyResolvers.Mutation,
    getCoordinates: async (_, { input }) => {
      let _country = input.country;
      let _state = input.state;
      let _isCustomer = input.isCustomer;

      let coords = [];
      let locs = _country == null ? [_state] : _country;
      for (let loc of locs) {
        if (loc == "Central America") loc = "Costa Rica";
        let options = {};
        if (!_isCustomer) {
          if (_country == null) options.state = loc;
          else options.country = loc;
        } else {
          options.state = _state[0];
          options.country = _country[0];
        }
        let _coords = (await geocoder.geocode(options))[0];
        if (_coords == null) _coords = { longitude: 0, latitude: 0 };
        coords.push({ lon: _coords.longitude, lat: _coords.latitude });
      }
      return { coords };
    },
    subscribeToNewsletter: async (_, { input }) => {
      let email = new Email({
        ...input
      });

      email.save();

      return input.email + " has been subscribed to the newsletter!";
    },
    sendEmail: async (_, { input }) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "growreel.noreply@gmail.com",
          pass: "etydthavvvnkdqxf"
        }
      });
      let mailOptions = emailTemplates.contact({
        ...input
      });

      request(options)
        .then(function(parsedBody) {
          // POST succeeded...
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              // Do nothing
            }
          });
        })
        .catch(function(err) {
          // POST failed...
          console.log(err);
        });

      // switch (input.type) {
      //   case "contact":
      //     mailOptions = emailTemplates.contact({
      //       ...input,
      //     });
      //     break;
      // }
    }
  }
};

module.exports = resolvers;
