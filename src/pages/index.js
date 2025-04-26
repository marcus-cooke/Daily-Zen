import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import QuoteDisplay from "../components/QuoteDisplay"
import styled from "styled-components"

const HomePage = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
`

const IndexPage = ({ data }) => {
  // Get all quotes from the quoteSample.json file
  const allQuotes = data.dataJson.quotes
  
  // Select a random quote
  const randomIndex = Math.floor(Math.random() * allQuotes.length)
  const randomQuote = allQuotes[randomIndex]
  
  // Add required fields for QuoteDisplay component
  const quoteWithDefaults = {
    text: randomQuote.text,
    author: randomQuote.author,
    category: "Wisdom",
    date: new Date().toISOString(),
    id: `quote-${randomIndex}`,
    source: ""
  }
  
  return (
    <Layout 
      title="Daily Inspiration"
      description="Get your daily dose of inspiration with thoughtful quotes."
    >
      <HomePage>
        <Title>Daily Zen</Title>
        <Subtitle>Your daily dose of inspiration</Subtitle>
        {randomQuote && <QuoteDisplay quote={quoteWithDefaults} />}
      </HomePage>
    </Layout>
  )
}

export const query = graphql`
  query {
    dataJson {
      quotes {
        author
        text
      }
    }
  }
`

export default IndexPage 