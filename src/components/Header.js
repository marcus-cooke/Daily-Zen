import React from "react"
import { Link } from "gatsby"

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="bg-background-light dark:bg-background-dark py-6 border-b border-gray-100 dark:border-gray-800">
      <nav className="flex justify-between items-center max-w-3xl mx-auto px-6">
        <Link to="/" className="text-2xl font-medium text-primary-light dark:text-primary-dark">
          Daily Zen
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200">
            Home
          </Link>
          <Link to="/archive" className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200">
            Archive
          </Link>
          <Link to="/about" className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200">
            About
          </Link>
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
            className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header 