import React from 'react';
import "./DocZoe.css";
// LINKS 
import { Link } from "react-router-dom";
// ICONS 
import { GoDotFill } from "react-icons/go";
// IMGS 
import DOC11 from "../IMGS/doc11.png";
import DOC5 from "../IMGS/doc5.png";
import VERIFY from "../IMGS/verify.svg";
import EXCLAMATION from "../IMGS/exclamation.svg";



function DocZoe() {

    return (
        <div className="row">
        <div className="col-12">
          <div className="appointment-page">
            <div className="appointment-page-img">
              <img src={DOC11} alt="DOC11" />
            </div>
            <div className="appointment-page-text">
              <h1>
                Dr. Zoe Kelly{" "}
                <img src={VERIFY} alt="VERIFY" className="verify-img" />
              </h1>
              <p>
                MBBS - Neurologist{" "}
                <span className="appointment-page-span">4 Years</span>
              </p>
              <h6>
                About{" "}
                <img
                  src={EXCLAMATION}
                  alt="EXCLAMATION"
                  className="exclamation-img"
                />
              </h6>
              <p className="appointment-page-text-p">
                Dr. Zoe has a strong commitment to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies. Dr. Davis has a strong
                commitment to delivering comprehensive medical care, focusing on
                preventive medicine, early diagnosis, and effective treatment
                strategies.
              </p>
              <p className="appointment-fee-p">
                Appointment fee: <span className="appointment-fee-span">$37</span>{" "}
              </p>
            </div>
          </div>
  
          <div className="booking">
            <h4>Booking slots</h4>
            <div className="booking-days">
              <div className="booking-days-text">
                <p>SAT</p>
                <p>7</p>
              </div>
              <div className="booking-days-text">
                <p>SUN</p>
                <p>8</p>
              </div>
              <div className="booking-days-text">
                <p>MON</p>
                <p>9</p>
              </div>
              <div className="booking-days-text">
                <p>TUE</p>
                <p>10</p>
              </div>
              <div className="booking-days-text">
                <p>WED</p>
                <p>11</p>
              </div>
              <div className="booking-days-text">
                <p>THU</p>
                <p>12</p>
              </div>
              <div className="booking-days-text">
                <p>FRI</p>
                <p>13</p>
              </div>
            </div>
  
            <div className="booking-time">
              <div>15.00 am</div>
              <div>15.30 am</div>
              <div>16.00 am</div>
              <div>16.30 am</div>
              <div>17.00 am</div>
              <div>17.30 am</div>
              <div>18.00 am</div>
              <div>18.30 am</div>
            </div>
            <Link to="/signup" className="booking-btn-a">
              <div className="booking-btn">Book an appointment</div>
            </Link>
          </div>
  
          <div className="related-doctors">
            <h1>Related Doctors</h1>
            <p className="related-doctors-p">Simply browse through our extensive list of trusted doctors.</p>
            <div className="related-doctors-cards">
              <div className="card1">
                <Link to={"/DocJennifer"} className="card-link">
                  <div className="doctors-img">
                    <img src={DOC5} alt="DOC5" />
                  </div>
                  <div className="card-text">
                    <p className="card-icon">
                      <GoDotFill /> Available
                    </p>
                    <h5>Dr. Jennifer Garcia</h5>
                    <p>MBBS - Neurologist</p>
                  </div>
                </Link>
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
    );
}



export default DocZoe;