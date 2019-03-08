/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import html2canvas from "html2canvas";

import Handout from "../components/extensions/handout";
import NotSupported from "../components/notSupported";
import Main from "../components/sections/main";
import About from "../components/sections/about";
import Newsletter from "../components/sections/newsletter";
import Locator from "../components/sections/locator";

class Index extends Component {
  componentDidMount() {
    this.props.getCompanyRefSttList();
  }

  render() {
    return this.props.supportedBrowser ? (
      <Layout>
        <Handout {...this.props} />
        <Main {...this.props} />
        <About {...this.props} />
        <Newsletter {...this.props} />
        <Locator {...this.props} />
      </Layout>
    ) : (
      <NotSupported />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    trackNumber: val => {
      dispatch(actions.trackNumber(val));
    },
    search: val => {
      dispatch(actions.search(val));
    },
    toggleInfoSection: index => {
      dispatch(actions.toggleInfoSection(index));
    },
    toggleLandmarks: index => {
      dispatch(actions.toggleLandmarks(index));
    },
    toggleCopyright: index => {
      dispatch(actions.toggleCopyright(index));
    },
    toggleMenu: index => {
      dispatch(actions.toggleMenu(index));
    },
    closeAllHandler: input => {
      dispatch(actions.closeAll(input));
    },
    setLocations: input => {
      dispatch(actions.setLocations(input));
    },
    setContext: input => {
      dispatch(actions.setContext(input));
    },
    setError: (error, email, number, context) => {
      dispatch(actions.setError(error, email, number, context));
    },
    setEmail: input => {
      dispatch(actions.setEmail(input));
    },
    setUserInput: input => {
      dispatch(actions.setUserInput(input));
    },
    checkEntry: input => {
      return dispatch(actions.checkEntry(input));
    },
    setInfoTab: input => {
      dispatch(actions.setInfoTab(input));
    },
    getStrainData: input => {
      return dispatch(actions.getStrainData(input));
    },
    getCompany: input => {
      return dispatch(actions.getCompany(input));
    },
    togglePath: value => {
      return dispatch(actions.togglePath(value));
    },
    getCompanyRefSttList: () => {
      return dispatch(actions.getCompanyRefSttList());
    },
    toggleMuteVideo: input => {
      return dispatch(actions.toggleMuteVideo(input));
    }
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
