import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../../styles/scss/components/quiz/ModalWindow.scss";


function ModalWindow({ className, children }) {
  return (
    <div className={classNames("modal-window", className)}>
      <div className="modal-window__back" />
      <div className='modal-window__window'>{ children }</div>
    </div>
  )
}

ModalWindow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default ModalWindow;