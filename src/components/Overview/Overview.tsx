// import styles  from './Overview.module.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const Overview = () => {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  return (
    <>
      <h1>Overview</h1>
      {/* <VictoryChart 
				domainPadding={20} 
				theme={VictoryTheme.material}
			>
				<VictoryAxis 
					tickValues={[1, 2, 3, 4]}
					tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
				/>
				<VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar 
					data={data} 
					x="quarter" 
					y="earnings" 
				/>
      </VictoryChart> */}
      <h2>Overview of budgeted/spent/available</h2>
      <h2>Personal Budget Overview</h2>
      <h2>Joint Budget Overview</h2>
    </>
  );
};

export default Overview;
