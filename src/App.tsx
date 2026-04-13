import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import QuizEngine from "./components/QuizEngine";
import { Unit } from "./types";
import { UNITS } from "./units";

const App = () => {
  const [currentUnit, setCurrentUnit] = useState<Unit | null>(null);

  // Handle back navigation / closing quiz
  const handleExitQuiz = () => {
    setCurrentUnit(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      {currentUnit ? (
        <QuizEngine unit={currentUnit} onExit={handleExitQuiz} />
      ) : (
        <LandingPage units={UNITS} onSelectUnit={setCurrentUnit} />
      )}
    </div>
  );
};

export default App;
