import React from "react";
import PropTypes from 'prop-types';
import { ModalWindow, Button } from "../../components";
import "../../styles/scss/components/quiz/QuizFourthStep.scss";


function QuizFourthStep({ yesHandler, noHandler }) {
  return (
    <ModalWindow className="quiz-fourth-step">
      <h1 className="modal-window__label quiz-fourth-step__label">Шаг 4</h1>
      <p className="modal-window__massage quiz-fourth-step__massage">
        Вы несете ответсвенность за информацию,
        которую размещаете на нашем сайте?
      </p>
      <div className="quiz-fourth-step__buttons-wrapper">
        <Button
          className="quiz-fourth-step__button"
          theme="main"
          onClick={yesHandler}
          children="Да"
        />
        <Button
          className="quiz-fourth-step__button"
          theme="additional"
          onClick={noHandler}
          children="Нет"
        />
      </div>
    </ModalWindow>
  )
}


QuizFourthStep.propTypes = {
  yesHandler: PropTypes.func,
  noHandler: PropTypes.func
};


export default QuizFourthStep;