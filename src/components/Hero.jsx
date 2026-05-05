import { motion } from "framer-motion";
import { styles } from "../styles";
import logo from "../assets/Kp.png";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className={`absolute inset-0 transition-all duration-700 ${darkMode
            ? "bg-gradient-to-br from-[#050816] via-[#0a0e27] to-[#1a1a2e]"
            : "bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"
            }`}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.div
          className={`absolute top-20 -left-20 w-72 h-72 rounded-full blur-3xl ${darkMode ? "bg-purple-600/20" : "bg-blue-400/20"
            }`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className={`absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl ${darkMode ? "bg-blue-600/20" : "bg-cyan-400/20"
            }`}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl ${darkMode ? "bg-pink-600/20" : "bg-blue-300/20"
            }`}
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className={`relative ${styles.paddingX} max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between h-full pt-20 lg:pt-0 gap-8 lg:gap-12`}>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 z-10 text-center lg:text-left"
        >
          <div className="hidden lg:flex items-center gap-4 mb-8">
            <motion.div
              className={`w-5 h-5 rounded-full ${darkMode ? "bg-[#915EFF]" : "bg-blue-600"
                }`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className={`h-1 w-20 rounded-full ${darkMode
                ? "bg-gradient-to-r from-[#915EFF] to-transparent"
                : "bg-gradient-to-r from-blue-600 to-transparent"
                }`}
              animate={{ width: ["80px", "120px", "80px"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div
              className={`px-6 py-2 rounded-full border-2 backdrop-blur-sm ${darkMode
                ? "bg-purple-900/30 border-purple-500/50"
                : "bg-white/70 border-blue-300"
                }`}
            >
              <span
                className={`text-sm font-medium ${darkMode ? "text-purple-300" : "text-blue-700"
                  }`}
              >
                👋 Welcome to my portfolio
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Hi, I'm{" "}
            <motion.span
              className={`inline-block bg-gradient-to-r ${darkMode
                ? "from-[#915EFF] via-purple-400 to-pink-500"
                : "from-blue-600 via-cyan-500 to-blue-700"
                } bg-clip-text text-transparent`}
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Kumar
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-xl sm:text-2xl md:text-3xl font-medium mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"
              }`}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            I craft beautiful, high-performance web experiences with modern
            technologies. Specializing in React, Node.js, and creative problem
            solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold text-white text-lg shadow-2xl ${darkMode
                ? "bg-gradient-to-r from-[#915EFF] to-purple-600"
                : "bg-gradient-to-r from-blue-600 to-cyan-600"
                }`}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold text-lg border-2 backdrop-blur-sm ${darkMode
                ? "border-purple-500 text-purple-300 hover:bg-purple-900/30"
                : "border-blue-600 text-blue-700 hover:bg-blue-100/50"
                }`}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {["JAVA", "Spring Boot", "Android Dev", "React", "SQL"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm ${darkMode
                    ? "bg-white/10 text-gray-300 border border-white/20"
                    : "bg-white/80 text-blue-700 border border-blue-200"
                    }`}
                >
                  {tech}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="relative flex-shrink-0 z-10"
        >
          <motion.div
            className={`absolute inset-0 rounded-full ${darkMode
              ? "bg-gradient-to-r from-[#915EFF] to-pink-500"
              : "bg-gradient-to-r from-blue-500 to-cyan-500"
              }`}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ filter: "blur(20px)" }}
          />

          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div
              className={`w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 ${darkMode
                ? "border-purple-500/30"
                : "border-blue-400/40"
                } flex items-center justify-center`}
            >
              <motion.div
                className={`w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 ${darkMode
                  ? "border-purple-400/40"
                  : "border-cyan-300/50"
                  } flex items-center justify-center`}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  className="relative"
                >
                  <img
                    src={logo}
                    alt="Kumar"
                    className={`w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-8 shadow-2xl ${darkMode
                      ? "border-[#915EFF] shadow-purple-900/50"
                      : "border-white shadow-blue-300/50"
                      }`}
                  />
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-full h-full bg-green-400 rounded-full animate-ping" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={`absolute -top-8 -right-8 w-20 h-20 rounded-2xl ${darkMode ? "bg-purple-600" : "bg-blue-500"
              } shadow-xl flex items-center justify-center`}
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-3xl">💻</span>
          </motion.div>
          <motion.div
            className={`absolute -bottom-8 -left-8 w-20 h-20 rounded-2xl ${darkMode ? "bg-pink-600" : "bg-cyan-500"
              } shadow-xl flex items-center justify-center`}
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <span className="text-3xl">🚀</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" aria-label="Scroll to about section">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-8 h-14 rounded-full border-4 flex justify-center items-start p-2 cursor-pointer ${darkMode
              ? "border-purple-500 hover:border-purple-400"
              : "border-blue-600 hover:border-blue-500"
              }`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-2 h-2 rounded-full ${darkMode ? "bg-purple-400" : "bg-blue-600"
                }`}
            />
          </motion.div>
        </a>
      </motion.div>

      <div
        className={`absolute inset-0 opacity-10 ${darkMode ? "opacity-5" : "opacity-10"
          }`}
        style={{
          backgroundImage: `radial-gradient(circle, ${darkMode ? "#915EFF" : "#3B82F6"
            } 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </section>
  );
};

export default Hero;