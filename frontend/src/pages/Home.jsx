// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen gap-6">
//       <h1 className="text-4xl font-bold">Welcome to Online Quiz App</h1>
//       <Link
//         to="/quiz"
//         className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//       >
//         Start Quiz
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaBolt, FaBookOpen } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-gradient-to-tr from-indigo-100 via-white to-pink-100 relative overflow-hidden">
      
      {/* Floating decorative circles */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-300/30 rounded-full top-10 left-10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-pink-300/30 rounded-full bottom-20 right-10 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-8 relative"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 text-center">
          Welcome to Online Quiz App
        </h1>
        
        <div className="relative">
          <Link
            to="/quiz"
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl active:scale-95 z-10 relative"
          >
            Start Quiz
          </Link>

          {/* Floating icons around the button */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
          >
            {[...Array(6)].map((_, i) => {
              const icons = [FaStar, FaBolt, FaBookOpen];
              const Icon = icons[i % icons.length];
              const angle = (360 / 6) * i;
              return (
                <motion.div
                  key={i}
                  className="absolute text-indigo-400 text-xl"
                  style={{
                    transform: `rotate(${angle}deg) translate(60px) rotate(-${angle}deg)`,
                  }}
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                >
                  <Icon />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

