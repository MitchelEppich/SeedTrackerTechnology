import React from "react"

const HomeTracker = props => {
    let searched = null;
    let searchSection = null;
    return (
        <div>
        {props.searched == false ? 
            <div 
            className="w-mainCard absolute text-center rounded-lg main-message bg-yellow"
            ref={(searchPanel)=>{searchSection=searchPanel}}            
            >
                <h3 className="text-xxl">Welcome to</h3>
                <h2 className="text-xxxl">Seed Tracker Technology</h2>
                <p className="p-4 text-xl">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
                <div className="w-full pb-8">
                    <div className="inline-flex">
                        <input 
                        className="h-10 w-searchBar border-2 border-light-brown p-2" 
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
                        <button className="h-10 bg-yellow-light text-almost-brown text-lg border border-light-brown px-6 ml-1 font-bold" 
                        onClick={()=> {
                            console.log("Track Number: " + searched.value);
                            props.search("true");
                        }}>Search 
                        </button>
                    </div>
                </div>

            </div> : null }
            </div>
    )
}

export default HomeTracker;