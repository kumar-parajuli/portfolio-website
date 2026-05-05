import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

import { navLinks } from "../constants";
import logo from "../assets/kp.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Lock/unlock body scroll when mobile menu opens/closes
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleLinkClick = (title) => {
    setActive(title);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ==================== DESKTOP / TABLET NAV (hidden on mobile) ==================== */}
      <nav
        className={`hidden sm:flex fixed top-0 w-full z-30 transition-all duration-300
          ${scrolled
            ? darkMode
              ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
              : "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-3 group"
          >
            <motion.img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full border-2 border-[#915EFF] transition-transform group-hover:scale-105"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              SB | Full Stack Developer
            </span>
          </Link>

          {/* Desktop Links + Dark Mode Toggle */}
          <ul className="flex items-center gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                onClick={() => setActive(nav.title)}
                className={`cursor-pointer text-[17px] font-medium transition-colors
                  ${active === nav.title
                    ? "text-[#915EFF]"
                    : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-[#915EFF]"
                  }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDarkMode}
                className={`w-14 h-7 rounded-full p-1 transition-colors
                  ${darkMode ? "bg-[#915EFF]" : "bg-gray-300"}`}
                aria-label="Toggle dark mode"
              >
                <motion.div
                  className="w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ x: darkMode ? 28 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ==================== MOBILE TOP BAR ==================== */}
      <div
        className={`sm:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${scrolled
            ? darkMode
              ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
              : "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo (simplified for mobile) */}
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="logo"
              className="w-8 h-8 rounded-full border-2 border-[#915EFF]"
            />
            <span
              className={`font-bold text-sm ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              SB
            </span>
          </Link>

          {/* Right side: Theme toggle + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle (compact) */}
            <button
              onClick={toggleDarkMode}
              className={`w-10 h-5 rounded-full p-0.5 transition-colors
                ${darkMode ? "bg-[#915EFF]" : "bg-gray-300"}`}
              aria-label="Toggle dark mode"
            >
              <motion.div
                className="w-4 h-4 bg-white rounded-full shadow-md"
                animate={{ x: darkMode ? 20 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </button>

            {/* Hamburger button */}
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-8 h-8 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-colors
                ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"}
              `}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className={`w-5 h-0.5 rounded-full transition-all duration-200
                  ${darkMode ? "bg-white" : "bg-gray-800"}`}
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-5 h-0.5 rounded-full transition-all duration-200
                  ${darkMode ? "bg-white" : "bg-gray-800"}`}
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className={`w-5 h-0.5 rounded-full transition-all duration-200
                  ${darkMode ? "bg-white" : "bg-gray-800"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with smooth overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay (closes menu on tap) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`sm:hidden fixed top-[60px] left-4 right-4 z-50 rounded-2xl shadow-2xl overflow-hidden
                ${darkMode
                  ? "bg-gray-900/95 backdrop-blur-lg border border-gray-800"
                  : "bg-white/95 backdrop-blur-lg border border-gray-200"
                }`}
            >
              <ul className="py-2 max-h-[70vh] overflow-y-auto">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={() => handleLinkClick(nav.title)}
                      className={`flex items-center gap-3 px-5 py-3 text-base font-medium transition-colors
                        ${active === nav.title
                          ? "text-[#915EFF] bg-[#915EFF]/10"
                          : darkMode
                            ? "text-gray-300 hover:bg-gray-800"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      <span className="text-xl">{nav.icon}</span>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under the fixed top bar on mobile */}
      <div className="sm:hidden h-[60px]" />
    </>
  );
};

export default Navbar;