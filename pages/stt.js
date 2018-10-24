/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Navbar from "../components/Navbar";
import Main from "../components/Main"
import HomeTracker from "../components/Main/HomeTracker"
// import InfoSection from "../components/Main/InfoSection"
import Video from "../components/Video"
import About from "../components/Main/About"


class Index extends Component {
  componentDidMount() {
  }

  render() {   
    return (
      <Layout>
        <Main         
          trackNumber={this.props.trackNumber}
          search={this.props.search}
          navbarSearch={this.props.navbarSearch}
          searched={this.props.searched}
          toggleInfoSection={this.props.toggleInfoSection}        
          locations={this.props.locations}        
          toggleLandmarks={this.props.toggleLandmarks}
          currentLocation={this.props.currentLocation}
          currentInformation={this.props.currentInformation}
          closeAllHandler={this.props.closeAllHandler}
          closeAll={this.props.closeAll}    
          toggleCopyright={this.props.toggleCopyright} 
          showCopyright={this.props.showCopyright} 
        />     
                
        <HomeTracker 
          trackNumber={this.props.trackNumber}
          search={this.props.search}
          navbarSearch={this.props.navbarSearch}
          searched={this.props.searched}
          setLocations={this.props.setLocations}
          landmarks={this.props.landmarks}
          toggleCopyright={this.props.toggleCopyright}
          showCopyright={this.props.showCopyright}
        />                    
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    trackNumber: (val) => dispatch(actions.trackNumber(val)),
    search: (val) => dispatch(actions.search(val)),
    toggleInfoSection: (index) => {
      dispatch(actions.toggleInfoSection(index))      
    },
    toggleLandmarks: (index) => {
      dispatch(actions.toggleLandmarks(index))     
    },
    toggleCopyright: () => {
        dispatch(actions.toggleCopyright())     
    },    
    closeAllHandler : input => {  
      dispatch(actions.closeAll(input));
    },
    setLocations : input => {  
      dispatch(actions.setLocations(input));
    },

  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
