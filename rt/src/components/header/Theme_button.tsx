import { useEffect, useState } from 'react';

export default function Theme_button() {

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Initialize theme from localStorage or default to 'light'
    return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
  });
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  useEffect(() => {
  // Apply the theme to the HTML element
  document.documentElement.setAttribute('data-bs-theme', theme);
  // Save the theme preference to localStorage
  localStorage.setItem('theme', theme);
  }, [theme]); // Rerun effect when theme changes

  return (
    <button className={`btn btn-sm ${theme === 'light'? 'btn-dark' : 'btn-outline-light' }`} onClick={toggleTheme}>
      {
      theme === 'light' ? 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill me-2 ms-1" viewBox="0 0 16 16">
        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
      </svg>
      : 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill ms-1 me-2" viewBox="0 0 16 16">
        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
      </svg>
      }
      {theme === 'light' ? 'Dark' : 'Light'} theme 
    </button>
  )
  
}