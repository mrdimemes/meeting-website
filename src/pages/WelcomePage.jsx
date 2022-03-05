import React from 'react';
import {
  QuizWelcome,
  QuizFirstStep,
  QuizSecondStep,
  QuizThirdStep,
  QuizFourthStep,
  QuizSuccess,
  QuizForm
} from "../components";
import "../styles/scss/pages/WelcomePage.scss";


function WelcomePage({ finishQuiz }) {
  const localStorage = window.localStorage;
  const [step, setStep] = React.useState(
    localStorage.getItem('step') ? localStorage.getItem('step') : 0
  );

  const nextStep = () => {
    localStorage.setItem("step", step < 7 ? step + 1 : undefined);
    setStep(step < 7 ? step + 1 : step);
  }


  const noHandler = () => {
    alert("Очень жаль. В таком случае нам не по пути.");
  }

  const renderQuiz = () => {
    switch (step) {
      case 0:
        return <QuizWelcome nextHandler={nextStep} />;
      case 1:
        return <QuizFirstStep nextHandler={nextStep} />;
      case 2:
        return <QuizSecondStep
          yesHandler={nextStep}
          noHandler={noHandler}
        />;
      case 3:
        return <QuizThirdStep
          yesHandler={nextStep}
          noHandler={noHandler}
        />;
      case 4:
        return <QuizFourthStep
          yesHandler={nextStep}
          noHandler={noHandler}
        />;
      case 5:
        return <QuizSuccess nextHandler={nextStep} />;
      case 6:
        return <QuizForm submitHandler={finishQuiz} />;
      default:
        break;
    }
  }

  return (
    <div className="welcome-page page">
      <div className="welcome-page__background-wrapper">
        <div className="welcome-page__card welcome-page__card-1"></div>
        <div className="welcome-page__card welcome-page__card-2"></div>
        <div className="welcome-page__card welcome-page__card-3"></div>
        <div className="welcome-page__card welcome-page__card-4"></div>
        <div className="welcome-page__card welcome-page__card-5"></div>
        <div className="welcome-page__card welcome-page__card-6"></div>
      </div>
      {renderQuiz()}
    </div>
  )
}


export default WelcomePage;