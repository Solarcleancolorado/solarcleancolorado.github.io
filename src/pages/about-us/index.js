import * as React from "react"
import Layout from "../../components/Layout/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <div className="jumbotron">
        <h1 className="title">Solar Clean Colorado</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Solar Clean Colorado</title>
