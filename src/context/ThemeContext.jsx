import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => { }
});

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode !== null) {
            setDarkMode(savedMode === "true");
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};