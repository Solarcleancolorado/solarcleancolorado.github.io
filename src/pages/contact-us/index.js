import React, { useState, useEffect } from "react"
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
  // const [message, setMessage] = React.useState({ name:"", to: "", body: ""})

  // const onClick = event => {
  //   event.preventDefault()

  //   const { name, to, body } = message

  //   fetch("https://platinum-chicken-4842.twil.io/send-sms", {
  //     method: "post",
  //     headers: {
  //       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //     },
  //     body: new URLSearchParams({ name, to, body }).toString(),
  //   }).then(res => {
  //     if (res.status === 200) {
  //       console.log("Yay");
  //     } else {
  //       console.log(res);
  //     }
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }

  // const onChange = event => {
  //   const name = event.target.getAttribute("name")
  //   setMessage({ ...message, [name]: event.target.value })
  // }

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
            {/* <form className="body-section">
              <div className="mb-3">
                  <label for="name" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" required value={message.name} onChange={onChange} />
              </div>
              <div className="mb-3">
                  <label for="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" name="to" id="phone" placeholder="Enter your phone number" required value={message.to} onChange={onChange} />
              </div>
              <div className="mb-3">
                  <label for="info" className="form-label">Additional Information</label>
                  <textarea className="form-control" id="info" name="body" rows="5" placeholder="Enter additional information" required value={message.body} onChange={onChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" onClick={onClick}>Submit</button>
            </form> */}
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
