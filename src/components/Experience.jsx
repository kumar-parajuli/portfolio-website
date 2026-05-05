import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ExperienceCard = ({ experience, index }) => {
  const { darkMode } = useTheme();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: darkMode
          ? "linear-gradient(135deg, #1d1836 0%, #1a1443 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
        color: darkMode ? "#fff" : "#1f2937",
        boxShadow: darkMode
          ? "0 10px 30px rgba(145, 94, 255, 0.2)"
          : "0 10px 30px rgba(59, 130, 246, 0.15)",
        border: darkMode ? "1px solid rgba(145, 94, 255, 0.2)" : "1px solid rgba(59, 130, 246, 0.2)",
        borderRadius: "20px",
      }}
      contentArrowStyle={{
        borderRight: darkMode
          ? "7px solid rgba(145, 94, 255, 0.3)"
          : "7px solid rgba(59, 130, 246, 0.3)",
      }}
      date={experience.date}
      dateClassName={darkMode ? "text-gray-400" : "text-gray-600"}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: darkMode
          ? "0 0 20px rgba(145, 94, 255, 0.4)"
          : "0 0 20px rgba(59, 130, 246, 0.4)",
      }}
      icon={
        <motion.div
          className="flex justify-center items-center w-full h-full"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <h3
            className={`text-2xl sm:text-3xl font-bold mb-2 ${darkMode
                ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                : "text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"
              }`}
          >
            {experience.title}
          </h3>
          <p
            className={`text-base sm:text-lg font-semibold flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-700"
              }`}
          >
            <span
              className={`inline-block w-2 h-2 rounded-full ${darkMode ? "bg-purple-500" : "bg-blue-500"
                }`}
            />
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 space-y-3">
          {experience.points.map((point, pointIndex) => (
            <motion.li
              key={`experience-point-${pointIndex}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: pointIndex * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className={`text-sm sm:text-base pl-5 relative leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
                }`}
            >
              <span
                className={`absolute left-0 top-2 w-2 h-2 rounded-full ${darkMode ? "bg-purple-400" : "bg-blue-400"
                  }`}
              />
              {point}
            </motion.li>
          ))}
        </ul>

        <motion.div
          className={`mt-6 pt-4 border-t ${darkMode ? "border-purple-900/30" : "border-blue-200/50"
            }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2">
            {experience.tags?.map((tag, tagIndex) => (
              <span
                key={`tag-${tagIndex}`}
                className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode
                    ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
                    : "bg-blue-100 text-blue-700 border border-blue-300"
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { darkMode } = useTheme();

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-40 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
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
          className={`${styles.sectionSubText} text-center ${darkMode ? "text-secondary" : "text-blue-600"
            }`}
        >
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          Work Experience.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 md:mt-20"
      >
        <VerticalTimeline
          lineColor={darkMode ? "rgba(145, 94, 255, 0.3)" : "rgba(59, 130, 246, 0.3)"}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
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
            className={`relative rounded-3xl px-6 py-8 sm:px-10 sm:py-12 ${darkMode ? "bg-[#151030]" : "bg-gradient-to-br from-blue-50 to-cyan-50"
              }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  Want to work together?
                </h3>
                <p
                  className={`text-sm sm:text-base md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  I'm always open to new opportunities and collaborations
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-white text-base sm:text-lg shadow-2xl whitespace-nowrap ${darkMode
                    ? "bg-gradient-to-r from-[#915EFF] to-purple-600"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600"
                  }`}
              >
                Let's Talk
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");