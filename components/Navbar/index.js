import React from "react"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBars);

const Navbar = props => {


    let styleDropMenu = {    
        transform: props.showMenuCollapsed == true
          ? "translateX(0)"
          : "translateX(-100px)",
        WebkitTransform: props.showMenuCollapsed == true
          ? "translateX(0)"
          : "translateX(-100px)",
        OTransform: props.showMenuCollapsed == true
          ? "translateX(0)"
          : "translateX(-100px)",
        MozTransform: props.showMenuCollapsed == true
          ? "translateX(0)"
          : "translateX(-100px)",
        MsTransform: props.showMenuCollapsed == true
          ? "translateX(0)"
          : "translateX(-100px)",
        transition: props.showMenuCollapsed == true
        ? "all 0.5s ease"
        : "all 0.5s ease",
        }

    return (
        <div className="w-full h-20 bg-yellow pin-t flex flex-wrap items-center shadow-md fixed z-50">
            <div className="inline-flex w-1/3 sm:w-1/2 pl-8 sm:pl-2 sm:ml-0">
                {/* <a href="/">
                    <img className="p-2 cursor-pointer"  src="../../static/imgs/logo.png"/>
                </a> */}
                <a href="/">
                    <img className="p-2 shadow cursor-pointer"  src="../../static/imgs/logo2.png"/>
                </a>
            </div> 
            <div className="inline-flex justify-end w-2/3 pr-8 pin-r sm:hidden xs:hidden">
                <ul className="inline-flex justify-end">
                    <a href="#"><li className="menu-item p-4 xs:p-2 sm:p-2 ml-2 text-navy-blue  hover:text-grey font-bold uppercase cursor-pointer">Home</li></a>
                    <a href="#about"><li className="menu-item p-4 xs:p-2 sm:p-2 ml-2 text-navy-blue  hover:text-grey font-bold uppercase cursor-pointer">About</li></a>
                    <a href="#"><li className="menu-item p-4 xs:p-2 sm:p-2 ml-2 text-navy-blue  hover:text-grey font-bold uppercase cursor-pointer">How To Use</li></a>
                    <a href="#stt"><li className="menu-item p-4 xs:p-2 sm:p-2 ml-2 text-navy-blue  hover:text-grey font-bold uppercase cursor-pointer">STT</li></a>
                </ul>   
            </div> 
            
            <div className="w-1/2 float-right pin-t pin-r pr-4 xxl:hidden md:hidden  xl:hidden lg:hidden">
            <span 
            className="float-right cursor-pointer bg-navy-blue p-2 pin-t pin-r "
            onClick={()=>{
                props.toggleMenu()
            }}
            >
                <FontAwesomeIcon icon={faBars} className="fa-2x xxl:hidden xl:hidden lg:hidden md:hidden text-white"/>
            </span>                  
            </div>
            {props.showMenuCollapsed == true ? 
            <div style={styleDropMenu} className="absolute pin-t mt-20 bg-navy-blue xxl:hidden xl:hidden lg:hidden md:hidden w-full">
            <ul className="w-full mt-2  ml-0 pl-0">
                    <a style={{display: 'block'}} className="" href="#"><li className="border-semi-transparent border-b-2 text-white mt-1 p-4 text-center bg-navy-blue hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer">Home</li></a>
                    <a style={{display: 'block'}} className="" href="#about"><li className="border-semi-transparent border-b-2 text-white mt-1 p-4 text-center bg-navy-blue hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer">About</li></a>
                    <a style={{display: 'block'}} className="" href="#"><li className="border-semi-transparent border-b-2 text-white mt-1 p-4 text-center bg-navy-blue hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer">How To Use</li></a>
                    <a style={{display: 'block'}} className="" href="#stt"><li className=" text-white mt-1 p-4 text-center bg-navy-blue hover:bg-light-blue hover:text-white font-bold uppercase cursor-pointer">STT</li></a>
                </ul> 
            </div> : <div/> }     
        </div>
    )
}


export default Navbar