import React from "react";

interface QuizHeaderProps {
  unitLabel: string;
  title: string;
  currentIndex: number;
  total: number;
  score: number;
  onExit: () => void;
  onRestart: () => void;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  unitLabel,
  title,
  currentIndex,
  total,
  score,
  onExit,
  onRestart,
}) => {
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <>
      <nav className="quiz-nav">
        <button className="back-btn" onClick={onExit}>
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Exit
        </button>
        <div className="quiz-title-area">
          <span className="quiz-unit-label">{unitLabel}</span>
          <h2 className="quiz-title-text">{title}</h2>
        </div>
        <button className="back-btn" onClick={onRestart}>
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
            <path d="M23 4v6h-6"></path>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
          Reset
        </button>
      </nav>

      <div className="score-bar">
        <div className="si sc">
          <span className="v">{currentIndex + 1}/{total}</span>
          <span className="l">Question</span>
        </div>
        <div className="sep"></div>
        <div className="si ok">
          <span className="v">{score}</span>
          <span className="l">Points</span>
        </div>
        <div className="sep"></div>
        <div className="pw">
          <div className="pt">
            <div className="pf" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="pl">Quiz Progress · {Math.round(progress)}%</div>
        </div>
      </div>
    </>
  );
};

export default QuizHeader;
