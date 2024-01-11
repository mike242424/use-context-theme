'use client';

import { useThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div
      className={`p-2 ${
        theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      Footer
    </div>
  );
};

export default Footer;
