import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  


  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (!theme) {
      setTheme(savedTheme || (prefersDarkMode ? "dark" : "light"));
    }
  }, []); 

  
  useEffect(() => {
    if (!theme) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className="flex items-center justify-center">
      {theme === "dark" ? (
        <img
          onClick={() => setTheme("light")}
          src={assets.sun_icon}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
          alt="Light mode"
        />
      ) : (
        <img
          onClick={() => setTheme("dark")}
          src={assets.moon_icon}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
          alt="Dark mode"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
