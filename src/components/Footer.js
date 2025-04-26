import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 2rem;
  margin-top: 3rem;
  border-top: 1px solid ${props => props.theme.muted};
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0;
`

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.25rem;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            Twitter
          </SocialLink>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </SocialLink>
          <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </SocialLink>
        </SocialLinks>
        <Copyright>
          &copy; {currentYear} Daily Zen. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer 