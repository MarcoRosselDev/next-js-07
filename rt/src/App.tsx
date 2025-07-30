import { useEffect, useState } from 'react';
import './App.css'
import MyForm from './MyForm'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Initialize theme from localStorage or default to 'light'
    return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
  });

  useEffect(() => {
    // Apply the theme to the HTML element
    document.documentElement.setAttribute('data-bs-theme', theme);
    // Save the theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Rerun effect when theme changes

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <header>
        <button className={`btn btn-sm ${theme === 'light'? 'btn-dark' : 'btn-outline-light' }`} onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} theme
        </button>
      </header>
        <p className="mt-3">
          This is some content that will change appearance with the theme.
        </p>
      <MyForm />
    </>
  )
}

export default App
