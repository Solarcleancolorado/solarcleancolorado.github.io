import * as React from "react"
import Layout from "../../components/Layout/Layout"
import Jumbotron from "../../components/Jumbotron/Jumbotron"
import CallToAction from "../../components/CallToAction/CallToAction"
import "./about-us.scss"
import BorderBreak from "../../components/BorderBreak/BorderBreak"
import { headData } from "../../head"

const IndexPage = () => {
  return (
    <Layout>
      <div className="grid-container">
        <Jumbotron img="aboutUs" title="About Solar Clean Colorado" />
        <BorderBreak backgroundColor="info"/>
        <BorderBreak height="100px" backgroundColor="dark"></BorderBreak>
        <section className="about-us">
          <h2>Who Are We?</h2>
          <hr className="underline"/>
          <div className="section">
            <h3>Empowering Sustainable Futures</h3>
            <p>We're a family-owned business specializing in commercial and residential solar panel and window cleaning. With a focus on excellence and sustainability, we provide customized solutions to harness solar power and ensure your panels and windows shine. Join us as we pave the way towards a brighter, cleaner future.</p>
          </div>
          <div className="section">
            <h3>Licensed and Insured</h3>
            <p>Rest assured knowing that we are fully licensed and insured, providing peace of mind and ensuring the highest standards of professionalism and safety in all our services.</p>
          </div>
        </section>
        <CallToAction button={"Get a free estimate!"} text="When did you last clean your solar panels?" />
        
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => 
  <html lang="en" >
    <title>About - Solar Clean Colorado</title>
    <meta name="description" content="Learn about Solar Clean Colorado's mission and dedication to superior window and solar panel cleaning services in the Douglas County area." />
    { headData }
  </html>

