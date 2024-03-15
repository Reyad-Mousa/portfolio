"use client";
import { useTheme } from "@/context/themeContext";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemBtn = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={() => toggleTheme()}
      className="fixed bottom-0 bg-white p-3 m-5 drop-shadow-2xl  right-0 rounded-full opacity-75
            hover:scale-125 transition-all"
    >
      {theme === "light" ? (
        <BsSun />
      ) : (
        <BsMoon className="dark:bg-gray-50 dark:text-gray-900" />
      )}
    </button>
  );
};

export default ThemBtn;
