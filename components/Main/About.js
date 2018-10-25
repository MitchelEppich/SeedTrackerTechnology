import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faGlobe, faPlaneArrival, faLock, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

library.add(faGlobe, faPlaneDeparture, faLock);

const About = props => {
    return (
        <div id="about" className="w-full about-section text-white">
            <h2 style={{
                fontSize: "45px",
                color: "rgba(165, 165, 165, 0.62)",
                padding: "10px",
            }} className="">About Seed Tracker Technology</h2>
            <p className="px-12 inline-flex leading-normal mt-4 w-full text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <div className="px-12 inline-flex w-full mt-12 justify-around">
                <div className="px-4 py-2 m-2 animate-icons">
                    <FontAwesomeIcon icon={faGlobe} className="fa-5x pb-4 text-semi-transparent" />
                    <h4>Track your Order</h4>
                </div>
                <div className="px-4 py-2 m-2 animate-icons">
                    <FontAwesomeIcon icon={faPlaneDeparture} className="fa-5x pb-4 text-semi-transparent" />
                    <h4>Status Notifications</h4>
                </div>
                <div className="px-4 py-2 m-2 animate-icons">
                    <FontAwesomeIcon icon={faLock} className="fa-5x pb-4 text-semi-transparent" />
                    <h4>Your order always safe</h4>
                </div>
                
            
            </div>

        </div>
    )
}

export default About