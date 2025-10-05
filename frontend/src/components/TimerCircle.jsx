
import React from "react";
import { motion } from "framer-motion";

const TimerCircle = ({ timeLeft, totalTime }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / totalTime) * circumference;

  const isCritical = timeLeft <= 5;
  const color = isCritical ? "#ef4444" : "#6366f1"; // red if critical else green

  return (
    <div className="relative flex justify-center items-center w-[120px] h-[120px]">
      <svg width="120" height="120" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="none"
        />

        {/* Progress circle */}
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1, ease: "linear" }}
        />
      </svg>

      {/* Center countdown */}
      <span
        className={`absolute text-2xl font-semibold ${
          isCritical
            ? "text-red-500 animate-pulse"
            : "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600"
        }`}
      >
        {timeLeft}s
      </span>
    </div>
  );
};

export default TimerCircle;


