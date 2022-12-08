import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import Card from "../../components/UI/Card/Card";
import { signIn, signUp } from "../../store/auth-slice";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Error from "../../components/UI/Error/Error";

import classes from "./Auth.module.css";

const Auth = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  //State
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //Dispatch
  const dispatch = useDispatch();

  const switchLoginMode = () => setIsLoginMode((prevState) => !prevState);
  const switchShowPasswordMode = () =>
    setShowPassword((prevState) => !prevState);

  const submitFormHandler = (event) => {
    event.preventDefault();
    let name;
    let confirmPassword;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!isLoginMode) {
      name = nameRef.current.value;
      confirmPassword = confirmPasswordRef.current.value;
      dispatch(
        signUp(name, email, password, confirmPassword, setIsLoading, setError)
      );
    } else {
      dispatch(signIn(email, password, setIsLoading, setError));
    }
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <h2 className={classes["auth-title"]}>
          {isLoginMode ? "Sign in" : " Sign up"}
        </h2>
        {error && (
          <Error className={classes["responsive-width"]}>{error}</Error>
        )}
        <form onSubmit={submitFormHandler} className={classes.form}>
          {!isLoginMode && (
            <input
              ref={nameRef}
              className={`${classes.input} ${classes["responsive-width"]}`}
              type="text"
              placeholder="Name"
              minLength="3"
              min="3"
              required
            />
          )}

          <input
            ref={emailRef}
            className={`${classes.input} ${classes["responsive-width"]}`}
            type="email"
            placeholder="Email"
            required
          />
          <input
            ref={passwordRef}
            className={`${classes.input} ${classes["responsive-width"]}`}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            minLength="6"
            required
          />
          {!isLoginMode && (
            <input
              ref={confirmPasswordRef}
              className={`${classes.input} ${classes["responsive-width"]}`}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              minLength="6"
              required
            />
          )}
          <div
            className={`${classes["show-password-btn"]} ${classes["responsive-width"]}`}
          >
            <input
              id="show-password"
              type="checkbox"
              defaultChecked={showPassword}
              onClick={switchShowPasswordMode}
            />
            <label htmlFor="show-password">Show password</label>
          </div>
          {isLoading ? (
            <LoadingSpinner
              style={{ width: "30px", height: "30px" }}
            ></LoadingSpinner>
          ) : (
            <button
              className={` ${classes["submit-btn"]} ${classes["responsive-width"]} btn btn-primary`}
            >
              {isLoginMode ? "Login" : "Register"}
            </button>
          )}

          <hr className={`${classes.hr} ${classes["responsive-width"]}`}></hr>
          <button
            onClick={switchLoginMode}
            type="button"
            className={` ${classes["switch-login-mode-btn"]} ${classes["responsive-width"]} btn btn-primary`}
          >
            {isLoginMode ? "Register" : "Login"}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
