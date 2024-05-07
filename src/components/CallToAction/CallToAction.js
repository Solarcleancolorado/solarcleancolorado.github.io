import * as React from "react"
import "./CallToAction.scss"
import BorderBreak from "../BorderBreak/BorderBreak"

const CallToAction = ({children, button, top = false}) => {
  return (
    <>
      {top ? <BorderBreak /> : ""}
        <section className="cta">
            <h2 className="h3 mb-0">{ children }</h2>
            <a role="button" className="btn btn-info btn-lg" href="/contact-us">{ button }</a>
        </section>
      {!top ? <BorderBreak /> : ""}
    </>
  )
}

export default CallToAction
