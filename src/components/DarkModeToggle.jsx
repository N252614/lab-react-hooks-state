import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
 const handleClick = () => {
  setDarkMode(!darkMode);
 };

  return (
    <button onClick={handleClick}>
    {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
