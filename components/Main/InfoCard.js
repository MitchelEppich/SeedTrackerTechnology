import React from "react"

const InfoCard = props => {      
   
    let typeStrain = () => {
        if (props.strain.genetic == 0) {
            return "Feminized"
        } if (props.strain.genetic == 1) {
            return "Autoflower Feminized"
        } if (props.strain.genetic == 2) {
            return "Regular"  
        } if (props.strain.genetic == 3) {
                return "Medical"
            }
    }

    return (
        props.strain ? (
        <div 
        hidden
        id="growCard"
        style={{            
            position: "absolute",           
            zIndex: '1',            
            background: "white",
            width: "550px",
            height: "725px",
            fontSize: "14px"
        }}
        className=" m-6 border-grey-light">
        <div style={{
            margin: "30px",
            border: "2px solid #e1e2e3",
        }}>
        {/* {console.log(props.strain)} */}
            <div className="w-full bg-almost-black inline-flex  p-2">
                <div className="w-1/2 text-left">
                    <img 
                    style={{ width: '160px' }}
                    className="text-left p-1" src="../../static/imgs/logo2.png" />
                    
                </div>
                <div style={{color:"#ffffff", zIndex: "99999"}} className="w-1/2 text-right">
                <img                     
                    className="text-right mr-4 pt-3" src="../../static/imgs/GrowCardText.png" />
                </div>
            </div>   
                 
            <div className="w-full inline-flex p-2 pt-8">
                <span className="w-1/3 p-2">
                    <img style={{
                        width: '160px',
                        height: '170px'
                    }}
                    className="relative" src="../../static/imgs/female-seeds-pure-ak-feminized.jpeg"/> 
                    <img style={{
                            marginLeft: "-37px",
                            marginTop: "-32px",
                            borderRadius: "50%",
                            background: "white",
                            border: "2px solid white",
                            boxShadow: "rgba(78, 78, 78, 0.25) 1px 1px 5px"
                    }} 
                    className="w-16 h-16 absolute" src="../../static/imgs/cropking-logo.png"/>
                    
                </span>
                <span className="w-2/3 p-2 pl-6">
                <h4 className="uppercase p-2 text-md bg-grey text-yellow mb-2">{props.strain.strain}</h4>
                <p className="pl-2"><span className="font-bold">Type: </span>
                {typeStrain()}
                </p>
                <p className="pl-2">
                    <span className="font-bold">THC: </span>
                    {props.strain.p_thc}%; CBN {props.strain.p_cbn}%; CBD {props.strain.p_cbd}%
                </p>
                <p className="pl-2">
                    <span className="font-bold">Indica: </span>
                    {props.strain.p_indica}%
                </p>
                <p className="pl-2">
                    <span className="font-bold">Sativa: </span>
                    {props.strain.p_sativa}%
                </p>
                <br/>                
                <p className="pl-2">
                    <span className="font-bold">Average Yield: </span>
                    {props.strain.i_yield}g
                </p>
                <p className="pl-2">
                    <span className="font-bold">Average Grow Time: </span>
                    {props.strain.grow_time} Weeks
                </p>
                <p className="pl-2">
                    <span className="font-bold">Effects: </span>
                    {props.strain.effect}
                </p>
                    
                </span>
            </div>
            <hr className="m-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "2px" }} />
            <div className="w-full inline-flex p-2">                
                <span className="w-1/2 p-2 text-center">
                    <h4 className="uppercase pb-2 underline">Germination Tests</h4>
                    
                    <p><span className="font-bold">- 30 days: </span>
                        {props.strain.germ[0]}%
                    </p>
                    <p><span className="font-bold">- 45 days: </span>
                        {props.strain.germ[1]}%
                    </p>
                    <p><span className="font-bold">- In House: </span>
                        {props.strain.germ[2]}%
                    </p>                                    
                </span> 
                <hr className="m-2" style={{ 
                    backgroundColor:' rgba(90, 90, 90, 0.8)',
                    height: '90px',
                    width: '2px' 
                    }} />               
                <span className="w-1/2 p-2 text-center">
                <h4 className="uppercase underline">Visit us at:</h4>
                    <img style={{
                        width: '70px',
                        height: '70px'
                    }}
                    className="pt-0 text-center" src="../../static/imgs/qrcode.png"/>                    
                </span>
            </div>                     
            <span className="font-bold">
            <p className="p-2 pt-1 pb-2 text-xs bg-black text-yellow">* Results may vary.</p>
            </span>

            </div>
            <br/><br/><br/>
        </div> ) : null
    )
}

export default InfoCard