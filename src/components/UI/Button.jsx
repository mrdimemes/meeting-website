import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "../../styles/scss/components/UI/Button.scss";


function Button({ className, theme, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "Button",
        className,
        { [`Button_theme_${theme}`]: theme }
      )}
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