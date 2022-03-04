import React from "react";
import { ModalWindow, Button } from "../../components";
import "../../styles/scss/components/quiz/QuizFourthStep.scss";


function QuizFourthStep() {
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
          children="Да"
        />
        <Button
          className="quiz-fourth-step__button"
          theme="additional"
          children="Нет"
        />
      </div>
    </ModalWindow>
  )
}


export default QuizFourthStep;