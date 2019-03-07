import React from "react";

const handout = props => {
  console.log(props.strain);

  let typeStrain = () => {
    if (props.strain.genetic == 0) {
      return "Feminized";
    }
    if (props.strain.genetic == 1) {
      return "Autoflower Feminized";
    }
    if (props.strain.genetic == 2) {
      return "Regular";
    }
    if (props.strain.genetic == 3) {
      return "Medical";
    }
  };

  let averageYield = () => {
    if (props.strain != null) {
      let avgYield = (props.strain.i_yield + props.strain.o_yield) / 2;
      return avgYield;
    } else {
      null;
    }
  };

  return props.strain ? (
    <div
      hidden
      id="growCard"
      style={{
        position: "absolute",
        zIndex: "1",
        background: "white",
        width: "550px",
        height: "725px",
        fontSize: "14px"
      }}
      className="m-6 border-grey-light"
    >
      <div
        style={{
          margin: "30px",
          border: "2px solid #e1e2e3"
        }}
      >
        <div className="w-full bg-grey inline-flex p-2">
          <div className="w-1/2 text-left">
            <img
              style={{ width: "160px" }}
              className="text-left p-1"
              src="../../static/imgs/logo2.png"
            />
          </div>
          <div
            style={{ color: "#ffffff", zIndex: "99999" }}
            className="w-1/2 text-right"
          >
            <img
              style={{ height: "32px" }}
              className="text-right mr-4 pt-2"
              src="../../static/imgs/GrowCardText.png"
            />
          </div>
        </div>

        <div className="w-full inline-flex p-2 pt-8">
          <span className="w-1/3 p-2">
            <img
              style={{
                width: "160px",
                height: "170px"
              }}
              className="relative"
              src="../../static/imgs/female-seeds-pure-ak-feminized.jpeg"
            />
            <img
              style={{
                marginLeft: "-37px",
                marginTop: "-32px",
                borderRadius: "50%",
                background: "white",
                border: "2px solid white",
                boxShadow: "rgba(78, 78, 78, 0.25) 1px 1px 5px"
              }}
              className="w-16 h-16 absolute"
              src="../../static/imgs/cropking-logo.png"
            />
          </span>
          <span className="w-2/3 p-2 pl-6">
            <h4 className="uppercase p-2 text-md bg-grey text-yellow mb-2">
              {props.strain.name}
            </h4>
            <p className="pl-2">
              <span className="font-bold">Genetic: </span>
              {props.strain.genetic}
            </p>
            <p className="pl-2">
              <span className="font-bold">Origin: </span>
              {props.strain.country}
            </p>
            <p className="pl-2">
              <span className="font-bold">THC: </span>
              {props.strain.pThc[0]}%;{" "}
              {props.strain.pCbn[0] != null ? (
                <span>CBN {props.strain.pCbn[0]}%;</span>
              ) : null}{" "}
              CBD {props.strain.pCbd[0]}%
            </p>
            <p className="pl-2">
              <span className="font-bold">Indica: </span>
              {props.strain.indica}%
            </p>
            <p className="pl-2">
              <span className="font-bold">Sativa: </span>
              {props.strain.sativa}%
            </p>
            {props.strain.ruderalis != null ? (
              <p className="pl-2">
                <span className="font-bold">Ruderalis: </span>
                {props.strain.ruderalis}%
              </p>
            ) : null}
            <p className="pl-2">
              <span className="font-bold">Average Yield: </span>
              {props.strain.avgYield}g
            </p>
            <p className="pl-2">
              <span className="font-bold">Average Grow Time: </span>
              {props.strain.flowerTime}
            </p>
            <p className="pl-2">
              <span className="font-bold">Effects: </span>
              {props.strain.effect}
            </p>
          </span>
        </div>
        <hr
          className="m-2"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            height: "2px"
          }}
        />
        <div className="w-full inline-flex p-2">
          <span className="w-1/2 p-2">
            <h4 className="uppercase p-2 text-md bg-grey text-yellow mb-2">
              Germination Tests
            </h4>
            <p>
              <span className="font-bold ml-2">30 days: </span>
              {props.strain.germ[0]}%
            </p>
            <p>
              <span className="font-bold ml-2">45 days: </span>
              {props.strain.germ[1]}%
            </p>
            <p>
              <span className="font-bold ml-2">In House: </span>
              {props.strain.germ[2]}%
            </p>
          </span>
          <hr
            className="m-2"
            style={{
              backgroundColor: " rgba(90, 90, 90, 0.8)",
              height: "90px",
              width: "2px"
            }}
          />
          <span className="w-1/2 p-2 text-center">
            <h4 className="uppercase underline text-md mb-1">Visit us at</h4>
            <img
              style={{
                width: "67px",
                height: "67px"
              }}
              className="pt-0 text-center"
              src="../../static/imgs/qrcode.png"
            />
          </span>
        </div>
        <span className="">
          <p className="p-2 pt-1 pl-4 pb-2 text-xs bg-grey text-yellow">
            * Results may vary.
          </p>
        </span>
      </div>
    </div>
  ) : null;
};

export default handout;
