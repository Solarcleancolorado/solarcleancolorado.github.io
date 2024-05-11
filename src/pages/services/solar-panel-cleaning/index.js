import * as React from "react"
import "./solar-panel-cleaning.scss"
import Layout from "../../../components/Layout/Layout"
import CallToAction from "../../../components/CallToAction/CallToAction"
import WhyCleanSolar from "../../../components/WhyCleanSolar/WhyCleanSolar"
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import { headData } from "../../../head"

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="solarCleaning" title="Solar Panel Cleaning" />
      <CallToAction button="Request a Free Assessment" text="Boost your solar panel performance now!" />
      <section className="solar-panel-cleaning">
        <h2>Efficient Solar Panel Cleaning for Enhanced Performance</h2>
        <p>At Solar Clean Colorado, we understand the importance of maintaining your solar panels to ensure optimal performance and energy efficiency. Our professional solar panel cleaning services are designed to remove dirt, dust, and debris that accumulate over time, hindering your panels' ability to harness sunlight effectively. With our environmentally friendly cleaning techniques, we help maximize your solar investment and prolong the lifespan of your panels. Trust Solar Clean Colorado to keep your solar panels shining bright and producing clean, renewable energy for years to come.</p>
      </section>
      <WhyCleanSolar />
    </Layout>
  )
}

export default IndexPage

export const Head = () => 
  <>
    <html lang="en" />
    <title>Solar Panel Cleaning Service - Solar Clean Colorado</title>
    <meta name="description" content="Boost solar efficiency with our expert cleaning services in the Douglas County area. Schedule now!" />
    { headData }
  </>

