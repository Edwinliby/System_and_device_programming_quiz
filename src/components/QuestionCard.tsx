import React from "react";
import { Question } from "../types";

interface QuestionCardProps {
  question: Question;
  selectedOptions: number[];
  isSubmitted: boolean;
  onToggleOption: (index: number) => void;
  onSubmit: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptions,
  isSubmitted,
  onToggleOption,
  onSubmit,
}) => {
  return (
    <div className={`card ${isSubmitted ? "answered" : ""}`}>
      <div className="ch">
         <span className="qn">Q</span>
         <h2 className="qt">{question.text}</h2>
      </div>

      <div className="qh">Topic: {question.topic}</div>

      {question.code && (
        <pre className="code-block">
          <code>{question.code}</code>
        </pre>
      )}

      <div className="opts">
        {question.opts.map((opt, idx) => {
          let statusClass = "";
          if (isSubmitted) {
            if (opt.c && selectedOptions.includes(idx)) statusClass = "rv-c"; // Selected Correct
            else if (opt.c && !selectedOptions.includes(idx)) statusClass = "rv-m"; // Missed Correct
            else if (!opt.c && selectedOptions.includes(idx)) statusClass = "rv-w"; // Selected Wrong
          } else if (selectedOptions.includes(idx)) {
            statusClass = "selected";
          }

          return (
            <div
              key={idx}
              className={`opt ${statusClass}`}
              onClick={() => onToggleOption(idx)}
            >
              <div className="cb">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="white" strokeWidth="3" fill="none">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="otext">{opt.s}</div>
            </div>
          );
        })}
      </div>

      <div className="cf">
        {!isSubmitted ? (
          <button
            className="sbtn"
            onClick={onSubmit}
            disabled={selectedOptions.length === 0}
          >
            Submit Answer
          </button>
        ) : (() => {
          const qPoints = question.points || 1;
          const correctIndices = question.opts.map((o, i) => o.c ? i : -1).filter(i => i !== -1);
          const wrongIndices = question.opts.map((o, i) => !o.c ? i : -1).filter(i => i !== -1);
          
          let earned = 0;
          selectedOptions.forEach(idx => {
            if (question.opts[idx].c) {
              if (correctIndices.length > 0) earned += qPoints / correctIndices.length;
            } else {
              if (wrongIndices.length > 0) earned -= qPoints / wrongIndices.length;
            }
          });

          const isPerfect = question.opts.every((o, i) => o.c === selectedOptions.includes(i));
          const isNegative = earned < 0;
          const isZero = earned === 0;

          return (
            <div className="earned-pts">
              <span className={`rt ${isPerfect ? "full" : isNegative ? "zero" : isZero ? "zero" : "partial"}`}>
                {isPerfect ? "Correct" : isNegative ? "Penalty" : isZero ? "Incorrect" : "Partial"}
              </span>
              <span className="pts-val">
                {earned.toFixed(1)} / {qPoints.toFixed(1)} pts
              </span>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default QuestionCard;
