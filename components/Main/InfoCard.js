import React from "react"

const InfoCard = props => {
    return (
        <div 
        hidden
        id="growCard"
        style={{
            // marginTop: "50%",
            position: "absolute",
            // marginLeft: "auto",
            // marginRight: "auto",
            zIndex: '1',
            // left: "0",
            // right: "0",
            background: "white",
            width: "550px",
            height: "725px"
        }}
        className=" m-6 border-grey-light">
        <div style={{
            margin: "30px",
            border: "2px solid #e1e2e3",
        }}>
            <div className="w-full bg-almost-black inline-flex  p-2">
                <div className="w-1/2 text-left">
                    <img 
                    style={{ width: '160px' }}
                    className="text-left p-1" src="../../static/imgs/logo2.png" />
                    
                </div>
                <div style={{color:"#ffffff", zIndex: "99999"}} className="w-1/2 text-right">
                <img 
                    // style={{ width:  }}
                    className="text-right mr-2 pt-3" src="../../static/imgs/GrowCardText.png" />
                </div>
            </div>   
            <hr className="m-2" style={{ backgroundColor: "rgba(103, 112, 117, 0.2)", height: "2px" }} />        
            <div className="w-550 inline-flex p-2 pt-8">
                <span className="w-1/3 p-2">
                    <img style={{
                        width: '160px',
                        height: '160px'
                    }}
                    className="relative" src="../../static/imgs/female-seeds-pure-ak-feminized.jpeg"/> 
                    <img style={{
                            marginLeft: "-30px",
                            marginTop: "-20px"
                    }} 
                    className="w-16 h-16 absolute" src="../../static/imgs/cropking-logo.png"/>
                    
                </span>
                <span className="w-2/3 p-2 ml-8">
                <h4 className="uppercase pb-2">Strain Name:</h4>
                <p>Type:</p>
                <p>THC:</p>
                <p>Indica % / Sativa %:</p>
                <br/>
                <p>Average Height:</p>
                <p>Average Yeild:</p>
                <p>Average Grow Time:</p>
                    
                </span>
            </div>
            <hr className="m-2" style={{ backgroundColor: "rgba(103, 112, 117, 0.2)", height: "2px" }} />
            <div className="w-550 inline-flex p-2">                
                <span className="w-1/3 p-2">
                    <h4 className="uppercase pb-2">Stats:</h4>
                    <p>Germination:</p>
                    <p>30 days:</p>
                    <p>45 days:</p>
                    <p>In House:</p>                                    
                </span>
                <span className="w-1/3 p-2">  
                    <h4 className="uppercase pb-2">Dates:</h4>                  
                    <p>Pack Date:</p>
                    <p>Harvest Date:</p>
                    <p>Ship Date:</p>                                                     
                </span>
                <span className="w-1/3 p-2">
                    <h4 className="uppercase pb-2">Effects:</h4>
                    <p>- Drowsy</p>
                    <p>- Hyper</p>
                    <p>- Scared</p>
                    
                </span>
            </div>
            <hr className="m-2" style={{ backgroundColor: "rgba(103, 112, 117, 0.2)", height: "2px" }} />
            <div className="w-550 inline-flex p-2">
                <span className="w-1/3 p-2 pt-0">
                    <img style={{
                        width: '130px',
                        height: '130px'
                    }}
                    className="" src="../../static/imgs/qrcode.png"/>
                    
                </span>
                <span className="w-2/3 p-2">
                    <h4 className="uppercase pb-2">Company Name:</h4>
                    <p>Phone:</p>
                    <p>Address:</p>
                    <p>Website:</p>
                </span>
            </div>
            
            <p className="p-2 pt-3 pb-3 text-xs">* Results may vary.</p>

            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default InfoCard