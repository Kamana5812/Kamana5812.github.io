import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Default to dark mode unless previously set to light
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return 'dark'; // keeping default as dark to match existing portfolio vibe initially
  });

  useEffect(() => {
    // Update local storage
    localStorage.setItem('theme', theme);
    // Update data attribute on root element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
