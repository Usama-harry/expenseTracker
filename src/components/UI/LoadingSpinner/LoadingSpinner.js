import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  const allClasses = `${classes["loading-spinner"]} ${props.className}`;
  return <div style={{ ...props.style }} className={allClasses}></div>;
};

export default LoadingSpinner;
