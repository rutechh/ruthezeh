import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icon';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="flex items-center justify-center w-5 h-5"
      >
        {theme === 'light' ? (
          <Icon 
            name="Sun" 
            size={20} 
            className="text-yellow-500 dark:text-yellow-400" 
          />
        ) : (
          <Icon 
            name="Moon" 
            size={20} 
            className="text-blue-500 dark:text-blue-400" 
          />
        )}
      </motion.div>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap">
          {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        </div>
      </div>
    </motion.button>
  );
}; 