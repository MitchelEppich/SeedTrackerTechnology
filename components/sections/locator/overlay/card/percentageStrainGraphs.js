const PercentageStrainGraphs = props => {
  return (
    <div>
      <div className="w-full p-2 mt-0">
        <div
          style={{
            width: "100%",
            background: "#cecece",
            height: "18px"
          }}
          className="w-full relative rounded"
        >
          {/* SATIVA BAR */}
          <p
            style={{
              width: props.misc.strain.sativa * 100 + "%",
              background: "#566d86",
              height: "18px",
              transition: "all ease .3s"
            }}
            className="w-full absolute"
          />
          {/* INDICA BAR */}
          <p
            style={{
              width: props.misc.strain.indica * 100 + "%",
              background: "#65b3ac",
              height: "18px",
              marginLeft: props.misc.strain.sativa * 100 + "%"
            }}
            className="w-full absolute"
          />
          {/* RUDERALIS BAR */}
          {props.misc.strain.ruderalis != 0 &&
          props.misc.strain.ruderalis != null ? (
            <p
              style={{
                width: props.misc.strain.ruderalis * 100 + "%",
                background: "#404040",
                height: "18px",
                marginLeft:
                  props.misc.strain.sativa * 100 +
                  props.misc.strain.indica * 100 +
                  "%"
              }}
              className="w-full absolute"
            />
          ) : null}
          {/* VALUES SECTION */}
          {/* SATIVA */}
          <p className="w-full rounded absolute mt-5 ml-6 opacity-50">
            {props.misc.strain.sativa * 100 + "%"}
          </p>
          {/* INDICA */}
          <p
            style={{
              marginLeft: props.misc.strain.sativa * 100 + 20 + "%"
            }}
            className="w-full rounded absolute mt-5 opacity-50"
          >
            {props.misc.strain.indica * 100 + "%"}
          </p>
          {/* RUDERALIS */}
          {props.misc.strain.ruderalis != 0 &&
          props.misc.strain.ruderalis != null ? (
            <p
              style={{
                marginLeft:
                  props.misc.strain.sativa * 100 +
                  props.misc.strain.indica * 100 +
                  "%"
              }}
              className="w-full rounded absolute mt-5 opacity-50"
            >
              {props.misc.strain.ruderalis * 100 + "%"}
            </p>
          ) : null}
        </div>
      </div>
      {/* LEGENDS SECTION */}
      <div className="w-full px-4 inline-flex mt-4 sm:mt-4 xs:mt-4 justify-center text-xs">
        <div className="w-1/3 inline-flex justify-center flex">
          <div style={{ background: "#566d86", width: "18px", height: "18px" }}>
            {""}
          </div>
          <p className="ml-1 items-center flex">Sativa</p>
        </div>
        <div className="w-1/3 inline-flex justify-center flex">
          <div style={{ background: "#65b3ac", width: "18px", height: "18px" }}>
            {""}
          </div>
          <p className="ml-1 items-center flex">Indica</p>
        </div>
        {props.misc.strain.ruderalis != 0 &&
        props.misc.strain.ruderalis != null ? (
          <div className="w-1/3 inline-flex justify-center flex">
            <div
              style={{ background: "#404040", width: "18px", height: "18px" }}
            >
              {""}
            </div>
            <p className="ml-1 items-center flex">Ruderalis</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PercentageStrainGraphs;
