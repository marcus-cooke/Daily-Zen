import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-8 mt-12 border-t border-muted-light dark:border-muted-dark">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex gap-6 my-4">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter"
            className="text-text-light dark:text-text-dark text-xl hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
          >
            Twitter
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="text-text-light dark:text-text-dark text-xl hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
          >
            Instagram
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="text-text-light dark:text-text-dark text-xl hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Daily Zen. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 