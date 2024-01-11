'use client';

import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme } = useThemeContext();
  return (
    <nav
      className={`p-4 ${
        theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      Navbar
    </nav>
  );
};

export default Navbar;
