import PieChart from "react-minimal-pie-chart";

const StrainInfoGraphs = props => {
  return (
    <div style={{ width: "100px" }}>
      <PieChart
        data={[
          {
            title: "THC",
            value: props.misc.strain.pThc[0],
            color: "#546e79"
          },
          {
            title: "CBN",
            value: props.misc.strain.pCbn[0] * 5,
            color: "#d0d0d0"
          },

          {
            title: "CBD",
            value: props.misc.strain.pCbd[0] * 5,
            color: "#33434e"
          }
        ]}
        lineWidth={25}
        paddingAngle={5}
        // paddingAngle={1}
        // rounded
        animate
      />
    </div>
  );
};

export default StrainInfoGraphs;
