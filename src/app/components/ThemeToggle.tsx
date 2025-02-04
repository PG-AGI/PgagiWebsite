import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from 'next-themes';
import { Sun, Moon } from "lucide-react";
import './ThemeToggle.modules.scss';

export default function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (resolvedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!isMounted) return null;

  return (
    <button
      className={`theme-switch-button ${resolvedTheme === 'dark' ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {resolvedTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
      <span className="theme-label">
        {resolvedTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  );
}
