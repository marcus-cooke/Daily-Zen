import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"
import "../styles/global.css"

const Layout = ({ children, title, description }) => {
  // Check if localStorage is available (client-side)
  const isBrowser = typeof window !== "undefined"
  
  // Initialize theme state with default theme (or from localStorage if available)
  const [isDarkMode, setIsDarkMode] = useState(
    isBrowser && localStorage.getItem("theme") === "dark"
  )

  // Effect to update theme in localStorage when it changes
  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light")
      
      // Add or remove dark class to html element
      if (isDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [isDarkMode, isBrowser])

  // Toggle theme function to be passed to Header
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`bg-background-light text-text-light min-h-screen transition-colors duration-300 font-sans`}>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout 