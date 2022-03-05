import React from "react";
import PropTypes from 'prop-types';
import { ModalWindow, Button } from "../../components";
import "../../styles/scss/components/quiz/QuizWelcome.scss";


function QuizWelcome({ nextHandler }) {
  return (
    <ModalWindow className="quiz-welcome">
      <h1 className="modal-window__label quiz-welcome__label">Внимание!</h1>
      <div className="quiz-welcome__text">
        <p className="modal-window__massage quiz-welcome__massage">
          Наши девушки прошли проверку модератором и мы действительно хотим,
          чтобы люди находили друг друга и встречались в реальной жизни,
          а не бесконечно лайкали друг друга онлайн.
        </p>
        <p className="quiz-welcome__question">
          Вы готовы к этому?
        </p>
      </div>
      <div className="quiz-welcome__button-wrapper">
        <Button
          className="quiz-welcome__button"
          theme="main"
          onClick={nextHandler}
          children="Продолжить"
        />
        <p className="quiz-welcome__warning">
          Мы не берем данных ваших кредитных карт
        </p>
      </div>

    </ModalWindow>
  )
}


QuizWelcome.propTypes = {
  nextHandler: PropTypes.func
};


export default QuizWelcome;