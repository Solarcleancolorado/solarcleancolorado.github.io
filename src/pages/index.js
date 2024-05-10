import * as React from "react"
import Layout from "../components/Layout/Layout"
import CallToAction from "../components/CallToAction/CallToAction"
import "./home.scss"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import WhyClean from "../components/WhyClean/WhyClean"

const IndexPage = () => {
  return (
    <Layout>
      <div className="grid-container">
        <Jumbotron img="home" title="Solar Clean Colorado" subtitle="Professional Solar Panel and Window Cleaning" />
        <CallToAction button="Call us today!" text="Give life back to your solar panels!" />
        <WhyClean />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Solar Clean Colorado</title>
