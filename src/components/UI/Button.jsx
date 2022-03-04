import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "../../styles/scss/components/UI/Button.scss";


function Button({ className, theme, disabled, type, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "Button",
        className,
        { [`Button_theme_${theme}`]: theme }
      )}
      type={type ? type : "button"}
      disabled={disabled}
    >
      {children}
    </button >
  )
}

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
};


export default Button;