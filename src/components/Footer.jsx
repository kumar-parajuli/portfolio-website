import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const Footer = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: "💻", url: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com/yourusername" },
    { name: "Email", icon: "📧", url: "mailto:parajulirahul98@gmail.com" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`relative mt-20 ${darkMode
          ? "bg-[#050816] border-t border-purple-900/30"
          : "bg-gradient-to-b from-blue-50 to-white border-t border-blue-200"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3
              className={`text-2xl font-bold mb-3 ${darkMode
                  ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                }`}
            >
              Kumar Parajuli
            </h3>
            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Full Stack Developer building beautiful & scalable web apps.
            </p>
            <span
              className={`inline-block mt-4 px-4 py-1.5 rounded-full text-xs font-medium ${darkMode
                  ? "bg-purple-900/30 text-purple-300"
                  : "bg-blue-100 text-blue-700"
                }`}
            >
              🚀 Available for work
            </span>
          </div>

          {/* Quick links */}
          <div className="text-center sm:text-left">
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition ${darkMode
                        ? "text-gray-400 hover:text-purple-400"
                        : "text-gray-600 hover:text-blue-600"
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left">
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Connect
            </h4>
            <div className="flex justify-center sm:justify-start gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className={`w-11 h-11 flex items-center justify-center rounded-full text-lg ${darkMode
                      ? "bg-purple-900/30 border border-purple-500/30"
                      : "bg-blue-100 border border-blue-300"
                    }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Newsletter
            </h4>
            <p className={`text-sm mb-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Get updates on new projects
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className={`flex-1 px-4 py-2 rounded-lg text-sm outline-none ${darkMode
                    ? "bg-[#1a1443] text-white placeholder:text-gray-500"
                    : "bg-blue-50 text-gray-900"
                  }`}
              />
              <button
                className={`px-4 py-2 rounded-lg text-white font-semibold ${darkMode
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600"
                  }`}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className={`mt-12 pt-6 border-t text-center text-xs sm:text-sm ${darkMode ? "border-purple-900/30 text-gray-400" : "border-blue-200 text-gray-600"
            }`}
        >
          © {currentYear} Kumar Parajuli • Built with ❤️ & React
        </div>
      </div>
    </footer>
  );
};
