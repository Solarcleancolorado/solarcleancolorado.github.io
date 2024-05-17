import * as React from "react"
import Layout from "../components/Layout/Layout"
import CallToAction from "../components/CallToAction/CallToAction"
import "./home.scss"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import WhyCleanSolar from "../components/WhyCleanSolar/WhyCleanSolar"
import { headData } from "../head"
import WhyCleanWindows from "../components/WhyCleanWindows/WhyCleanWindows"
import CallToActionLight from "../components/CallToAction/CallToActionLight/CallToActionLight"

const IndexPage = () => {
  return (
    <Layout>
      <div className="grid-container">
        <Jumbotron img="home" title="Solar Clean Colorado" subtitle="Professional Solar Panel and Window Cleaning" />
        <div className="home">
        <CallToAction button="Get a Free Quote" text="Ready to experience the difference? Contact us today!"  top={false}/>
          <div className="body-section">
            <WhyCleanWindows />
          </div>
          <div className="mt-5 body-section background-light">
            <WhyCleanSolar />
          </div>
          <CallToActionLight button="Contact us now!" text="Give life back to your solar panels!"/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => 
  <>
    <html lang="en" />
    { headData }
    <title>Solar Panel and Window Cleaning - Solar Clean Colorado</title>
    <meta name="description" content="Enhance your view and energy efficiency with premier window and solar panel cleaning in the Douglas County area. Contact us today!" />
  </>