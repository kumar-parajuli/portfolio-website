import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const formRef = useRef();
  const { darkMode } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kumar",
          from_email: form.email,
          to_email: "parajulirahul98@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(145, 94, 255, 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="mb-12 sm:mb-16 text-center xl:text-left">
        <motion.p
          className={`${styles.sectionSubText} ${darkMode ? "text-secondary" : "text-blue-600"
            }`}
        >
          Get in touch
        </motion.p>
        <motion.h3
          className={`${styles.sectionHeadText} ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          Contact.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className={`mt-4 text-base sm:text-lg max-w-3xl mx-auto xl:mx-0 ${darkMode ? "text-gray-400" : "text-gray-600"
            }`}
        >
          Have a question or want to work together? Drop me a message and I'll
          get back to you as soon as possible!
        </motion.p>
      </div>

      <div className="flex xl:flex-row flex-col-reverse gap-8 lg:gap-10 xl:gap-12">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] w-full"
        >
          <div
            className={`relative rounded-3xl p-[2px] ${darkMode
              ? "bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600"
              : "bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500"
              }`}
          >
            <div
              className={`rounded-3xl p-6 sm:p-8 lg:p-10 ${darkMode
                ? "bg-[#151030]"
                : "bg-gradient-to-br from-white to-blue-50"
                }`}
            >
              <div className="mb-8">
                <h4
                  className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode
                    ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
                    : "text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"
                    }`}
                >
                  Send me a message 📬
                </h4>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="mailto:parajulirahul98@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${darkMode
                      ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
                      : "bg-blue-100 text-blue-700 border border-blue-300"
                      }`}
                  >
                    <span>📧</span> Email
                  </motion.a>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${darkMode
                      ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
                      : "bg-blue-100 text-blue-700 border border-blue-300"
                      }`}
                  >
                    <span>⚡</span> Fast Response
                  </motion.div>
                </div>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <motion.label
                  className="flex flex-col"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span
                    className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-900"
                      }`}
                  >
                    <span>👤</span> Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="What's your good name?"
                    required
                    className={`py-4 px-6 rounded-xl outline-none font-medium transition-all duration-300 ${darkMode
                      ? "bg-[#1a1443] text-white placeholder:text-gray-500 focus:bg-[#1f1654]"
                      : "bg-blue-50 text-gray-900 placeholder:text-gray-400 focus:bg-blue-100"
                      } ${focusedField === "name"
                        ? darkMode
                          ? "ring-2 ring-purple-500"
                          : "ring-2 ring-blue-500"
                        : ""
                      }`}
                  />
                </motion.label>

                <motion.label
                  className="flex flex-col"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span
                    className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-900"
                      }`}
                  >
                    <span>📧</span> Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="What's your email address?"
                    required
                    className={`py-4 px-6 rounded-xl outline-none font-medium transition-all duration-300 ${darkMode
                      ? "bg-[#1a1443] text-white placeholder:text-gray-500 focus:bg-[#1f1654]"
                      : "bg-blue-50 text-gray-900 placeholder:text-gray-400 focus:bg-blue-100"
                      } ${focusedField === "email"
                        ? darkMode
                          ? "ring-2 ring-purple-500"
                          : "ring-2 ring-blue-500"
                        : ""
                      }`}
                  />
                </motion.label>

                <motion.label
                  className="flex flex-col"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span
                    className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-900"
                      }`}
                  >
                    <span>💬</span> Your Message
                  </span>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="What would you like to say?"
                    required
                    className={`py-4 px-6 rounded-xl outline-none font-medium resize-none transition-all duration-300 ${darkMode
                      ? "bg-[#1a1443] text-white placeholder:text-gray-500 focus:bg-[#1f1654]"
                      : "bg-blue-50 text-gray-900 placeholder:text-gray-400 focus:bg-blue-100"
                      } ${focusedField === "message"
                        ? darkMode
                          ? "ring-2 ring-purple-500"
                          : "ring-2 ring-blue-500"
                        : ""
                      }`}
                  />
                </motion.label>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  className={`py-4 px-8 rounded-xl font-bold text-white text-lg shadow-2xl transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""
                    } ${darkMode
                      ? "bg-gradient-to-r from-[#915EFF] to-purple-600 hover:from-purple-600 hover:to-[#915EFF]"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600"
                    }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        ⏳
                      </motion.span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <span>🚀</span>
                    </span>
                  )}
                </motion.button>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className={`mt-8 pt-6 border-t ${darkMode ? "border-purple-900/30" : "border-blue-200/50"
                  }`}
              >
                <p
                  className={`text-sm text-center ${darkMode ? "text-gray-500" : "text-gray-600"
                    }`}
                >
                  🔒 Your information is safe and will never be shared
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] rounded-3xl overflow-hidden"
        >
          <div
            className={`w-full h-full rounded-3xl p-[2px] ${darkMode
                ? "bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600"
                : "bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500"
              }`}
          >
            <div
              className={`w-full h-full rounded-3xl overflow-hidden ${darkMode ? "bg-[#151030]" : "bg-gradient-to-br from-white to-blue-50"
                }`}
            >
              <EarthCanvas />
            </div>
          </div>
        </motion.div> */}
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
                Let's Connect! 🤝
              </h3>
              <p
                className={`text-base sm:text-lg mb-6 max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                Whether you have a question, want to start a project, or just want
                to say hi, my inbox is always open
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "💼 Open to Work",
                  "🌍 Remote Friendly",
                  "⚡ Quick Replies",
                ].map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`px-5 py-2 rounded-full text-sm font-semibold ${darkMode
                      ? "bg-purple-900/30 text-purple-300 border border-purple-500/30"
                      : "bg-blue-100 text-blue-700 border border-blue-300"
                      }`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");