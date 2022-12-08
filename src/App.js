import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import classes from "./App.module.css";

function App() {
  return (
    <div className={`${classes.app} container-fluid`}>
      <div className={`row ${classes["responsive-row"]}`}>
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
