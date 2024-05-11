import * as React from "react"
import "./window-cleaning.scss"
import Layout from "../../../components/Layout/Layout"
import CallToAction from "../../../components/CallToAction/CallToAction"
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import { headData } from "../../../head"
import WhyCleanWindows from "../../../components/WhyCleanWindows/WhyCleanWindows";

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="windowCleaning" title="Window Cleaning" />
      <CallToAction button="Get a Free Quote" text="Ready to experience the difference? Contact us today!" />
      <section className="window-cleaning">
        <h2>Crystal Clear Windows for a Brighter Tomorrow</h2>
        <p>Transform your home or business with our comprehensive window cleaning services at Solar Clean Colorado. Our team of skilled professionals is committed to delivering streak-free, spotless windows that enhance your property's appearance and allow natural light to flood in. Using industry-leading techniques and eco-friendly cleaning solutions, we tackle even the toughest grime and buildup, leaving your windows sparkling clean and inviting. Whether you need interior or exterior window cleaning, trust Solar Clean Colorado to provide exceptional results every time.</p>
      </section>
      <WhyCleanWindows />
    </Layout>
  )
}

export default IndexPage

export const Head = () => 
  <>
    <html lang="en" />
    <title>Window Cleaning Service - Solar Clean Colorado</title>
    <meta name="description" content="Transform your windows and see the world more clearly with our professional window cleaning services in the Douglas County area. Schedule now!" />
    { headData }
  </>