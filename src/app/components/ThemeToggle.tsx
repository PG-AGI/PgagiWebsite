"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = (): JSX.Element | null => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Update the `data-theme` attribute when theme changes
    document.documentElement.setAttribute("data-theme", theme || "light");
  }, [theme]);

  if (!mounted) return null; // Prevents hydration mismatch in SSR

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 border rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
