import { useSelector } from "react-redux";

import ExpenseList from "../ExpensesList/ExpensesList";

import classes from "./Expenses.module.css";

const Expenses = (props) => {
  const expensesList = useSelector((state) =>
    state.expenses.expensesList.filter((expense) => {
      const date = new Date(expense.date);

      return date.getFullYear() === Number(props.selectedYear);
    })
  );

  return <ExpenseList expensesList={expensesList}></ExpenseList>;
};

export default Expenses;
