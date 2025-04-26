import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"
import "../styles/global.css"

// Define themes
const lightTheme = {
  background: "#ffffff",
  text: "#333333",
  primary: "#6b46c1",
  secondary: "#553c9a",
  accent: "#805ad5",
  muted: "#e9d8fd",
}

const darkTheme = {
  background: "#1a202c",
  text: "#f7fafc",
  primary: "#805ad5",
  secondary: "#6b46c1",
  accent: "#9f7aea",
  muted: "#44337a",
}

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

  const currentTheme = isDarkMode ? darkTheme : lightTheme

  return (
    <div className={`${isDarkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'} min-h-screen transition-colors duration-300`}>
      <SEO title={title} description={description} />
      <div className="flex flex-col min-h-screen">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex-1 max-w-7xl mx-auto p-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout 