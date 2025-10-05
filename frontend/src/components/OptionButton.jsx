
import { motion } from "framer-motion";

const OptionButton = ({ option, selected, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full px-6 py-4 rounded-2xl text-left font-medium border-2 transition-all duration-300
        ${selected
          ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-xl ring-2 ring-indigo-300"
          : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-md"
        }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      animate={{ scale: selected ? [1, 1.03, 1] : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {option}
    </motion.button>
  );
};

export default OptionButton;

