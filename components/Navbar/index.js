import React from "react"


const Navbar = props => {
    return (
        <div className="w-full h-16 bg-yellow pin-t flex flex-wrap items-center shadow fixed z-50">
            <div className="inline-flex w-logo ml-4">
                <a onClick={()=>{                  
                }}><h1 className="text-almost-brown p-2">STT</h1></a>
            </div>
            <div className="inline-flex ml-32">
            <ul className="inline-flex">
                <li className="p-2 ml-2 text-almost-brown hover:bg-almost-brown hover:text-black font-bold uppercase cursor-pointer">About</li>
                <li className="p-2 ml-2 text-almost-brown hover:bg-almost-brown hover:text-black font-bold uppercase cursor-pointer">How To Use</li>
                <li className="p-2 ml-2 text-almost-brown hover:bg-almost-brown hover:text-black font-bold uppercase cursor-pointer">STT</li>
            </ul>
                
            </div>
            

            
            
        </div>
    )
}


export default Navbar