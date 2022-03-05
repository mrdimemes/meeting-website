import React from 'react';
import { QuizWelcome } from "../components";
import "../styles/scss/pages/WelcomePage.scss";


function WelcomePage() {
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
      <QuizWelcome />
    </div>
  )
}


export default WelcomePage;