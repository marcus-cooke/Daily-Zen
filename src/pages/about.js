import React from "react"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout 
      title="About"
      description="Learn more about Daily Zen, a website that provides daily inspirational quotes."
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl mb-6 text-text-light dark:text-text-dark text-center">About Daily Zen</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl mb-4 text-primary-light dark:text-primary-dark">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-4 text-text-light dark:text-text-dark">
            Daily Zen is dedicated to providing a moment of reflection and inspiration in your busy day. 
            We believe that a thoughtful quote can spark creativity, provide comfort, or offer a new 
            perspective when you need it most.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-text-light dark:text-text-dark">
            Each day, we present a carefully selected quote to inspire, motivate, or simply 
            make you think. Our collection spans across philosophers, writers, scientists, artists, 
            and other notable figures throughout history.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl mb-4 text-primary-light dark:text-primary-dark">Features</h2>
          <ul className="ml-6 mb-6">
            <li className="text-lg leading-relaxed mb-2 text-text-light dark:text-text-dark">A new inspirational quote each day</li>
            <li className="text-lg leading-relaxed mb-2 text-text-light dark:text-text-dark">Browse through an archive of past quotes</li>
            <li className="text-lg leading-relaxed mb-2 text-text-light dark:text-text-dark">Filter quotes by categories or authors</li>
            <li className="text-lg leading-relaxed mb-2 text-text-light dark:text-text-dark">Share your favorite quotes on social media</li>
            <li className="text-lg leading-relaxed mb-2 text-text-light dark:text-text-dark">Toggle between light and dark mode for comfortable reading</li>
            <li className="text-lg leading-relaxed mb-2 text-text-light dark:text-text-dark">Mobile-responsive design for quotes on the go</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl mb-4 text-primary-light dark:text-primary-dark">Contact Us</h2>
          <p className="text-lg leading-relaxed mb-4 text-text-light dark:text-text-dark">
            We'd love to hear from you! If you have a favorite quote you'd like to see featured, 
            or if you have any feedback or questions, please reach out to us at
            <a href="mailto:contact@dailyzen.com" className="text-primary-light dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark"> contact@dailyzen.com</a>.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl mb-4 text-primary-light dark:text-primary-dark">Technical Details</h2>
          <p className="text-lg leading-relaxed mb-4 text-text-light dark:text-text-dark">
            Daily Zen is built with Gatsby.js, a modern web framework for creating 
            fast, optimized websites. The site is statically generated, meaning it loads 
            quickly and works well even with slower internet connections.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-text-light dark:text-text-dark">
            The project is open-source and contributions are welcome. Visit our
            <a href="https://github.com/dailyzen" className="text-primary-light dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark"> GitHub repository</a> to learn more.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage 