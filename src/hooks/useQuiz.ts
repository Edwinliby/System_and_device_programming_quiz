import { useState, useEffect } from 'react';
import { Unit, Question } from '../types';

export const useQuiz = (unit: Unit) => {
  const STORAGE_KEY = `quiz_progress_${unit.id}`;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number[]>>({});
  const [isSubmitted, setIsSubmitted] = useState<Record<number, boolean>>({});
  const [isFinalResults, setIsFinalResults] = useState(false);

  // Load progress
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setCurrentIndex(data.currentIndex || 0);
        setUserAnswers(data.userAnswers || {});
        setIsSubmitted(data.isSubmitted || {});
        setIsFinalResults(data.isFinalResults || false);
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, [unit.id]);

  // Save progress
  useEffect(() => {
    const data = { currentIndex, userAnswers, isSubmitted, isFinalResults };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [currentIndex, userAnswers, isSubmitted, isFinalResults, unit.id]);

  // Persist final mark when quiz is completed
  useEffect(() => {
    if (isFinalResults) {
      const { earned, total } = calculateScore();
      const existingMarks = JSON.parse(localStorage.getItem("quiz-marks") || "{}");
      existingMarks[unit.id] = { score: earned, total: total, date: new Date().toISOString() };
      localStorage.setItem("quiz-marks", JSON.stringify(existingMarks));
    }
  }, [isFinalResults, unit.id]);

  const toggleOption = (questionIndex: number, optionIndex: number) => {
    if (isSubmitted[questionIndex]) return;

    setUserAnswers(prev => {
      const current = prev[questionIndex] || [];
      if (current.includes(optionIndex)) {
        return { ...prev, [questionIndex]: current.filter(i => i !== optionIndex) };
      } else {
        return { ...prev, [questionIndex]: [...current, optionIndex] };
      }
    });
  };

  const submitQuestion = (questionIndex: number) => {
    setIsSubmitted(prev => ({ ...prev, [questionIndex]: true }));
  };

  const nextQuestion = () => {
    if (currentIndex < unit.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinalResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restartQuiz = () => {
    if (window.confirm("Are you sure you want to restart? All progress for this unit will be lost.")) {
      setCurrentIndex(0);
      setUserAnswers({});
      setIsSubmitted({});
      setIsFinalResults(false);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const calculateScore = () => {
    let earnedPoints = 0;
    let totalPossible = 0;

    unit.questions.forEach((q, idx) => {
      const qPoints = q.points || 1;
      totalPossible += qPoints;

      // If not submitted, treat as 0 points (skipped)
      if (!isSubmitted[idx]) return;

      const answers = userAnswers[idx] || [];
      const correctIndices = q.opts.map((o, i) => o.c ? i : -1).filter(i => i !== -1);
      const wrongIndices = q.opts.map((o, i) => !o.c ? i : -1).filter(i => i !== -1);

      const numCorrect = correctIndices.length;
      const numWrong = wrongIndices.length;

      let qScore = 0;
      answers.forEach(selectedIdx => {
        if (q.opts[selectedIdx].c) {
          if (numCorrect > 0) qScore += (qPoints / numCorrect);
        } else {
          // Penalty: - (Points / total_wrong_options)
          if (numWrong > 0) qScore -= (qPoints / numWrong);
        }
      });

      earnedPoints += qScore;
    });

    return { earned: earnedPoints, total: totalPossible };
  };

  const { earned, total } = calculateScore();

  return {
    currentIndex,
    setCurrentIndex,
    userAnswers,
    isSubmitted,
    isFinalResults,
    toggleOption,
    submitQuestion,
    nextQuestion,
    prevQuestion,
    restartQuiz,
    score: earned,
    totalPoints: total,
    totalQuestions: unit.questions.length
  };
};
