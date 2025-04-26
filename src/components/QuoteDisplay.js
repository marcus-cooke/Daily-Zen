import React from "react"
import { Link } from "gatsby"

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
    <div className="bg-white dark:bg-background-dark shadow-md rounded-lg p-8 mb-8 transition-transform duration-300 hover:-translate-y-1">
      <blockquote className="text-2xl font-medium leading-relaxed mb-6 pl-6 border-l-4 border-primary-light dark:border-primary-dark text-text-light dark:text-text-dark">
        {quote.text}
      </blockquote>
      <p className="text-lg font-semibold text-primary-light dark:text-primary-dark text-right">
        {quote.author}
      </p>
      {quote.source && (
        <p className="text-sm text-text-light dark:text-text-dark opacity-70 mt-1 text-right">
          {quote.source}
        </p>
      )}
      
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-text-light dark:text-text-dark opacity-70">
          {formatDate(quote.date)}
        </p>
        <Link 
          to={`/category/${quote.category.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-block bg-muted-light dark:bg-muted-dark text-primary-light dark:text-primary-dark px-3 py-1 rounded-full text-xs font-medium hover:bg-primary-light hover:dark:bg-primary-dark hover:text-white transition-colors duration-200"
        >
          {quote.category}
        </Link>
      </div>
      
      <div className="flex gap-3 mt-4">
        <button 
          onClick={() => share('twitter')} 
          aria-label="Share on Twitter"
          className="flex items-center justify-center bg-muted-light dark:bg-muted-dark text-primary-light dark:text-primary-dark rounded px-3 py-2 text-sm cursor-pointer hover:bg-primary-light hover:dark:bg-primary-dark hover:text-white transition-colors duration-200"
        >
          Twitter
        </button>
        <button 
          onClick={() => share('facebook')} 
          aria-label="Share on Facebook"
          className="flex items-center justify-center bg-muted-light dark:bg-muted-dark text-primary-light dark:text-primary-dark rounded px-3 py-2 text-sm cursor-pointer hover:bg-primary-light hover:dark:bg-primary-dark hover:text-white transition-colors duration-200"
        >
          Facebook
        </button>
      </div>
    </div>
  )
}

export default QuoteDisplay 