import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaCircle, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ResultView = ({ result, questions }) => {
  const navigate = useNavigate();

  const correctCount = result.details.filter((d) => d.isCorrect).length;
  const wrongCount = result.details.filter((d) => d.userAnswer !== -1 && !d.isCorrect).length;
  const notAttemptedCount = result.details.filter((d) => d.userAnswer === -1).length;

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-50 to-pink-50 flex flex-col items-center py-12 px-4 md:px-8 space-y-8 relative">

      {/* Score Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-md text-center"
      >
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-2">
          {result.score}/{result.total}
        </h2>
        <p className="text-lg text-gray-600">Your Quiz Score</p>
      </motion.div>

      {/* Summary with modern icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-4 px-6 text-gray-700 font-medium flex items-center justify-center gap-6 text-lg"
      >
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-green-600" /> 
          <span className="font-semibold">{correctCount} Correct</span>
        </div>
        <div className="flex items-center gap-2">
          <FaTimesCircle className="text-red-600" /> 
          <span className="font-semibold">{wrongCount} Wrong</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCircle className="text-gray-400" /> 
          <span className="font-semibold">{notAttemptedCount} Not Attempted</span>
        </div>
      </motion.div>

      {/* Detailed Results */}
      <div className="w-full max-w-5xl space-y-6">
        {result.details.map((q, i) => {
          const questionData = questions.find((ques) => ques.id === q.id);
          const isUnattempted = q.userAnswer === -1;

          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white rounded-3xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {i + 1}. {q.question}
              </p>

              {isUnattempted && (
                <p className="mb-4 text-gray-600 italic flex items-center gap-2">
                  <FaCircle className="text-gray-400" /> Not Attempted
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questionData?.options.map((opt, idx) => {
                  const isUserChoice = idx === q.userAnswer;
                  const isCorrectAnswer = idx === q.correctAnswer;

                  let baseClass =
                    "p-4 rounded-xl flex justify-between items-center font-medium transition-colors duration-300";
                  let bgClass = "bg-gray-100 text-gray-800";

                  if (isCorrectAnswer) {
                    bgClass = "bg-green-100 text-green-800";
                  }

                  if (isUserChoice && !q.isCorrect && !isUnattempted) {
                    bgClass = "bg-red-100 text-red-700";
                  }

                  return (
                    <motion.div
                      key={idx}
                      className={`${baseClass} ${bgClass}`}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                      layout
                    >
                      <span>{opt}</span>
                      <span className="text-lg">
                        {isUserChoice && q.isCorrect && (
                          <FaCheckCircle className="text-green-600" />
                        )}
                        {isUserChoice && !q.isCorrect && !isUnattempted && (
                          <FaTimesCircle className="text-red-600" />
                        )}
                        {!isUserChoice && isCorrectAnswer && (
                          <FaCheckCircle className="text-green-600" />
                        )}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fixed Home Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="fixed bottom-6 right-6 flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-3xl shadow-lg hover:bg-indigo-600 hover:shadow-xl font-semibold z-50"
      >
        <FaHome /> Home
      </motion.button>
    </div>
  );
};

export default ResultView;
