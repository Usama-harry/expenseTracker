import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Error from "../UI/Error/Error";
import { addExpense } from "../../store/expense-slice";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

import classes from "./Form.module.css";

const Form = (props) => {
  //Refs
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();
  //Dispatch
  const dispatch = useDispatch();
  //Selector
  const user = useSelector((state) => state.auth.user);
  //State
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const submitFormHandle = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const amount = amountRef.current.valueAsNumber;
    const date = dateRef.current.value;

    dispatch(addExpense(title, amount, date, user.id, setError, setIsLoading));
  };
  return (
    <form onSubmit={submitFormHandle}>
      {error && <Error style={{ textAlign: "center" }}>{error}</Error>}
      <div className={classes.form}>
        <div className={classes.input}>
          <label htmlFor="title">Title</label>
          <input ref={titleRef} id="title" type="text" required />
        </div>
        <div className={classes.input}>
          <label htmlFor="amount">Amount</label>
          <input ref={amountRef} id="amount" type="number" required />
        </div>
        <div className={classes.input}>
          <label htmlFor="date">Date</label>
          <input ref={dateRef} id="date" type="date" required />
        </div>
      </div>
      <div className={classes["btn-container"]}>
        {isLoading ? (
          <LoadingSpinner className={classes.spinner} />
        ) : (
          <button className={`btn btn-primary ${classes["add-btn"]}`}>
            Add Expense
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
