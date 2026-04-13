import React from "react";
import { Unit } from "../types";

interface LandingPageProps {
  units: Unit[];
  onSelectUnit: (unit: Unit) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ units, onSelectUnit }) => {
  return (
    <div className="landing">
      <header className="hero">
        <div className="hero-badge">
          <span className="dot"></span>
          <span>Self-Assessment Platform</span>
        </div>
        <h1>C++ Quizzer</h1>
        <p className="hero-sub">
          Master the filesystem, processes, and C++ fundamentals with
          interactive self-assessment modules. Made for the course "System and device programming"
        </p>
        <p style={{ fontSize: "0.8rem", color: "#666" }}>
          Notes/Questions from {" "}
          <a href="https://www.polito.it/personale?p=002893" target="_blank" style={{ color: "#666" }} rel="noopener noreferrer">Prof. Stefano Quer</a>
        </p>
      </header>

      <div className="units-label">Available Units</div>
      <section className="units-grid">
        {units.map((unit) => (
          <div
            key={unit.id}
            className="unit-card"
            onClick={() => onSelectUnit(unit)}
          >
            <div className="unit-card-icon">{unit.icon}</div>
            <div className="unit-tag">{unit.tag}</div>
            <h2>{unit.title}</h2>
            <p>{unit.desc}</p>
            <div className="unit-topics">
              {unit.topics.slice(0, 4).map((topic) => (
                <span key={topic} className="topic-pill">
                  {topic}
                </span>
              ))}
              {unit.topics.length > 4 && (
                <span className="topic-pill">+{unit.topics.length - 4}</span>
              )}
            </div>
            <div className="unit-card-footer">
              <span className="unit-q-count"><strong>{unit.questions.length}</strong> Questions</span>
              <span className="unit-arrow">→</span>
            </div>
          </div>
        ))}
      </section>

      <footer className="landing-footer">
        <p>Made by <a href="https://github.com/Edwinliby/" target="_blank" rel="noopener noreferrer">Edwin</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
