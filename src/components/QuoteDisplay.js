import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const QuoteCard = styled.div`
  background-color: ${props => props.theme.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const QuoteText = styled.blockquote`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  padding-left: 1.5rem;
  border-left: 4px solid ${props => props.theme.primary};
  color: ${props => props.theme.text};
`

const QuoteAuthor = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.primary};
  margin: 0;
  text-align: right;
`

const QuoteSource = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  opacity: 0.7;
  margin: 0.25rem 0 0 0;
  text-align: right;
`

const QuoteMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`

const QuoteDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  opacity: 0.7;
  margin: 0;
`

const CategoryTag = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.muted};
  color: ${props => props.theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`

const SocialShare = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.muted};
  color: ${props => props.theme.primary};
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`

const QuoteDisplay = ({ quote }) => {
  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  // Function to share on social media
  const share = (platform) => {
    const quoteText = `"${quote.text}" - ${quote.author}`
    const url = window.location.href
    
    let shareUrl
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}&url=${encodeURIComponent(url)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      default:
        return
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer')
  }
  
  return (
    <QuoteCard>
      <QuoteText>{quote.text}</QuoteText>
      <QuoteAuthor>{quote.author}</QuoteAuthor>
      {quote.source && <QuoteSource>{quote.source}</QuoteSource>}
      
      <QuoteMeta>
        <QuoteDate>{formatDate(quote.date)}</QuoteDate>
        <CategoryTag to={`/category/${quote.category.toLowerCase().replace(/\s+/g, '-')}`}>
          {quote.category}
        </CategoryTag>
      </QuoteMeta>
      
      <SocialShare>
        <ShareButton onClick={() => share('twitter')} aria-label="Share on Twitter">
          Twitter
        </ShareButton>
        <ShareButton onClick={() => share('facebook')} aria-label="Share on Facebook">
          Facebook
        </ShareButton>
      </SocialShare>
    </QuoteCard>
  )
}

export default QuoteDisplay 