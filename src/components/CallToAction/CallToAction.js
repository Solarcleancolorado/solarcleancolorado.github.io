import BorderBreak from "../BorderBreak/BorderBreak"
import "./CallToAction.scss"
import * as React from "react"



const CallToAction = ({text, button, top = false}) => {
  return (
    <>
      {top ? <BorderBreak /> : ""}
        <section className="cta">
            <h2 className="h3 mb-0">{ text }</h2>
            <a role="button" className="btn btn-info btn-lg" href="/contact-us">{ button }</a>
        </section>
      {!top ? <BorderBreak /> : ""}
    </>
  )
}

export default CallToAction
