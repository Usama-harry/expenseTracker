import { useSelector } from "react-redux";

import Auth from "../../pages/Auth/Auth";
import Home from "../../pages/Home/Home";

import classes from "./Main.module.css";

const Main = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <main className={classes.main}>
      {isLoggedIn ? <Home></Home> : <Auth></Auth>}
    </main>
  );
};

export default Main;
