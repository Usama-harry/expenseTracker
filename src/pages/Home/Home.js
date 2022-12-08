import Card from "../../components/UI/Card/Card";
import Chart from "../../components/Chart/Chart";

import classes from "./Home.module.css";

const Home = (props) => {
  const dataPoints = [
    {
      label: "Jan",
      value: 4,
    },
    {
      label: "Feb",
      value: 41,
    },
    {
      label: "Mar",
      value: 23,
    },
    {
      label: "Apr",
      value: 7,
    },
    {
      label: "May",
      value: 12,
    },

    {
      label: "Jun",
      value: 17,
    },
    {
      label: "Jul",
      value: 21,
    },
    {
      label: "Aug",
      value: 27,
    },
    {
      label: "Sep",
      value: 11,
    },
    {
      label: "Oct",
      value: 2,
    },
    {
      label: "Nov",
      value: 1,
    },
    {
      label: "Dec",
      value: 36,
    },
  ];
  return (
    <div className={classes.container}>
      <Card>
        <Chart dataPoints={dataPoints}></Chart>
      </Card>
    </div>
  );
};

export default Home;
