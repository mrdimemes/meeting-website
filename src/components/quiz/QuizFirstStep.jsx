import React from "react";
import PropTypes from 'prop-types';
import { ModalWindow, Button } from "../../components";


function QuizFirstStep({ nextHandler }) {
  return (
    <ModalWindow className="quiz-first-step">
      <h1 className="modal-window__label quiz-first-step__label">Шаг 1</h1>
      <p className="modal-window__massage quiz-first-step__massage">
        Мы должны быть уверены, что вы ищите серьезные отношения.
      </p>
      <Button
        className="quiz-first-step__button"
        theme="main"
        onClick={nextHandler}
        children="Продолжить"
      />
    </ModalWindow>
  )
}


QuizFirstStep.propTypes = {
  nextHandler: PropTypes.func
};


export default QuizFirstStep;