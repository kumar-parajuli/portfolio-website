import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { darkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full sm:w-[360px] md:w-[380px]"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`relative rounded-2xl p-[2px] h-full ${darkMode
            ? "bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600"
            : "bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500"
          }`}
      >
        <div
          className={`rounded-2xl p-5 h-full flex flex-col ${darkMode
              ? "bg-[#151030]"
              : "bg-gradient-to-br from-white to-blue-50"
            }`}
        >
          <div className="relative w-full h-[230px] rounded-2xl overflow-hidden group">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            />

            <div className="absolute inset-0 flex justify-end items-start m-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className={`w-12 h-12 rounded-full flex justify-center items-center cursor-pointer backdrop-blur-md shadow-lg ${darkMode
                    ? "bg-purple-900/80 hover:bg-purple-800"
                    : "bg-white/90 hover:bg-white"
                  }`}
              >
                <img
                  src={github}
                  alt="source code"
                  className={`w-6 h-6 object-contain ${darkMode ? "invert-0" : "invert"
                    }`}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 100, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
            >
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-full py-2 px-4 bg-white/20 backdrop-blur-md rounded-lg text-white font-semibold hover:bg-white/30 transition-all"
              >
                View Project
              </button>
            </motion.div>
          </div>

          <div className="mt-5 flex-grow">
            <h3
              className={`text-2xl font-bold mb-3 ${darkMode
                  ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                  : "text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"
                }`}
            >
              {name}
            </h3>
            <p
              className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
                }`}
            >
              {description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={`${name}-${tag.name}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: tagIndex * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${darkMode
                    ? "bg-purple-900/40 border border-purple-500/30"
                    : "bg-blue-100 border border-blue-300"
                  } ${tag.color}`}
              >
                #{tag.name}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className={`absolute -inset-1 rounded-2xl opacity-0 blur transition-opacity duration-500 ${isHovered ? "opacity-75" : "opacity-0"
            } ${darkMode
              ? "bg-gradient-to-r from-purple-600 to-pink-600"
              : "bg-gradient-to-r from-blue-500 to-cyan-500"
            }`}
          style={{ zIndex: -1 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const { darkMode } = useTheme();

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} ${darkMode ? "text-secondary" : "text-blue-600"
            }`}
        >
          My work
        </p>
        <h2
          className={`${styles.sectionHeadText} ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-4 text-base sm:text-lg max-w-3xl leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"
            }`}
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`px-4 py-2 rounded-full font-medium text-sm ${darkMode
              ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
              : "bg-blue-100 text-blue-700 border border-blue-300"
            }`}
        >
          🎯 {projects.length} Projects Completed
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`px-4 py-2 rounded-full font-medium text-sm ${darkMode
              ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
              : "bg-blue-100 text-blue-700 border border-blue-300"
            }`}
        >
          💻 Full Stack Development
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`px-4 py-2 rounded-full font-medium text-sm ${darkMode
              ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
              : "bg-blue-100 text-blue-700 border border-blue-300"
            }`}
        >
          🚀 Production Ready
        </motion.div>
      </motion.div>

      <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  Have a project in mind?
                </h3>
                <p
                  className={`text-base sm:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  Let's collaborate and build something amazing together
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
                Start a Project
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "");