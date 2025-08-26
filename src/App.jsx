import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import "./App.css";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Router>
            <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
                <header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h1>Portfolio</h1>
                    <button
                        onClick={toggleDarkMode}
                        className="theme-toggle"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                </header>

                {/* Navigation + Routes */}
                <AppRoutes />
            </main>
        </Router>
    );
}
