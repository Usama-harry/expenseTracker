import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expensesList: [],
  },
  reducers: {
    add(state, action) {
      const index = state.expensesList.findIndex((expense) => {
        return action.payload.date > expense.date;
      });

      state.expensesList.splice(index, 0, action.payload);
    },
    set(state, action) {
      state.expensesList = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;

const ipAddress = "http://3.113.6.131:5000";
export const addExpense = (
  title,
  amount,
  date,
  userId,
  setError,
  setLoading,
  setIsAdded
) => {
  return async (dispatch) => {
    if (title.trim().length < 1) {
      setError("There was problem adding expense. Invalid Title");
      return;
    }
    if (amount < 0) {
      setError("There was problem adding expense. Invalid Amount");
      return;
    }
    if (!date) {
      setError("There was problem adding expense. Invalid Date");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(`${ipAddress}/expenses/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          amount: amount,
          date: date,
          userId: userId,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        setError(responseData.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      dispatch(expenseActions.add(responseData));
      setIsAdded(true);
      return;
    } catch (error) {
      setError(`An unknown error occured. ${error}`);
      setLoading(false);
      return;
    }
  };
};

export default expenseSlice;
