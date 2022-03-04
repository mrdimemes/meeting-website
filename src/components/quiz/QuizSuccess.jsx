import React from "react";
import { ModalWindow, Button } from "../../components";
import "../../styles/scss/components/quiz/QuizSuccess.scss";


function QuizSuccess() {
  return (
    <ModalWindow className="quiz-success">
      <h1 className="modal-window__label quiz-success__label">
        Поздравляем!
      </h1>

      <div className="quiz-success__text">
        <h2 className="modal-window__sublabel quiz-success__sublabel">
          Вы имеете право на наш сайт!
        </h2>
        <p className="modal-window__massage quiz-success__massage">
          Мы тщательно подходим к подбору девушек и
          все они проверены нашим модератором
        </p>
        <p className="modal-window__massage quiz-success__massage">
          Наш сервис абсолютно бесплатен для вас,
          мы не берем данных ваших кредитных карт
          и не устраиваем простой флирт на камеру
        </p>
        <p className="modal-window__massage quiz-success__massage">
          Мы даем личные контакты девушек, которые активно ищут
          мужчину, чтобы вам было удобнее связаться друг другом,
          а ваша переписка была действительно тайна без третьих лиц
        </p>
        <p className="modal-window__massage quiz-success__warning">
          Мы против каких либо оскорблений, унижений и угроз
        </p>
      </div>

      <p className="modal-window__massage quiz-success__question">
        Вы согласны с этим?
      </p>

      <Button
        className="quiz-success__button"
        theme="main"
      >
        Я согласен
      </Button>
    </ModalWindow>
  )
}


export default QuizSuccess;