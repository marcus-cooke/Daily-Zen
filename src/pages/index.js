import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import QuoteDisplay from "../components/QuoteDisplay"

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
      <div className="text-center max-w-3xl mx-auto">
        {randomQuote && <QuoteDisplay quote={quoteWithDefaults} />}
      </div>
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