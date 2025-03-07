import React from 'react';
import "./About.css";
// LINKS 
import { Link } from "react-router-dom";
// IMGS 
import ABOUTIMAGE from "../About/IMGS/about_image-doc.png"



function About() {

    return (
        <div className='row'>
            <div className="col-12">
                <div className="about-us">
                    <div className="about-img">
                        <img src={ABOUTIMAGE} alt="about-img" />
                    </div>
                   <div className="about-text">
                        <h1>ABOUT <span className='about-text-span'>US</span></h1>
                        <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and
                         efficiently. At Prescripto, we understand the challenges individuals face when it comes to
                          scheduling doctor appointments and managing their health records.</p>

                        <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance
                         our platform, integrating the latest advancements to improve user experience and deliver superior
                          service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here
                           to support you every step of the way.</p>

                        <h6>Our Vision</h6>

                        <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge
                         the gap between patients and healthcare providers, making it easier for you to access the care you need,
                          when you need it.</p>
                   </div>
                </div>

                <div className="choose-us">
                    <h1>WHY <span className='choose-us-span'>CHOOSE US</span></h1>
                    <div className="choose-text">
                        <div className='efficiency'>
                            <h3>Efficiency:</h3>
                            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                        </div>
                        <div className='convenience'>
                            <h3>Convenience:</h3>
                            <p>Access to a network of trusted healthcare professionals in your area.</p>
                        </div>
                        <div className='personalization'>
                            <h3>Personalization:</h3>
                            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                        </div>
                    </div>
                </div>

                <footer>
            <div>
              <div className='brand'>
                <div className="circle blue"></div>
                <div className="circle pink"></div>
                <div className="logo"><Link to={"/"}>CarePro</Link></div>
              </div>
              <div className='brand-text'>Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galleyof type and scrambled it to make a 
                  type specimen book.
              </div>
            </div>

            <div className='company-text'>
              <h1>COMPANY</h1>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            <div className='get-in-touch-text'>
              <h1>GET IN TOUCH</h1>
                <ul>
                  <li>+1-212-456-7890</li>
                  <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
          </footer>

          {/* :::::::::::::::::::::::::::::FOOTER ENDS HERE::::::::::::::::::::::::::::::::::  */}

          <div className='copyright'>
            <span className='copyright-span'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</span>
          </div>

            </div>
        </div>
    )
}



export default About;