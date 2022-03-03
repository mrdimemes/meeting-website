import React from 'react';
import "../../styles/scss/components/quiz/ModalWindow.scss";


function ModalWindow({ children }) {
  return (
    <div className="modal-window">
      <div className="modal-window__back" />
      <div className='modal-window__window'>{ children }</div>
    </div>
  )
}


export default ModalWindow;