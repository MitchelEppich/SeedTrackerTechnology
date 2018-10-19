import React from "react"


const Navbar = props => {
    return (
        <div className="w-full h-16 bg-yellow pin-t flex flex-wrap items-center shadow fixed z-50">
            <div className="inline-flex w-logo ml-4">
                <a onClick={()=>{                  
                }}><h1 className="text-almost-brown p-2">STT</h1></a>
            </div>
            <div className="inline-flex">
                <input 
                className="h-10 w-searchBar border-2 border-light-brown p-2" 
                placeholder="Track Number.. #8454d91Xcdx"
                defaultValue={props.searched ? props.navbarSearch : "" }
                onChange={e => {
                    let input = e.target.value;
                    console.log(input)
                    if (input.length != 0) {
                      props.trackNumber(e.target.value, 12);                      
                    }
                  }}
                
                />
            </div>
            <div className="inline-flex">
                <button 
                className="h-10 bg-yellow-light text-almost-brown text-lg border border-1 border-light-brown px-6 ml-4 font-bold"
                onClick={()=> {
                    props.toggleInfoSection()  
                }}>Search</button>
            </div>

            
            
        </div>
    )
}


export default Navbar