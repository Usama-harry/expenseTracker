import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const amount = `Rs. ${props.amount}`;
  return (
    <div className={classes.container}>
      <div className={classes.date}>
        <div className={classes.month}>
          {props.date.toLocaleString("default", { month: "long" })}
        </div>
        <div className={classes.day}>{props.date.getDay()}</div>
        <div className={classes.year}>{props.date.getFullYear()}</div>
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.amount}>{amount}</div>
    </div>
  );
};

export default ExpenseItem;
