import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import QuoteDisplay from "../components/QuoteDisplay"
import styled from "styled-components"

const CategoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
  text-align: center;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  text-align: center;
`

const CategoryTemplate = ({ data, pageContext }) => {
  const { category } = pageContext
  // Get quotes and add default values
  const quotes = data.dataJson.quotes.map((quote, index) => ({
    text: quote.text,
    author: quote.author,
    category: category,
    date: new Date().toISOString(),
    id: `quote-${index}`,
    source: ""
  }))
  
  // Sort quotes by date (newest first)
  const sortedQuotes = [...quotes]
  
  return (
    <Layout 
      title={`${category} Quotes`}
      description={`A collection of inspirational quotes in the ${category} category.`}
    >
      <CategoryContainer>
        <Title>{category} Quotes</Title>
        <Subtitle>Inspiration focused on {category.toLowerCase()}</Subtitle>
        
        {sortedQuotes.map(quote => (
          <QuoteDisplay key={quote.id} quote={quote} />
        ))}
      </CategoryContainer>
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

export default CategoryTemplate 