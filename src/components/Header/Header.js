import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import Modal from "../UI/Modal/Modal";
import Form from "../Form/Form";

import classes from "./Header.module.css";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const hideModalHandler = useCallback(() => setShowModal(false), []);
  const showModalHandler = () => setShowModal(true);

  return (
    <header className={classes.header}>
      {showModal && (
        <Modal onClose={hideModalHandler}>
          <Form onClose={hideModalHandler}></Form>
        </Modal>
      )}
      <h3 className={classes.logo}>Expense Tracker</h3>
      {isLoggedIn && (
        <i
          onClick={showModalHandler}
          className={`fa-solid fa-plus ${classes["add-btn"]}`}
        ></i>
      )}
    </header>
  );
};

export default Header;
