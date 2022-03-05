import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "../../styles/scss/components/UI/Button.scss";


function Button(
  { className, theme, disabled, type, onClick, link, href, children }
) {
  if (link) {
    return (
      <a
        onClick={onClick}
        className={classNames(
          "Button",
          className,
          { [`Button_theme_${theme}`]: theme }
        )}
        href={href}
      >
        {children}
      </a>
    )
  } else {
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
      </button>
    )
  }
}


Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  link: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
};


export default Button;