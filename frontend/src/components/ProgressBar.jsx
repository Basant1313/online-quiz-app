import { motion } from "framer-motion";

const ProgressBar = ({ currentIndex, total }) => {
  const progressPercentage = ((currentIndex + 1) / total) * 100;

  return (
    <div className="w-full flex justify-center mb-6">
  <div className="w-full max-w-5xl bg-gray-200 rounded-full h-4 overflow-hidden">
    <motion.div
      className="bg-indigo-500 h-4 rounded-full"
      animate={{ width: `${progressPercentage}%` }}
      transition={{ duration: 0.5 }}
    />
  </div>
</div>
  );
};

export default ProgressBar;
