import ExpenseItem from "../ExpenseItem/ExpenseItem";

import classes from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  return (
    <div className={classes.list}>
      {props.expensesList.map((expense) => {
        return (
          <ExpenseItem
            key={expense._id}
            title={expense.title}
            amount={expense.amount}
            date={new Date(expense.date)}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};

export default ExpensesList;
