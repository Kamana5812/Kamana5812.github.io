import { useState, useEffect } from 'react';

/**
 * Custom hook to monitor which section is currently active in viewport.
 * @param {Array<string>} sectionIds - List of section DOM IDs to observe
 * @returns {string} The active section ID
 */
export function useActiveSection(sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header trigger

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
