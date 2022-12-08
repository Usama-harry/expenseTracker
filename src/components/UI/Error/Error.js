import classes from "./Error.module.css";

const Error = (props) => {
  const allClasses = `${classes.error} ${props.className}`;
  return (
    <p style={{ ...props.style }} className={allClasses}>
      {props.children}
    </p>
  );
};

export default Error;
