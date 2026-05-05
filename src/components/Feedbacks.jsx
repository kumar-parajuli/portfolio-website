import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useTheme } from "../context/ThemeContext";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  const { darkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full xs:w-[280px] sm:w-[320px] md:w-[360px]"
    >
      <div
        className={`relative rounded-3xl p-[2px] h-full ${darkMode
          ? "bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600"
          : "bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500"
          }`}
      >
        <div
          className={`relative rounded-3xl p-6 sm:p-8 h-full flex flex-col ${darkMode ? "bg-[#151030]" : "bg-gradient-to-br from-white to-blue-50"
            }`}
        >
          {/* Quote */}
          <motion.div
            animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}
            className={`text-6xl sm:text-7xl font-black leading-none ${darkMode
              ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
              : "text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text"
              }`}
          >
            "
          </motion.div>

          {/* Testimonial Text */}
          <div className="mt-3 flex-grow">
            <p
              className={`tracking-wide text-sm sm:text-base leading-relaxed italic ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
              {testimonial}
            </p>
          </div>

          {/* Footer */}
          <motion.div
            className={`mt-6 pt-4 border-t ${darkMode ? "border-purple-900/30" : "border-blue-200/50"
              }`}
          >
            <div className="flex justify-between items-center gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <motion.p
                  className={`font-bold text-base sm:text-lg truncate ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                  whileHover={{ x: 5 }}
                >
                  <span
                    className={`${darkMode
                      ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                      : "text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"
                      }`}
                  >
                    @
                  </span>{" "}
                  {name}
                </motion.p>
                <p className={`mt-1 text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {designation}
                </p>
                <p className={`text-xs font-medium ${darkMode ? "text-purple-400" : "text-blue-600"}`}>
                  {company}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] ${darkMode
                  ? "bg-gradient-to-br from-purple-500 to-pink-500"
                  : "bg-gradient-to-br from-blue-500 to-cyan-500"
                  }`}
              >
                <img
                  src={image}
                  alt={`feedback_by-${name}`}
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Hover Glow */}
          <motion.div
            className={`absolute -inset-1 rounded-3xl blur opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-75" : "opacity-0"
              } ${darkMode
                ? "bg-gradient-to-r from-purple-600 to-pink-600"
                : "bg-gradient-to-r from-blue-500 to-cyan-500"
              }`}
            style={{ zIndex: -1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const { darkMode } = useTheme();

  return (
    <div className="relative">
      {/* Background Blur */}
      <motion.div
        className="absolute -top-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(145, 94, 255, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Header */}
      <div
        className={`relative rounded-3xl p-[2px] ${darkMode
          ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600"
          : "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500"
          }`}
      >
        <div
          className={`rounded-3xl ${styles.padding} min-h-[250px] sm:min-h-[300px] flex flex-col justify-center ${darkMode ? "bg-[#151030]" : "bg-gradient-to-br from-blue-50 to-cyan-50"
            }`}
        >
          <motion.div variants={textVariant()}>
            <p
              className={`${styles.sectionSubText} text-center sm:text-left ${darkMode ? "text-secondary" : "text-blue-600"
                }`}
            >
              What others say
            </p>
            <h2
              className={`${styles.sectionHeadText} text-center sm:text-left ${darkMode ? "text-white" : "!text-gray-900"
                }`}
            >
              Testimonials.
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className={`mt-4 text-sm sm:text-base max-w-3xl text-center sm:text-left ${darkMode ? "text-gray-400" : "text-gray-600"
                }`}
            >
              Hear from people I've worked with and the impact of our collaborations
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16"
      >
        <div
          className={`relative rounded-3xl p-[2px] overflow-hidden ${darkMode
            ? "bg-gradient-to-r from-[#915EFF] via-purple-500 to-pink-500"
            : "bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400"
            }`}
        >
          <div
            className={`relative rounded-3xl px-6 py-8 sm:px-12 sm:py-12 ${darkMode ? "bg-[#151030]" : "bg-gradient-to-br from-blue-50 to-cyan-50"
              }`}
          >
            <div className="text-center">
              <h3
                className={`text-xl sm:text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Want to share your experience?
              </h3>
              <p
                className={`text-sm sm:text-base mb-6 max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                I'd love to hear about your experience working with me
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {["Professional", "Reliable", "Creative", "Efficient"].map((badge, idx) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${darkMode
                      ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
                      : "bg-blue-100 text-blue-700 border border-blue-300"
                      }`}
                  >
                    ✓ {badge}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-lg shadow-xl ${darkMode
                  ? "bg-gradient-to-r from-[#915EFF] to-purple-600"
                  : "bg-gradient-to-r from-blue-600 to-cyan-600"
                  }`}
              >
                Leave a Testimonial
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
