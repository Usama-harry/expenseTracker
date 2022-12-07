import Header from "./components/Header/Header";

import classes from "./App.module.css";

function App() {
  return (
    <div className={`${classes.app} container-fluid`}>
      <div className="row">
        <header>
          <Header></Header>
        </header>
      </div>
    </div>
  );
}

export default App;
