import React from "react";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const localStorage = window.localStorage;
  const [isQuizFinished, setIsQuizFinished] = React.useState(
    localStorage.getItem("isQuizFinished") ? localStorage.getItem("isQuizFinished") : false
  );
  const finishQuiz = () => {
    setIsQuizFinished(true);
    localStorage.setItem("isQuizFinished", true)
  }

  const renderPage = () => {
    switch (isQuizFinished) {
      case true:
        return <div>123</div>
      case false:
        return <WelcomePage finishQuiz={finishQuiz} />
      default:
        break;
    }
  }
  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
