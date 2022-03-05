import React from "react";
import PropTypes from 'prop-types';
import { ModalWindow, Button } from "../../components";
import "../../styles/scss/components/quiz/QuizSecondStep.scss";


function QuizSecondStep({ yesHandler, noHandler }) {
  return (
    <ModalWindow className="quiz-second-step">
      <h1 className="modal-window__label quiz-second-step__label">Шаг 2</h1>
      <p className="modal-window__massage quiz-second-step__massage">
        Вы действительно готовы к реальным знакомствам?
      </p>
      <div className="quiz-second-step__buttons-wrapper">
        <Button
          className="quiz-second-step__button"
          theme="main"
          onClick={yesHandler}
          children="Да"
        />
        <Button
          className="quiz-second-step__button"
          theme="additional"
          onClick={noHandler}
          children="Нет"
        />
      </div>
    </ModalWindow>
  )
}


QuizSecondStep.propTypes = {
  yesHandler: PropTypes.func,
  noHandler: PropTypes.func
};


export default QuizSecondStep;