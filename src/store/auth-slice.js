import { createSlice } from "@reduxjs/toolkit";

import { expenseActions } from "./expense-slice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const ipAddress = "http://3.113.6.131:5000";
export const signUp = (
  name,
  email,
  password,
  confirmPassword,
  setIsLoading,
  setError
) => {
  return async (dispatch) => {
    if (name.trim().length < 3) {
      setError(
        "There was a problem signing up. Name should be atleast 3 characters long."
      );
      return;
    }
    if (!email.trim().includes("@")) {
      setError("There was a problem signing up. Entered email is not valid.");
      return;
    }
    if (password.trim().length < 6) {
      setError("There was a problem signing up. Password minimum length is 6.");
      return;
    }
    if (confirmPassword.trim() !== password.trim()) {
      setError("There was a problem signing up. Password do not match.");
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(`${ipAddress}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setIsLoading(false);
        dispatch(expenseActions.set(responseData.expenses));
        return dispatch(authActions.login(responseData));
      } else {
        setError(`There was problem signing up. ${responseData.message}`);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      setError(`There was problem signing up. ${error}`);
      setIsLoading(false);
      return;
    }
  };
};

export const signIn = (email, password, setIsLoading, setError) => {
  return async (dispatch) => {
    if (!email.trim().includes("@")) {
      setError("There was a problem signing in. Entered email is not valid.");
      return;
    }
    if (password.trim().length < 6) {
      setError("There was a problem signing in. Password minimum length is 6.");
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(`${ipAddress}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setIsLoading(false);
        dispatch(expenseActions.set(responseData.expenses));
        return dispatch(authActions.login(responseData));
      } else {
        setError(`There was problem signing in. ${responseData.message}`);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      setError(`There was problem signing in. ${error}`);
      setIsLoading(false);
      return;
    }
  };
};

export const authActions = authSlice.actions;

export default authSlice;
