import React from "react";
import { WelcomePage, GalleryPage } from "./pages";


function App() {
  const localStorage = window.localStorage;
  const [isQuizFinished, setIsQuizFinished] = React.useState(
    localStorage.getItem("isQuizFinished") ? localStorage.getItem("isQuizFinished") : false
  );


  const finishQuiz = () => {
    setIsQuizFinished(true);
    localStorage.setItem("isQuizFinished", true)
    localStorage.setItem("step", 0)
  }

  console.log(isQuizFinished);
  const renderPage = () => {
    if (isQuizFinished) {
      return <GalleryPage />;
    } else {
      return <WelcomePage finishQuiz={finishQuiz} />;
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}


export default App;