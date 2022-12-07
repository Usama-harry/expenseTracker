import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h2 className={classes.logo}>Expense Tracker</h2>
      <i className={`fa-solid fa-plus ${classes["add-btn"]}`}></i>
    </div>
  );
};

export default Header;
