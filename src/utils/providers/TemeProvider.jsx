import React, { createContext, useState, useContext } from 'react';

// Створення контексту для теми
const ThemeContext = createContext();

// Компонент-провайдер теми, який буде зберігати поточну тему та функцію для її зміни
export const ThemeProvider = ({ children }) => {
  const [isDark, setDarkMode] = useState(false); // Початкова тема - світла

  // Функція для зміни теми
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Функція для отримання контексту теми
export const useTheme = () => useContext(ThemeContext);

// import { createContext, useContext, useState } from 'react';



// export const ThemeContext =(createContext);

// export const useTheme = () => {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error('context error');
//   }

//   return context;
// };



// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => {
//     setIsDark(prev => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
