import React from "react";
import PropTypes from 'prop-types';
import { ModalWindow, Form } from "../../components";


function QuizForm({ submitHandler }) {
  return (
    <ModalWindow className="quiz-form">
      <h1 className="modal-window__label quiz-form__label">
        Заполните форму:
      </h1>
      <Form
        targetArray={[
          { id: 1, value: "20-30" },
          { id: 2, value: "30-40" },
          { id: 3, value: "40-50" }
        ]}
        submitHandler={submitHandler}
      />
    </ModalWindow>
  )
}


QuizForm.propTypes = {
  submitHandler: PropTypes.func
};


export default QuizForm;