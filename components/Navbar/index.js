import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLink from "react-anchor-link-smooth-scroll";

library.add(faBars);

const Navbar = props => {
  let styleDropMenu = {
    transform:
      props.showMenuCollapsed == true ? "translateX(0)" : "translateX(-100px)",
    WebkitTransform:
      props.showMenuCollapsed == true ? "translateX(0)" : "translateX(-100px)",
    OTransform:
      props.showMenuCollapsed == true ? "translateX(0)" : "translateX(-100px)",
    MozTransform:
      props.showMenuCollapsed == true ? "translateX(0)" : "translateX(-100px)",
    MsTransform:
      props.showMenuCollapsed == true ? "translateX(0)" : "translateX(-100px)",
    transition:
      props.showMenuCollapsed == true ? "all 0.5s ease" : "all 0.5s ease",
       
  };

  return (
    <div className="w-full h-20 bg-navbar pin-t flex flex-wrap items-center shadow-md fixed z-50">
      <div className="inline-flex w-1/3 sm:w-2/3 pl-8 sm:pl-2 sm:ml-0">       
        <a href="/">
          <img 
            className="cursor-pointer "
            src="../../static/imgs/logo2.png"
          />
        </a>
      </div>
      <div className="inline-flex justify-end w-2/3 pr-8 xl:pr-16 xxl:pr-32 pin-r sm:hidden xs:hidden">
        <ul className="inline-flex justify-end">
          <li className="menu-item md:p-2 p-4 xs:p-2 sm:p-2 ml-2 text-yellow font-bold uppercase cursor-pointer">
            <AnchorLink className="menu-item text-yellow" href="#video">
              Home
            </AnchorLink>
          </li>
          <li className="menu-item md:p-2 p-4 xs:p-2 sm:p-2 ml-2 text-yellow font-bold uppercase cursor-pointer">
            <AnchorLink className="menu-item text-yellow" href="#about">
              About
            </AnchorLink>
          </li>
          <li className="menu-item md:p-2 p-4 xs:p-2 sm:p-2 ml-2 text-yellow font-bold uppercase cursor-pointer">
            <AnchorLink className="menu-item text-yellow" href="#video">
              How To Use
            </AnchorLink>
          </li>
          <li className="menu-item md:p-2 p-4 xs:p-2 sm:p-2 ml-2 text-yellow font-bold uppercase cursor-pointer">
            <AnchorLink className="menu-item text-yellow" href="#stt">
              STT
            </AnchorLink>
          </li>
        </ul>
      </div>
                
      {/* TOGGLE MOBILE MENU  */}
      <div className="w-1/3 float-right pin-t pin-r pr-4 xxl:hidden md:hidden xl:hidden lg:hidden">
        <span
          className="float-right cursor-pointer bg-navbar p-2 pin-t pin-r "
          onClick={() => {
            props.toggleMenu();
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="fa-2x xxl:hidden xl:hidden lg:hidden md:hidden text-white"
          />
        </span>
      </div>
      {props.showMenuCollapsed == true ? (
        <div
          style={styleDropMenu}
          className="absolute pin-t mt-20 bg-grey-darkest xxl:hidden xl:hidden lg:hidden md:hidden w-full"
        >
          <ul className="w-full mt-2  ml-0 pl-0">
            <AnchorLink className="text-white" href="#video">
              <li
                style={{ display: "block" }}
                className="border-semi-transparent border-b-2 text-white mt-1 p-4 text-center bg-grey-darkest hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer"
              >
                Home
              </li>
            </AnchorLink>
            <AnchorLink className="text-white" href="#about">
              <li
                style={{ display: "block" }}
                className="border-semi-transparent border-b-2 text-white mt-1 p-4 text-center bg-grey-darkest hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer"
              >
                About
              </li>
            </AnchorLink>
            <AnchorLink className="text-white" href="#video">
              <li
                style={{ display: "block" }}
                className="border-semi-transparent border-b-2 text-white mt-1 p-4 text-center bg-grey-darkest hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer"
              >
                How To Use
              </li>
            </AnchorLink>
            <AnchorLink className="text-white" href="#stt">
              <li
                style={{ display: "block" }}
                className="text-white mt-1 p-4 text-center bg-grey-darkest hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer"
              >
                STT
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

export default Navbar;
