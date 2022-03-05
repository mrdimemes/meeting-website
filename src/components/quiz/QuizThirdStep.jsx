import React from "react";
import PropTypes from 'prop-types';
import { ModalWindow, Button } from "../../components";
import "../../styles/scss/components/quiz/QuizThirdStep.scss";


function QuizThirdStep({ yesHandler, noHandler }) {
  return (
    <ModalWindow className="quiz-third-step">
      <h1 className="modal-window__label quiz-third-step__label">Шаг 3</h1>
      <p className="modal-window__massage quiz-third-step__massage">
        Вы не будете оскорблять или писать негативного девушкам,
        членам нашего клуба, вы согласны?
      </p>
      <div className="quiz-third-step__buttons-wrapper">
        <Button
          className="quiz-third-step__button"
          theme="main"
          onClick={yesHandler}
          children="Да"
        />
        <Button
          className="quiz-third-step__button"
          theme="additional"
          onClick={noHandler}
          children="Нет"
        />
      </div>
    </ModalWindow>
  )
}


QuizThirdStep.propTypes = {
  yesHandler: PropTypes.func,
  noHandler: PropTypes.func
};


export default QuizThirdStep;