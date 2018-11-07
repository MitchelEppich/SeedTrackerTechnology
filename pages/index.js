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
// import InfoSection from "../components/Main/InfoSection"
import Video from "../components/Video";
import About from "../components/Main/About";
import InfoCard from "../components/Main/InfoCard";
import html2canvas from "html2canvas";

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <InfoCard {...this.props} />
        <Navbar
          toggleInfoSection={this.props.toggleInfoSection}
          showInfoSection={this.props.showInfoSection}
          showMenuCollapsed={this.props.showMenuCollapsed}
          toggleMenu={this.props.toggleMenu}
        />

        <Video />
        {/* <button
          onClick={() => {
            // console.log(this.props.clientInfo);
            this.props.checkEntry({
              email: "asdasd@asdas",
              context: 1,
              number: "4050202"
            }).then(res => {
              console.log(res)
            })
          }}
        >
          Click me for other reasons!
        </button>     */}

        <About />
        {/* <button
          onClick={() => {
            let input = document.querySelector("#growCard");
            input.hidden = false;
            html2canvas(input, {
              scale: 0.9,
              windowHeight: "8000px",
              windowWidth: "2000px",
              removeContainer: false
            }).then(canvas => {
              const imgData = canvas.toDataURL("image/png");
              const jspdf = require("jspdf");
              const pdf = new jspdf({ format: [131, 173] });

              pdf.addImage(imgData, "PNG", 0, 0);
              pdf.save("growcard.pdf");
              input.hidden = true;
            });
          }}
        >
          CLICK ME
        </button> */}
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
        <InfoCard {...this.props} />

        {/* <iframe id="stt" className="pin" style={{
          height: "90vh",
          width: '99vw'
        }} src={`http://192.168.0.27:3000/stt`}></iframe>       */}
      </Layout>
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
    setEmail: input => {
      dispatch(actions.setEmail(input));
    },
    checkEntry: input => {
      return dispatch(actions.checkEntry(input));
    },
    setInfoTab: input => {
      dispatch(actions.setInfoTab(input));
    }
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));