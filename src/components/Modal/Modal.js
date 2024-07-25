import { Component } from "react";
import { createPortal } from "react-dom";

import "./Modal.scss";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount = () => {
    console.log("Modal componentDidMount");

    document.addEventListener("keydown", this.handleKeyDown);
  };

  componentWillUnmount = () => {
    console.log("Modal componentWillUnmount");

    document.removeEventListener("keydown", this.handleKeyDown);
  };

  handleKeyDown = ({ code }) => {
    if (code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
