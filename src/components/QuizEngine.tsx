import React from "react";
import { Unit } from "../types";
import { useQuiz } from "../hooks/useQuiz";
import QuizHeader from "./QuizHeader";
import QuestionCard from "./QuestionCard";
import ResultSummary from "./ResultSummary";

interface QuizEngineProps {
  unit: Unit;
  onExit: () => void;
}

const QuizEngine: React.FC<QuizEngineProps> = ({ unit, onExit }) => {
  const {
    currentIndex,
    userAnswers,
    isSubmitted,
    isFinalResults,
    toggleOption,
    submitQuestion,
    nextQuestion,
    prevQuestion,
    restartQuiz,
    score,
    total,
  } = useQuiz(unit);

  if (isFinalResults) {
    return (
      <div className="quiz-view">
        <ResultSummary
          score={score}
          total={total}
          onRestart={restartQuiz}
          onExit={onExit}
        />
      </div>
    );
  }

  const currentQuestion = unit.questions[currentIndex];

  return (
    <div className="quiz-view">
      <QuizHeader
        unitLabel={unit.unitLabel || unit.tag}
        title={unit.quizTitle || unit.title}
        currentIndex={currentIndex}
        total={total}
        score={score}
        onExit={onExit}
        onRestart={restartQuiz}
      />

      <main className="questions">
        <QuestionCard
          question={currentQuestion}
          selectedOptions={userAnswers[currentIndex] || []}
          isSubmitted={isSubmitted[currentIndex] || false}
          onToggleOption={(idx) => toggleOption(currentIndex, idx)}
          onSubmit={() => submitQuestion(currentIndex)}
        />
      </main>

      <footer className="cf" style={{ marginTop: '24px', width: '100%', maxWidth: '900px' }}>
        <button
          className="back-btn"
          onClick={prevQuestion}
          disabled={currentIndex === 0}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Previous
        </button>

        <button
          className="sbtn"
          onClick={nextQuestion}
          disabled={!isSubmitted[currentIndex]}
          style={{ background: 'var(--text)', color: 'var(--bg)' }}
        >
          {currentIndex === total - 1 ? "Finish Quiz" : "Next Question"}
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default QuizEngine;
