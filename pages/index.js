/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import HomeTracker from "../components/Main/HomeTracker";
import Video from "../components/Video";
import About from "../components/Main/About";
import InfoCard from "../components/Main/InfoCard";
import html2canvas from "html2canvas";

import NotSupported from "../components/NotSupported";
import Newsletter from "../components/Main/newsletter";

class Index extends Component {
  componentDidMount() {}

  render() {
    return this.props.supportedBrowser ? (
      <Layout>
        <InfoCard
          {...this.props}
          checkEntry={this.props.checkEntry}
          getStrainData={this.props.getStrainData}
        />
        <Navbar
          toggleInfoSection={this.props.toggleInfoSection}
          showInfoSection={this.props.showInfoSection}
          showMenuCollapsed={this.props.showMenuCollapsed}
          toggleMenu={this.props.toggleMenu}
        />
        <Video
          toggleMuteVideo={this.props.toggleMuteVideo}
          videoMuted={this.props.videoMuted}
        />
        <About />
        <Newsletter {...this.props} />
        <HomeTracker
          {...this.props}
          trackNumber={this.props.trackNumber}
          search={this.props.search}
          number={this.props.number}
          searched={this.props.searched}
          setLocations={this.props.setLocations}
          landmarks={this.props.landmarks}
          toggleCopyright={this.props.toggleCopyright}
          showCopyright={this.props.showCopyright}
          setContext={this.props.setContext}
          context={this.props.context}
          setEmail={this.props.setEmail}
          email={this.props.email}
          checkEntry={this.props.checkEntry}
          getStrainData={this.props.getStrainData}
          closeAllHandler={this.props.closeAllHandler}
          toggleLandmarks={this.props.toggleLandmarks}
        />
        <Main
          {...this.props}
          trackNumber={this.props.trackNumber}
          search={this.props.search}
          number={this.props.number}
          searched={this.props.searched}
          toggleInfoSection={this.props.toggleInfoSection}
          locations={this.props.locations}
          landmarks={this.props.landmarks}
          toggleLandmarks={this.props.toggleLandmarks}
          currentLocation={this.props.currentLocation}
          currentInformation={this.props.currentInformation}
          closeAllHandler={this.props.closeAllHandler}
          closeAll={this.props.closeAll}
          toggleCopyright={this.props.toggleCopyright}
          showCopyright={this.props.showCopyright}
          seed={this.props.seed}
          setInfoTab={this.props.setInfoTab}
        />
        <InfoCard
          {...this.props}
          checkEntry={this.props.checkEntry}
          getStrainData={this.props.getStrainData}
        />
        {/* <iframe id="stt" className="pin" style={{
          height: "90vh",
          width: '99vw'
        }} src={`http://192.168.0.27:3000/stt`}></iframe>       */}
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
    checkEntry: input => {
      return dispatch(actions.checkEntry(input));
    },
    setInfoTab: input => {
      dispatch(actions.setInfoTab(input));
    },
    getStrainData: input => {
      return dispatch(actions.getStrainData(input));
    },
    togglePath: value => {
      return dispatch(actions.togglePath(value));
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
