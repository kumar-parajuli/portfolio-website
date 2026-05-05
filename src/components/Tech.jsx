import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const TechCard = ({ technology, index }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl p-[2px] transition-all duration-300 ${darkMode
          ? "bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600"
          : "bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500"
          }`}
      >
        <div
          className={`w-full h-full rounded-2xl flex items-center justify-center overflow-hidden ${darkMode
            ? "bg-[#151030] group-hover:bg-[#1a1443]"
            : "bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100"
            } transition-all duration-300`}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + index * 0.05 }}
        viewport={{ once: true }}
        className="mt-3"
      >
        <p
          className={`text-center text-sm sm:text-base font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"
            }`}
        >
          {technology.name}
        </p>
      </motion.div>

      <motion.div
        className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 ${darkMode
          ? "bg-gradient-to-r from-purple-600 to-pink-600"
          : "bg-gradient-to-r from-blue-500 to-cyan-500"
          }`}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
};

const Tech = () => {
  const { darkMode } = useTheme();

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(145, 94, 255, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div variants={textVariant()} className="mb-12 sm:mb-16">
        <p
          className={`${styles.sectionSubText} text-center ${darkMode ? "text-secondary" : "text-blue-600"
            }`}
        >
          My technical expertise
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          Technologies.
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className={`mt-4 text-center text-base sm:text-lg max-w-3xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"
            }`}
        >
          I work with a wide range of modern technologies and frameworks to build
          robust, scalable applications
        </motion.p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-20"
      >
        <div
          className={`relative rounded-3xl p-[2px] overflow-hidden ${darkMode
            ? "bg-gradient-to-r from-[#915EFF] via-purple-500 to-pink-500"
            : "bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400"
            }`}
        >
          <div
            className={`relative rounded-3xl px-8 py-10 sm:px-12 sm:py-14 ${darkMode ? "bg-[#151030]" : "bg-gradient-to-br from-blue-50 to-cyan-50"
              }`}
          >
            <div className="text-center">
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Always Learning
              </h3>
              <p
                className={`text-base sm:text-lg mb-6 max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                Technology evolves rapidly, and so do I. I'm constantly exploring new
                tools and frameworks to stay at the cutting edge of web development.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {["Problem Solving", "Quick Learner", "Team Player", "Creative Thinker"].map(
                  (skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${darkMode
                        ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
                        : "bg-blue-100 text-blue-700 border border-blue-300"
                        }`}
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Tech, "");