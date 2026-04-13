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
    let totalScore = 0;
    unit.questions.forEach((q, idx) => {
      // Only count score if the question has been submitted
      if (!isSubmitted[idx]) return;

      const answers = userAnswers[idx] || [];
      const correctIndices = q.opts.map((o, i) => o.c ? i : -1).filter(i => i !== -1);
      
      const isCorrect = answers.length === correctIndices.length && 
                       answers.every(i => correctIndices.includes(i));
      
      if (isCorrect) totalScore++;
    });
    return totalScore;
  };

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
    score: calculateScore(),
    total: unit.questions.length
  };
};
