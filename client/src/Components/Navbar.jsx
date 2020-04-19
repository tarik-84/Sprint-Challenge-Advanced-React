import React from 'react';
import  useDarkMode  from '../Hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('dark_mode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
