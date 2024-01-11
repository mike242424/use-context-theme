'use client';

import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const Component3 = () => {
  const { theme, setTheme } = useThemeContext();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = 'black';
    } else if (theme === 'dark') {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
      <div className={theme === 'light' ? 'text-black' : 'text-white'}>
        Current Theme: {theme}
      </div>
      <button
        className={`p-4 rounded mt-6 ${
          theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
        onClick={handleClick}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </>
  );
};

export default Component3;
