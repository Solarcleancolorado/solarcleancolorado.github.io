import * as React from "react"
import "./contact-us.scss"
import Layout from "../../components/Layout/Layout"
import Jumbotron from "../../components/Jumbotron/Jumbotron"
import { FaPhoneAlt  } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import BorderBreak from "../../components/BorderBreak/BorderBreak"
import { headData } from "../../head"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { SiNextdoor } from "@react-icons/all-files/si/SiNextdoor";

const IndexPage = () => {
  return (
    <Layout>
      <div className="grid-container">  
        <Jumbotron img="contactUs" title="Contact Us" />
        <BorderBreak backgroundColor="info"/>
        <BorderBreak height="100px" backgroundColor="dark"></BorderBreak>
        <section className="contact-us body-section">
            <h2>Get your cleaning scheduled <em>today!</em>
            </h2>
            <div className="contact-info">
              <div className="hours-of-operation">
                <h3>Hours of Operation</h3>
                <p>Monday - Friday<br />9:00 AM - 5:00 PM</p>
                <p>Saturday<br />9:00 AM - 1:00 PM</p>
              </div>
              <div className="contact-and-social">
                <div className="contact-details">
                  <h3 className="text-start">Call, Text or Email Us</h3>
                  <span className="d-flex align-items-center"><FaPhoneAlt className="solar-clean-colorado-icons" /><a href="tel:720-541-3606">(720) 541-3606</a></span>
                  <span className="d-flex align-items-center"><FaEnvelope className="solar-clean-colorado-icons" /><a href="mailto:info@solarcleancolorado.com">info@solarcleancolorado.com</a></span>
                </div>
                <div>
                  <h3 className="text-start">Follow Our Social Media</h3>
                  <div className="social">
                    <a href="https://www.facebook.com/people/Solar-Clean-Colorado/61559218996878/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Link" className="facebook"><FaFacebookSquare /></a>
                    <a href="https://nextdoor.com/pages/solar-clean-colorado-castle-rock-co/?query=solar%20clean%20colorado" target="_blank" rel="noopener noreferrer" aria-label="Nextdoor Link" className="nextdoor"><SiNextdoor /></a>
                  </div>        

                </div>
              </div>
            </div>
            <p>At Solar Clean Colorado, we specialize in residential and commercial window and solar panel cleaning. Our dedicated team ensures your property shines and operates efficiently. With meticulous attention to detail and professional service, we guarantee to exceed your expectations.</p>
          </section>
        <BorderBreak backgroundColor="info"/>
        <BorderBreak height="100px" backgroundColor="dark"></BorderBreak>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => 
  <>
    <html lang="en" />
    <title>Contact - Solar Clean Colorado</title>
    <meta name="description" content="Get in touch with Solar Clean Colorado today. Reach out for expert window and solar panel cleaning services in the Douglas County area." />
    { headData }
  </>

