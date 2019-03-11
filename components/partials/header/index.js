import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLink from "react-anchor-link-smooth-scroll";

library.add(faBars);

const header = props => {
  let styleDropMenu = {
    transform:
      props.misc.showMenuCollapsed == true
        ? "translateX(0)"
        : "translateX(-100px)",
    WebkitTransform:
      props.misc.showMenuCollapsed == true
        ? "translateX(0)"
        : "translateX(-100px)",
    OTransform:
      props.misc.showMenuCollapsed == true
        ? "translateX(0)"
        : "translateX(-100px)",
    MozTransform:
      props.misc.showMenuCollapsed == true
        ? "translateX(0)"
        : "translateX(-100px)",
    MsTransform:
      props.misc.showMenuCollapsed == true
        ? "translateX(0)"
        : "translateX(-100px)",
    transition:
      props.misc.showMenuCollapsed == true ? "all 0.5s ease" : "all 0.5s ease"
  };

  return (
    <div
      style={{ zIndex: "99999999", background: "#1c1e20" }}
      className="w-full h-24 xs:h-20 sm:h-20 bg-navbar pin-t flex flex-wrap items-center shadow-md fixed z-50"
    >
      <div className="inline-flex w-2/5 sm:w-2/3 xs:w-2/3 pl-8 sm:pl-2 sm:ml-0 xs:pl-2 xs:ml-0 sm:items-center md:items-center">
        {/* <a href="/"> */}
        <div>
          <img
            onClick={() => console.log(props)}
            className="cursor-pointer pl-24 lg:pl-10 xl:pl-10 md:pl-4 sm:pl-4 xs:pl-4 lg:pl-4 xs:h-full xs:w-200 sm:h-full sm:w-200"
            src="../../static/imgs/logo2.png"
          />
        </div>
        {/* </a> */}
        {/* BETA TAG */}
        <div className="bg-yellow text-black text-2xl h-10 ml-2 mt-1 p-2 rounded-sm sm:text-sm sm:h-6 sm:items-center sm:p-1 md:text-sm md:h-6 md:items-center md:p-1 pt-1 sm:mt-0 xs:text-sm xs:h-6 xs:items-center xs:p-1 ">
          BETA
        </div>
      </div>
      <div className="inline-flex justify-end w-3/5 pr-8 xl:pr-16 xxl:pr-32 pin-r sm:hidden xs:hidden">
        <ul className="inline-flex text-xl md:text-lg justify-end">
          <li className=" md:p-2 p-4 xs:p-2 sm:p-2 ml-2 text-yellow font-bold uppercase cursor-pointer">
            <AnchorLink className="menu-item" href="#video">
              Home
            </AnchorLink>
          </li>
          <li className=" md:p-2 p-4 xs:p-2 sm:p-2 ml-2 text-yellow font-bold uppercase cursor-pointer">
            <AnchorLink className="menu-item" href="#about">
              About
            </AnchorLink>
          </li>
          <li className=" md:p-2 p-4 xs:p-2 sm:p-2 ml-2 text-yellow font-bold uppercase cursor-pointer">
            <AnchorLink className="menu-item" href="#stt">
              Track
            </AnchorLink>
          </li>
        </ul>
      </div>

      {/* TOGGLE MOBILE MENU  */}
      <div className="w-1/3 float-right pin-t pin-r pr-4 xxl:hidden xxxl:hidden md:hidden xl:hidden lg:hidden">
        <span
          className="float-right cursor-pointer bg-navbar p-2 pin-t pin-r "
          onClick={() => {
            props.toggleMenu();
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="fa-2x xxl:hidden xl:hidden lg:hidden md:hidden text-yellow"
          />
        </span>
      </div>
      {props.misc.showMenuCollapsed == true ? (
        <div
          style={styleDropMenu}
          className="absolute pin-t mt-20 bg-grey-darkest xxl:hidden xl:hidden lg:hidden md:hidden w-full shadow-md"
        >
          <ul className="w-full mt-2  ml-0 pl-0">
            <AnchorLink className="" href="#video">
              <li
                style={{ display: "block" }}
                className="border-semi-transparent border-b-2 text-yellow mt-1 p-4 text-center bg-grey-darkest hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer"
              >
                Home
              </li>
            </AnchorLink>
            <AnchorLink className="" href="#about">
              <li
                style={{ display: "block" }}
                className="border-semi-transparent border-b-2 text-yellow mt-1 p-4 text-center bg-grey-darkest hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer"
              >
                About
              </li>
            </AnchorLink>
            <AnchorLink className="" href="#stt">
              <li
                style={{ display: "block" }}
                className="text-yellow mt-1 p-4 text-center bg-grey-darkest hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer"
              >
                Track
              </li>
            </AnchorLink>
          </ul>
        </div>
      ) : (
        <div />
      )}
      {/* END TOGGLE MOBILE MENU */}
    </div>
  );
};

export default header;
