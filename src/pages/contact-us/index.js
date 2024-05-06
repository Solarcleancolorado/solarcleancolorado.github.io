import * as React from "react"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import Layout from "../../components/Layout/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <div className="jumbotron">
        <h1 className="title">Solar Clean Colorado</h1>
      </div>
      <div>
        {/* <FaPhoneAlt /> */}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Solar Clean Colorado</title>
