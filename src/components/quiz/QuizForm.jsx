import React from "react";
import { ModalWindow, Form } from "../../components";


function QuizForm() {
  return (
    <ModalWindow className="quiz-form">
      <h1 className="modal-window__label quiz-form__label">
        Заполните форму:
      </h1>
      <Form />
    </ModalWindow>
  )
}


export default QuizForm;