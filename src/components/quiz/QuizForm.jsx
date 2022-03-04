import React from "react";
import { ModalWindow, Form } from "../../components";


function QuizForm() {
  return (
    <ModalWindow className="quiz-form">
      <h1 className="modal-window__label quiz-form__label">
        Заполните форму:
      </h1>
      <Form targetArray={[
        { id: 1, value: "20-30" },
        { id: 2, value: "30-40" },
        { id: 3, value: "40-50" }
      ]} />
    </ModalWindow>
  )
}


export default QuizForm;