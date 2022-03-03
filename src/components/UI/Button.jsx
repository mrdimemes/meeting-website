import React from "react";
import "../../styles/scss/components/UI/Button.scss";


function Button({ children }) {
  return (
    <button className="Button">{ children }</button>
  )
}


export default Button;