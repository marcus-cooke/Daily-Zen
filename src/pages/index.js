import React from "react"
import Layout from "../components/Layout"
import QuoteDisplay from "../components/QuoteDisplay"
import quotesData from "../data/quotes.json"

const IndexPage = () => {
  // Get all quotes from the quotes.json file
  const allQuotes = quotesData.quotes
  
  // Select a random quote
  const randomIndex = Math.floor(Math.random() * allQuotes.length)
  const randomQuote = allQuotes[randomIndex]
  
  // Add required fields for QuoteDisplay component
  const quoteWithDefaults = {
    text: randomQuote.text,
    author: randomQuote.author
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

export default IndexPage 