import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.background};
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.text};
  padding: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Daily Zen</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/archive">Archive</NavLink>
          <NavLink to="/about">About</NavLink>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? "🌞 Light" : "🌙 Dark"}
          </ThemeToggle>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header 