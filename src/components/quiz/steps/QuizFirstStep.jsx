import React from "react";
import ModalWindow from "../ModalWindow";
import Button from "../../UI/Button";


function QuizFirstStep() {
  return (
    <ModalWindow>
      <h1>Шаг 1</h1>
      <p>Мы должны быть уверены, что вы ищите серьезные отношения.</p>
      <Button>Продолжить</Button>
    </ModalWindow>
  )
}


export default QuizFirstStep;