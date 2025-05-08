/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path')
const fs = require('fs')
const OpenAI = require('openai')
require('dotenv').config()

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  
  // Read quotes data
  const quotesData = JSON.parse(
    fs.readFileSync('./src/data/quotes.json', 'utf8')
  )
  
  // Select a random quote at build time
  const allQuotes = quotesData.quotes
  const randomIndex = Math.floor(Math.random() * allQuotes.length)
  const randomQuote = allQuotes[randomIndex]
  
  // Generate AI insight based on the quote
  let aiInsight = null
  
  try {
    // Check for both environment variables to ensure compatibility
    const apiKey = process.env.GATSBY_OPENAI_API_KEY || process.env.OPENAI_API_KEY
    
    if (apiKey) {
      const openai = new OpenAI({
        apiKey: apiKey,
      })
      
      const prompt = `The following is a quote from ${randomQuote.author}: "${randomQuote.text}"

`
      
      const response = await openai.chat.completions.create({
        model: "o3-mini",
        messages: [
          { role: "system", content: "You are Marcus Aurelius and you provide insightful reflections on philosophical quotes. Please provide a reflection (6 bullet points) on this quote, offering a thoughtful perspective that might help someone apply this wisdom to their daily life. Split your reflection into 3 sections: parenthood, leadership and product management. Format your response as HTML with line breaks and bold text." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
      })
      
      aiInsight = response.choices[0].message.content.trim()
      console.log('Generated AI insight for quote')
    } else {
      console.warn('OpenAI API key not found in environment variables. AI insight will not be generated.')
    }
  } catch (error) {
    console.error('Error generating AI insight:', error)
  }
  
  // Create the homepage with the random quote and AI insight in context
  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-template.js'),
    context: {
      quote: {
        text: randomQuote.text,
        author: randomQuote.author,
        aiInsight: aiInsight
      }
    },
  })
} 