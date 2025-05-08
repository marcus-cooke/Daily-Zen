import React from "react"

const QuoteDisplay = ({ quote }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-light dark:bg-background-dark rounded-lg p-10 my-8 transition-all duration-300 hover:shadow-lg max-w-2xl mx-auto">
        <blockquote className="text-2xl font-light leading-relaxed mb-8 text-text-light dark:text-text-dark">
          <span className="text-primary-light dark:text-primary-dark leading-none font-serif text-4xl">"</span>
          <span className="pl-1 font-bold">{quote.text}</span>
          <span className="text-primary-light dark:text-primary-dark leading-none font-serif text-4xl">"</span>
        </blockquote>
        <p className="text-lg font-medium text-right text-primary-light dark:text-primary-dark">
          — {quote.author}
        </p>
        
        {quote.aiInsight && (
          <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
            <h3 className="text-lg font-medium mb-2 text-primary-light dark:text-primary-dark">Reflection:</h3>
            <p className="text-base italic text-text-light dark:text-text-dark">
              {quote.aiInsight}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuoteDisplay 