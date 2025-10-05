
import { motion } from "framer-motion";
import OptionButton from "./OptionButton";

const QuestionCard = ({ question, index, total, selected, onSelect }) => {
  return (
    <motion.div
      key={index} // ensures motion works when switching questions
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 space-y-6 border border-gray-200"
    >
      {/* Question header */}
      <h2 className="text-3xl font-extrabold text-gray-800">
        Question {index + 1} of {total}
      </h2>

      {/* Question text */}
      <p className="text-xl text-gray-700">{question.text}</p>

      {/* Options grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {question.options?.map((opt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <OptionButton
              option={opt}
              selected={selected === idx}
              onClick={() => onSelect(idx)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;

