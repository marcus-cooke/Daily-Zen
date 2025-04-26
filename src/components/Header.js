import React from "react"
import { Link } from "gatsby"

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="bg-background-light dark:bg-background-dark py-4 px-8 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-3xl font-bold text-primary-light dark:text-primary-dark">
          Daily Zen
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="text-text-light dark:text-text-dark font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200">
            Home
          </Link>
          <Link to="/archive" className="text-text-light dark:text-text-dark font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200">
            Archive
          </Link>
          <Link to="/about" className="text-text-light dark:text-text-dark font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200">
            About
          </Link>
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
            className="text-text-light dark:text-text-dark flex items-center gap-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
          >
            {isDarkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header 