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
      <Layout {...this.props}>
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
)(withData(Index));
