

import React, { useEffect, useState } from "react";
import { fetchQuestions, submitAnswers } from "../services/api";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ProgressBar, TimerCircle, QuestionCard, ResultView } from "../components";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(30);

  // Fetch all questions
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const { data } = await fetchQuestions();
        setQuestions(data);
      } catch {
        setError("Failed to fetch questions.");
      } finally {
        setLoading(false);
      }
    };
    loadQuestions();
  }, []);

  // Timer logic (auto next on timeout)
  useEffect(() => {
    if (result || loading) return;

    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          const currentQ = questions[currentIndex];
          // Auto-mark unanswered as -1
          if (answers[currentQ?.id] === undefined) {
            setAnswers((prevAns) => ({
              ...prevAns,
              [currentQ.id]: -1,
            }));
          }
          handleNext();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, result, loading]);

  const handleSelect = (optionIndex) => {
    setAnswers({ ...answers, [questions[currentIndex].id]: optionIndex });
  };

  const handleNext = () => {
    const currentQ = questions[currentIndex];

    // If user hasn't selected anything, mark as unanswered
    if (answers[currentQ.id] === undefined) {
      setAnswers((prev) => ({ ...prev, [currentQ.id]: -1 }));
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    try {
      // Ensure every question has an answer (fill unanswered as -1)
      const answerArray = questions.map((q) => ({
        questionId: q.id,
        selectedOption:
          answers[q.id] !== undefined ? answers[q.id] : -1,
      }));

      const { data } = await submitAnswers({ answers: answerArray });
      setResult(data);

      if (data.score > 0) {
        confetti({ particleCount: 250, spread: 100, origin: { y: 0.6 } });
      }
    } catch {
      setError("Failed to submit answers. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center text-gray-500 text-xl">
        Loading questions...
      </div>
    );

  if (error)
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-600 text-xl">
        {error}
      </div>
    );

  if (result?.details?.length > 0) {
    return <ResultView result={result} questions={questions} />;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-pink-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-6xl space-y-6">

        {/* Progress bar */}
        <ProgressBar currentIndex={currentIndex} total={questions.length} />

        {/* Timer */}
        <div className="flex justify-end mb-6">
          <TimerCircle timeLeft={timer} totalTime={30} />
        </div>

        {/* Question Card with animated entrance */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <QuestionCard
              question={currentQuestion}
              index={currentIndex}
              total={questions.length}
              selected={answers[currentQuestion.id]}
              onSelect={handleSelect}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-6 py-3 rounded-2xl bg-gray-300 hover:bg-gray-400 disabled:opacity-50 font-semibold shadow-md"
          >
            Previous
          </motion.button>

          {currentIndex < questions.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold shadow-md hover:shadow-xl"
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              disabled={submitting}
              className="px-6 py-3 rounded-2xl bg-green-500 text-white font-semibold shadow-md hover:shadow-xl disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit"}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;




