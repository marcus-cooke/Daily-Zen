import React from "react"
import Layout from "../components/Layout"
import QuoteDisplay from "../components/QuoteDisplay"

const IndexTemplate = ({ pageContext }) => {
  // The quote is now coming from pageContext (server-side)
  const { quote } = pageContext
  
  return (
    <Layout 
      title="Daily Inspiration"
      description="Get your daily dose of inspiration with thoughtful quotes."
    >
      <div className="text-center max-w-3xl mx-auto">
        {quote && <QuoteDisplay quote={quote} />}
      </div>
    </Layout>
  )
}

export default IndexTemplate 