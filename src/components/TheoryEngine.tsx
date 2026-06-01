import React, { useState } from "react";
import { Unit } from "../types";

interface TheoryEngineProps {
  unit: Unit;
  onExit: () => void;
}

const TheoryEngine: React.FC<TheoryEngineProps> = ({ unit, onExit }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const theoryData = unit.theoryData || [];

  return (
    <div className="quiz-view">
      <nav className="quiz-nav">
        <button className="back-btn" onClick={onExit}>
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Exit
        </button>
        <div className="quiz-title-area">
          <span className="quiz-unit-label">{unit.unitLabel || unit.tag}</span>
          <h2 className="quiz-title-text">{unit.quizTitle || unit.title}</h2>
        </div>
      </nav>

      <div className="theory-list">
        {theoryData.map((item, index) => (
          <div 
            key={index} 
            className={`theory-card ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="theory-q-header">
              <h3 className="theory-q-title">
                <span style={{ color: 'var(--text-3)', marginRight: '6px' }}>Q{index + 1}.</span>
                {item.question}
              </h3>
              <span 
                className="theory-q-icon" 
                style={{ transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▼
              </span>
            </div>
            
            {expandedIndex === index && (
              <div className="theory-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheoryEngine;
