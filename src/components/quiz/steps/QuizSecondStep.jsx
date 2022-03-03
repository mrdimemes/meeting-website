import React from "react";
import ModalWindow from "../ModalWindow";
import Button from "../../UI/Button";


function QuizSecondStep() {
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
          children="Да"
        />
        <Button
          className="quiz-second-step__button"
          theme="additional"
          children="Нет"
        />
      </div>
    </ModalWindow>
  )
}


export default QuizSecondStep;