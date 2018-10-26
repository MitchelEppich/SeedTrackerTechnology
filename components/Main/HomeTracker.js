import React from "react"

const HomeTracker = props => {
    let searched = null;
    let searchSection = null;
    return (
        <div className="total-center z-50">
        {props.searched == false ? 
            <div 
            style={{position:"absolute", zIndex: "9999999999", marginTop:"20%"}}
            className="sm:w-full sm:ml-0 w-mainCard sm:w-300 absolute text-center rounded-lg bg-yellow"
            ref={(searchPanel)=>{searchSection=searchPanel}}            
            >
                
                <h2 
                style={{
                    fontSize: '45px', 
                    // color: 'rgba(165, 165, 165, 0.62)', 
                    padding:' 10px'
                }} 
                className="text-grey-darkest uppercase">Track your Seed</h2>
                <p className="p-4 mb-4 leading-normal">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum. </p>
                <div className="w-full pb-8">
                    <div className="inline-flex">
                        <input 
                        className="h-10 w-searchBar sm:w-200 border-2 border-light-grey p-2" 
                        placeholder="Track Number.. #8454d91Xcdx"
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
                                {
                                    name: 'You',
                                    anchor: [23.80,-111.80]
                                },
                                { anchor: [null, null] }
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