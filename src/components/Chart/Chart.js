import ChartBar from "../ChartBar/ChartBar";

import classes from "./Chart.module.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = dataPointValues.reduce(
    (sum, newvalue) => (sum += newvalue),
    0
  );

  return (
    <div className={classes.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
