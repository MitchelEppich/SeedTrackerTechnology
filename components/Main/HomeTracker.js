import React from "react"

const HomeTracker = props => {
    let searched = null;
    let searchSection = null;
    return (
        <div className="total-center z-50">
        {props.searched == false ? 
            <div 
            style={{position:"absolute", zIndex: "9999999999"}}
            className="sm:mx-2 mt-64 absolute w-550 main-message text-center rounded-lg bg-yellow"
            ref={(searchPanel)=>{searchSection=searchPanel}}            
            >
                
                <h2 
                style={{
                    fontSize: '45px', 
                    // color: 'rgba(165, 165, 165, 0.62)', 
                    padding:' 10px'
                }} 
                className="text-grey-darkest uppercase">Track your Seed</h2>
                <p className="p-4 mb-4 leading-normal">Enter your email address and your unique tracking number on your package of seeds or in the information that was sent to you when you made your online purchase. </p>
                <hr style={{ backgroundColor: 'rgba(103, 112, 117, 0.2)', height: '2px'}} />
                <div className="w-full pb-4">
                    <div className="p-2">
                        <h3 className="text-grey-darkest p-2 uppercase">Please, select one option:</h3>
                    </div>
                    <div className="block flex h-10 justify-around">
                        <div className="uppercase">
                            <input type="checkbox" className="checkbox"/>Store
                        </div>
                        <div className="uppercase">
                            <input type="checkbox" className="checkbox"/>Retail
                        </div>
                    </div>
                    <hr style={{ backgroundColor: 'rgba(103, 112, 117, 0.2)', height: '2px'}} />
                    <div className="p-2">
                        <h3 className="text-grey-darkest p-2 uppercase">Tracking number:</h3>
                    </div>
                    <div className="inline-flex">
                        <input 
                        className="h-10 w-searchBar sm:w-200 border-2 border-light-grey p-2" 
                        placeholder="#8454d91"
                        type="search"                
                        aria-label="Search through site content"
                        defaultValue={props.searched ? props.navbarSearch : "" }
                        id="search"
                        ref={(search)=>{searched = search}}
                        name="search"
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
                        <button style={{transition: 'all 0.5s ease'}} className="h-10 bg-grey-darkest text-white text-md border border-light-blue uppercase px-5 ml-1 font-bold hover:bg-grey-light hover:text-grey-darkest hover:border-transparent hover:border " 
                        onClick={()=> {
                            console.log("Track Number: " + searched.value);
                            props.search("true");
                            props.setLocations([
                                props.landmarks.spain,
                                props.landmarks.cks,
                                // props.landmarks.you,
                                {
                                    name: 'You',
                                    anchor: [23.80,-111.80]
                                },
                                { name: 'null',anchor: [null, null] }
                            ])
                        }}>Search 
                        </button>
                    </div>
                </div>

            </div> : null }
            </div>
    )
}

export default HomeTracker;