import { useSelector } from "react-redux";
import { useState, useEffect, useMemo } from "react";

import Card from "../../components/UI/Card/Card";
import Chart from "../../components/Chart/Chart";
import Expenses from "../../components/Expenses/Expenses";

import classes from "./Home.module.css";

const Home = (props) => {
  //Selector
  const expensesList = useSelector((state) => state.expenses.expensesList);

  //State
  const [selectedYear, setSelectedYear] = useState(null);
  const [dataPoints, setDataPoints] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [allYears, setAllYears] = useState([]);

  useEffect(() => {
    setAllYears([]);
    const tempAllYears = [];
    expensesList.forEach((expense) => {
      const date = new Date(expense.date);
      if (!tempAllYears.includes(date.getFullYear()))
        tempAllYears.push(date.getFullYear());
    });
    setAllYears(tempAllYears);
    setIsFirstRender(true);
  }, [expensesList]);

  useEffect(() => {
    let tempDataPoints = [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "July", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dec", value: 0 },
    ];

    if (isFirstRender) {
      console.log(Math.max(...allYears));
      if (!selectedYear)
        if (allYears.length !== 0) setSelectedYear(Math.max(...allYears));
      setIsFirstRender(false);
    }

    expensesList.forEach((expense) => {
      const date = new Date(expense.date);
      if (date.getFullYear() === Number(selectedYear)) {
        tempDataPoints[date.getMonth()].value += expense.amount;
      }
    });
    setDataPoints(tempDataPoints);
  }, [selectedYear, expensesList, isFirstRender, allYears]);

  const selectYearHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className={classes.container}>
      <Card>
        <Chart dataPoints={dataPoints}></Chart>
      </Card>
      <Card className={classes["expenses-card"]}>
        <div className={classes.dropdown}>
          <select onChange={selectYearHandler}>
            {allYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <Expenses selectedYear={selectedYear}></Expenses>
      </Card>
    </div>
  );
};

export default Home;
