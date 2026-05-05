import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ServiceCard = ({ index, title, icon }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10, scale: 1.02 }}
      className="w-full xs:w-[280px] sm:w-[300px] md:w-[320px]"
    >
      <div
        className={`relative group w-full h-full rounded-2xl p-[2px] transition-all duration-300 ${darkMode
            ? "bg-gradient-to-br from-[#915EFF] via-purple-500 to-pink-500"
            : "bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-300"
          }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`relative w-full h-full rounded-2xl py-8 px-6 min-h-[320px] flex flex-col justify-center items-center gap-6 overflow-hidden ${darkMode
              ? "bg-[#151030] hover:bg-[#1a1443]"
              : "bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100"
            } transition-colors duration-300`}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: darkMode
                ? "radial-gradient(circle at center, rgba(145, 94, 255, 0.1) 0%, transparent 70%)"
                : "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            }}
          />

          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className={`relative w-20 h-20 rounded-full flex items-center justify-center ${darkMode
                ? "bg-gradient-to-br from-purple-900/50 to-pink-900/50"
                : "bg-gradient-to-br from-blue-200 to-cyan-200"
              } p-4 shadow-lg`}
          >
            <img
              src={icon}
              alt={title}
              className="w-full h-full object-contain"
            />
          </motion.div>

          <h3
            className={`text-xl sm:text-2xl font-bold text-center leading-tight ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            {title}
          </h3>

          <motion.div
            className={`w-16 h-1 rounded-full ${darkMode
                ? "bg-gradient-to-r from-[#915EFF] to-pink-500"
                : "bg-gradient-to-r from-blue-500 to-cyan-500"
              }`}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(145, 94, 255, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} ${darkMode ? "text-secondary" : "text-blue-600"
            }`}
        >
          Introduction
        </p>
        <h2
          className={`${styles.sectionHeadText} ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 sm:mt-8"
      >
        <p
          className={`text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed sm:leading-loose ${darkMode ? "text-secondary" : "text-gray-700"
            }`}
        >
          I'm a skilled{" "}
          <span
            className={`font-bold ${darkMode
                ? "text-transparent bg-gradient-to-r from-[#915EFF] to-pink-500 bg-clip-text"
                : "text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"
              }`}
          >
            Full Stack software developer
          </span>{" "}
          with experience in TypeScript and JavaScript, and expertise in
          frameworks like React, Node.js, MongoDB and Express.js. I'm a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let's work together to bring your ideas to life!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {["TypeScript", "JavaScript", "React", "Node.js", "MongoDB", "Express.js"].map(
            (skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${darkMode
                    ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
                    : "bg-blue-100 text-blue-700 border border-blue-300"
                  }`}
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      <div className="mt-16 sm:mt-20 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  Ready to start a project?
                </h3>
                <p
                  className={`text-base sm:text-lg ${darkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                >
                  Let's create something amazing together
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold text-white text-lg shadow-2xl whitespace-nowrap ${darkMode
                    ? "bg-gradient-to-r from-[#915EFF] to-purple-600"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600"
                  }`}
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");