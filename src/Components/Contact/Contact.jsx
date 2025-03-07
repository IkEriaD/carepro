import React from 'react';
import "./Contact.css";
// IMGS 
import CONTACT from "../Contact/IMGS/contact_image-doc.png"
// LINKS 
import { Link } from "react-router-dom";



function Contact() {

    return (
        <div className='row'>
            <div className="col-12">
                <div className="contact-us">
                    <h1>CONTACT <span className='contact-us-span'>US</span></h1>
                    <div className="contact-us-text">
                        <div className='contact-us-img'>
                            <img src={CONTACT} alt="contact-img" />
                        </div>
                        <div className='office-text'>
                            <h2 className='contact-office'>OUR OFFICE</h2>
                            <p>00000 Willms Station Suite 000, Washington, USA</p>
                            <p>Tel: (000) 000-0000</p>
                            <p>Email: greatstackdev@gmail.com</p>
                            <h2 className='careere-h2'>CAREERS AT PRESCRIPTO</h2>
                            <p>Learn more about our teams and job openings.</p>
                            <p className='explore-btn'>Explore Jobs</p>
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



export default Contact;