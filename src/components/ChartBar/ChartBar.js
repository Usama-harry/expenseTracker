import { useEffect, useState } from "react";

import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  const [fillHeightBar, setFillHeightBar] = useState("0%");

  useEffect(() => {
    setTimeout(() => {
      if (props.maxValue > 0) {
        setFillHeightBar(
          Math.floor((props.value / props.maxValue) * 100) + "%"
        );
      }
    }, 50);
  }, [props.maxValue, props.value]);

  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div
          style={{
            height: fillHeightBar,
          }}
          className={classes["chart-bar__fill"]}
        >
          {" "}
        </div>
      </div>

      <div className={classes["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
