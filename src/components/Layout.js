import React, { useState, useEffect } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"

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

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
  }
  
  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    
    &:hover {
      color: ${props => props.theme.accent};
    }
  }
`

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
    }
  }, [isDarkMode, isBrowser])

  // Toggle theme function to be passed to Header
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const currentTheme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <SEO title={title} description={description} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main
          style={{
            flex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout 