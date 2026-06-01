import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import QuizEngine from "./components/QuizEngine";
import TheoryEngine from "./components/TheoryEngine";
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
        currentUnit.isTheory ? (
          <TheoryEngine unit={currentUnit} onExit={handleExitQuiz} />
        ) : (
          <QuizEngine unit={currentUnit} onExit={handleExitQuiz} />
        )
      ) : (
        <LandingPage units={UNITS} onSelectUnit={setCurrentUnit} />
      )}
    </div>
  );
};

export default App;
