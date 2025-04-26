import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
  text-align: center;
`

const Section = styled.section`
  margin-bottom: 3rem;
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`

const FeatureList = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`

const FeatureItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`

const AboutPage = () => {
  return (
    <Layout 
      title="About"
      description="Learn more about Daily Zen, a website that provides daily inspirational quotes."
    >
      <AboutContainer>
        <Title>About Daily Zen</Title>
        
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            Daily Zen is dedicated to providing a moment of reflection and inspiration in your busy day. 
            We believe that a thoughtful quote can spark creativity, provide comfort, or offer a new 
            perspective when you need it most.
          </Paragraph>
          <Paragraph>
            Each day, we present a carefully selected quote to inspire, motivate, or simply 
            make you think. Our collection spans across philosophers, writers, scientists, artists, 
            and other notable figures throughout history.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Features</SectionTitle>
          <FeatureList>
            <FeatureItem>A new inspirational quote each day</FeatureItem>
            <FeatureItem>Browse through an archive of past quotes</FeatureItem>
            <FeatureItem>Filter quotes by categories or authors</FeatureItem>
            <FeatureItem>Share your favorite quotes on social media</FeatureItem>
            <FeatureItem>Toggle between light and dark mode for comfortable reading</FeatureItem>
            <FeatureItem>Mobile-responsive design for quotes on the go</FeatureItem>
          </FeatureList>
        </Section>
        
        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <Paragraph>
            We'd love to hear from you! If you have a favorite quote you'd like to see featured, 
            or if you have any feedback or questions, please reach out to us at 
            <a href="mailto:contact@dailyzen.com"> contact@dailyzen.com</a>.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Technical Details</SectionTitle>
          <Paragraph>
            Daily Zen is built with Gatsby.js, a modern web framework for creating 
            fast, optimized websites. The site is statically generated, meaning it loads 
            quickly and works well even with slower internet connections.
          </Paragraph>
          <Paragraph>
            The project is open-source and contributions are welcome. Visit our 
            <a href="https://github.com/dailyzen"> GitHub repository</a> to learn more.
          </Paragraph>
        </Section>
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage 