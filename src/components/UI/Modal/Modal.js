import { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.overlay}>
      <Card
        style={{
          backgroundColor: "var(--secondary-color)",
        }}
        className={classes.modal}
      >
        {props.children}
      </Card>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose}></Backdrop>,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;
