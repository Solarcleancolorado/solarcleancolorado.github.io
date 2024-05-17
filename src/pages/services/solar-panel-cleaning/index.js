import * as React from "react"
import "./solar-panel-cleaning.scss"
import Layout from "../../../components/Layout/Layout"
import CallToAction from "../../../components/CallToAction/CallToAction"
import WhyCleanSolar from "../../../components/WhyCleanSolar/WhyCleanSolar"
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import BorderBreak from "../../../components/BorderBreak/BorderBreak";
import { headData } from "../../../head"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron img="solarCleaning" title="Solar Panel Cleaning" />
      <BorderBreak backgroundColor="info"/>
      <BorderBreak height="100px" backgroundColor="dark"></BorderBreak>
      <section className="solar-panel-cleaning body-section">
        <div className="efficient-text">
          <div />
          <div>
            <h2>Efficient Solar Panel Cleaning</h2>
            <hr className="underline" />
          </div>
          <StaticImage src="../../../images/solar-panel-sun.png" alt="Sun and Solar Panels" placeholder="blurred" width={150} height={150} className="img-fluid d-none d-md-block"/>
          <p>At Solar Clean Colorado, we understand the importance of maintaining your solar panels to ensure optimal performance and energy efficiency. Our professional solar panel cleaning services are designed to remove dirt, dust, and debris that accumulate over time, hindering your panels' ability to harness sunlight effectively. With our environmentally friendly cleaning techniques, we help maximize your solar investment and prolong the lifespan of your panels. Trust Solar Clean Colorado to keep your solar panels shining bright and producing clean, renewable energy for years to come.</p>
        </div>
        <div className="pure-clean-text">
          <div>
            <h2>Pure Cleanliness Guaranteed</h2>
            <hr className="underline" />
          </div>
          <div />
          <p>At Solar Clean Colorado, we only use a quality Tucker RO-DI cleaning system. Our system removes the solids (i.e.: Calcium, Chlorine, Iron, Lime) from standard tap water resulting in pure H2O.  Which means there are no harsh chemicals involved to ensure maximum cleaning results. Our products are safe for yards, plants, children, pets, your home and you, the homeowner.</p>
          <StaticImage src="../../../images/h20.png" alt="H20" placeholder="blurred" width={150} height={150} className="img-fluid d-none d-md-block"/>
        </div>
      </section> 
      <CallToAction button="Request a Free Assessment" text="Boost your solar panel performance now!" /> 
      <WhyCleanSolar className="body-section" />
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

