import React from "react";

interface ResultSummaryProps {
  score: number;
  total: number;
  onRestart: () => void;
  onExit: () => void;
}

const ResultSummary: React.FC<ResultSummaryProps> = ({
  score,
  total,
  onRestart,
  onExit,
}) => {
  const percentage = Math.round((score / total) * 100);
  
  let emoji = "🤔";
  let feedback = "Good effort! Keep practicing.";
  let badgeClass = "needs-work";

  if (percentage === 100) {
    feedback = "Outstanding! Perfect score.";
    emoji = "🏆";
    badgeClass = "excellent";
  } else if (percentage >= 80) {
    feedback = "Excellent work!";
    emoji = "🔥";
    badgeClass = "excellent";
  } else if (percentage >= 50) {
    feedback = "Good result! Just a bit more study.";
    emoji = "👍";
    badgeClass = "good";
  }

  return (
    <div className="results-panel show">
      <div className="results-emoji">{emoji}</div>
      <div className={`perf-badge ${badgeClass}`}>{percentage >= 80 ? "Mastery" : percentage >= 50 ? "Proficient" : "Learning"}</div>
      <h2>Quiz Completed</h2>
      <p>{feedback}</p>

      <div className="final-score">{score}/{total}</div>
      <div className="final-pct">{percentage}% Correct Answer Rate</div>

      <div className="results-breakdown">
        <div className="bk">
          <span className="bv">{score}</span>
          <span className="bl">Correct</span>
        </div>
        <div className="bk">
          <span className="bv">{total - score}</span>
          <span className="bl">Mistakes</span>
        </div>
      </div>

      <div className="results-actions">
        <button className="rbtn" onClick={onRestart}>
          Restart Quiz
        </button>
        <button className="rbtn secondary" onClick={onExit}>
          Back to Units
        </button>
      </div>
    </div>
  );
};

export default ResultSummary;
