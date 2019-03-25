/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import html2canvas from "html2canvas";

import NotSupported from "../components/notSupported";
import Main from "../components/sections/main";
import About from "../components/sections/about";
import Newsletter from "../components/sections/newsletter";
import Locator from "../components/sections/locator";

import Handout from "../components/extensions/handout";
import Card from "../components/sections/locator/overlay/card";

class Embed extends Component {
  getData = async () => {
    let entry = this.props.checkEntry({
      email: "test@test.com",
      context: 0,
      number: "4540720",
      websites: this.props.misc.companySttWebsiteList
    });
    console.log("RESPONSE", entry);
    this.props.getStrainData({
      sttId: entry.sttId,
      website: entry.website,
      dispatchAt: entry.dispatchAt,
      context: entry.context,
      country: entry.country,
      seed: entry.seed
    });
    this.props.getCompany({
      website: entry.website
    });
  };

  async componentDidMount() {
    this.props.getCompanyRefSttList();

    await this.getData();
  }

  render() {
    return this.props.supportedBrowser ? (
      <div>
        <Handout {...this.props} />
      </div>
    ) : (
      <NotSupported />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMediaSize: input => dispatch(actions.setMediaSize(input)),
    setSearched: input => dispatch(actions.setSearched(input)),
    setFocusLocation: input => dispatch(actions.setFocusLocation(input)),
    toggleCopyright: index => dispatch(actions.toggleCopyright(index)),
    toggleMenu: index => dispatch(actions.toggleMenu(index)),
    closeAllHandler: input => dispatch(actions.closeAll(input)),
    setLocations: input => dispatch(actions.setLocations(input)),
    setError: (error, email, number, context) =>
      dispatch(actions.setError(error, email, number, context)),
    setUserInput: input => dispatch(actions.setUserInput(input)),
    checkEntry: input => dispatch(actions.checkEntry(input)),
    setInfoTab: input => dispatch(actions.setInfoTab(input)),
    getStrainData: input => dispatch(actions.getStrainData(input)),
    getCompany: input => dispatch(actions.getCompany(input)),
    subscribeToNewsletter: input =>
      dispatch(actions.subscribeToNewsletter(input)),
    togglePath: value => dispatch(actions.togglePath(value)),
    getCompanyRefSttList: () => dispatch(actions.getCompanyRefSttList()),
    toggleMuteVideo: input => dispatch(actions.toggleMuteVideo(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Embed));
