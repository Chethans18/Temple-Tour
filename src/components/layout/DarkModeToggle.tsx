import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-amber-100 dark:bg-gray-800 text-amber-500 dark:text-amber-300
                 transition-colors duration-300 hover:bg-amber-200 dark:hover:bg-gray-700"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default DarkModeToggle;