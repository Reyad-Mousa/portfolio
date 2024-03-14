"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

const ThemBtn = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleThem = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);
  return (
    <button
      onClick={() => toggleThem()}
      className="fixed bottom-0 bg-white p-3 m-5 drop-shadow-2xl  right-0 rounded-full opacity-75
            hover:scale-125 transition-all"
    >
      {theme === "light" ? (
        <BsSun  />
      ) : (
        <BsMoon className="dark:bg-gray-50 dark:text-gray-900" />
      )}
    </button>
  );
};

export default ThemBtn;
