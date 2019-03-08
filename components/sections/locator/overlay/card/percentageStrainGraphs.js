const PercentageStrainGraphs = props => {
  return (
    <div>
      <div className="w-full p-2 mt-4">
        <div
          style={{
            width: "100%",
            background: "#cecece",
            height: "18px"
          }}
          className="w-full relative rounded"
        >
          <p
            style={{
              width: props.strain.sativa * 100 + "%",
              background: "#566d86",
              height: "18px"
            }}
            className="w-full absolute"
          />
          <p
            style={{
              width: props.strain.indica * 100 + "%",
              background: "#65b3ac",
              height: "18px",
              marginLeft: props.strain.sativa * 100 + "%"
            }}
            className="w-full absolute"
          />
          {props.strain.ruderalis != 0 && props.strain.ruderalis != null ? (
            <p
              style={{
                width: props.strain.ruderalis * 100 + "%",
                background: "#404040",
                height: "18px",
                marginLeft:
                  props.strain.sativa * 100 + props.strain.indica * 100 + "%"
              }}
              className="w-full absolute"
            />
          ) : null}
          <p className="w-full rounded absolute mt-5 ml-6 opacity-50">
            {props.strain.sativa * 100 + "%"}
          </p>
          <p
            style={{
              marginLeft: props.strain.sativa * 100 + 20 + "%"
            }}
            className="w-full rounded absolute mt-5 opacity-50"
          >
            {props.strain.indica * 100 + "%"}
          </p>
          {props.strain.ruderalis != 0 && props.strain.ruderalis != null ? (
            <p
              style={{
                marginLeft:
                  props.strain.sativa * 100 + props.strain.indica * 100 + "%"
              }}
              className="w-full rounded absolute mt-5 opacity-50"
            >
              {props.strain.ruderalis * 100 + "%"}
            </p>
          ) : null}
        </div>
      </div>
      <div className="w-full px-4 inline-flex mt-6 justify-center">
        <div className="w-1/3 inline-flex justify-center flex">
          <div style={{ background: "#566d86", width: "18px", height: "18px" }}>
            {""}
          </div>
          <p className="ml-1">Sativa</p>
        </div>
        <div className="w-1/3 inline-flex justify-center flex">
          <div style={{ background: "#65b3ac", width: "18px", height: "18px" }}>
            {""}
          </div>
          <p className="ml-1">Indica</p>
        </div>
        {props.strain.ruderalis != 0 && props.strain.ruderalis != null ? (
          <div className="w-1/3 inline-flex justify-center flex">
            <div
              style={{ background: "#404040", width: "18px", height: "18px" }}
            >
              {""}
            </div>
            <p className="ml-1">Ruderalis</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PercentageStrainGraphs;
