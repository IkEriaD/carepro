import React from 'react';
import "./HomePage.css";
// LINKS 
import { Link } from "react-router-dom";
// ICONS 
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
// IMAGES 
import HEADERDOC from "../HomePage/IMGS/header_img-Doc.png";
import DERMATOLOGIST from "../HomePage/IMGS/Dermatologist.svg";
import GASTROENTEROLOGIST from "../HomePage/IMGS/Gastroenterologist.svg";
import GENERAL_PHYSICIAN from "../HomePage/IMGS/General_physician.svg";
import GYNECOLOGIST from "../HomePage/IMGS/Gynecologist.svg";
import NEUROLOGIST from"../HomePage/IMGS/Neurologist.svg";
import PEDIATRICIANS from "../HomePage/IMGS/Pediatricians.svg";
import DOC1 from "../HomePage/IMGS/doc1.png"
import DOC2 from "../HomePage/IMGS/doc2.png"
import DOC3 from "../HomePage/IMGS/doc3.png"
import DOC4 from "../HomePage/IMGS/doc4.png"
import DOC5 from "../HomePage/IMGS/doc5.png"
import DOC6 from "../HomePage/IMGS/doc6.png"
import DOC7 from "../HomePage/IMGS/doc7.png"
import DOC8 from "../HomePage/IMGS/doc8.png"
import APPOINTMENTDOC from "../HomePage/IMGS/appointment_img-doc.png"


function HomePage() {
  return (
      <div className='row'>
        <div className='col-12'>
          <div className='homepage'>
            <div className='homepage-text'>
              <h1>Book Appointment With Trusted Doctors</h1>
              <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
              <div className='homepage-btn'>Book Appointment <FaArrowRightLong /></div>
            </div>
            <div className='homepage-img'>
              <img src={HEADERDOC} alt="IMG1"/>
            </div>
          </div>

          {/* :::::::::::::::::::::::::::::HOMEPAGE ENDS HERE::::::::::::::::::::::::::::::::::  */}


          <div className='speciality-page'>
            <h4>Find by Speciality</h4>
            <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className="speciality-card">
              <div className='speciality-text'>
                <img src={GENERAL_PHYSICIAN} alt="GENERAL_PHYSICIAN" />
                <div>General Physician</div>
              </div>
              <div className='speciality-text'>
                <img src={GYNECOLOGIST} alt="GYNECOLOGIST" />
                <div>Gynecologist</div>
              </div>
              <div className='speciality-text'>
                <img src={DERMATOLOGIST} alt="DERMATOLOGIST" />
                <div>Dermatologist</div>
              </div>
              <div className='speciality-text'>
                <img src={PEDIATRICIANS} alt="PEDIATRICIANS" />
                <div>Pediatricians</div>
              </div>
              <div className='speciality-text'>
                <img src={NEUROLOGIST} alt="NEUROLOGIST" />
                <div>Neurologist</div>
              </div>
              <div className='speciality-text'>
                <img src={GASTROENTEROLOGIST} alt="GASTROENTEROGIST" />
                <div>Gastroenterogis</div>
              </div>
            </div>

            <div className='speciality-text'>
            </div>
            
          </div>


          {/* :::::::::::::::::::::::::::::SPECIALITY ENDS HERE::::::::::::::::::::::::::::::::::  */}



          <div className='doctors-page'>
            <h4>Top Doctors to Book</h4>
            <p className='doctors-page-p'>Simply browse through our extensive list of trusted doctors.</p>
            <div className="doctors-cards">
              <div className='card1'>
              <Link to={"/Appointment"} className="card-link">
                <div className='doctors-img'>
                  <img src={DOC1} alt="DOC1" />
                </div>
                <div className='card-text'>
                  <p className='card-icon'><GoDotFill /> Available</p>
                  <h5>Dr. Richard James</h5>
                  <p>General physician</p>
                </div>
                </Link>
              </div>
              <div className='card2'>
              <Link to={"/DocEmily"} className="card-link">
                  <div className='doctors-img'>
                <img src={DOC2} alt="DOC2" />
                </div>
                <div className='card-text'>
                  <p className='card-icon'><GoDotFill /> Available</p>
                  <h5>Dr. Emily Larson</h5>
                  <p>Gynecologist</p>
                </div>
                </Link>
              </div>
              <div className='card3'>
              <Link to={"/DocSarah"} className="card-link">
                <div className='doctors-img'>
                  <img src={DOC3} alt="DOC3" />
                </div>
                <div className='card-text'>
                  <p className='card-icon'><GoDotFill /> Available</p>
                  <h5>Dr. Sarah Patel</h5>
                  <p>Dermatologist</p>
                </div>
                </Link>
              </div>
              <div className='card4'>
              <Link to={"/DocChristopher"} className="card-link">
                <div className='doctors-img'>
                  <img src={DOC4} alt="DOC4" />
                </div>
                <div className='card-text'>
                  <p className='card-icon'><GoDotFill /> Available</p>
                  <h5>Dr. Christopher Lee</h5>
                  <p>Pediatricians</p>
                </div>
                </Link>
              </div>
            </div>

            <div className='doctors-cards2'>
            <div className='card1'>
            <Link to={"/DocJennifer"} className="card-link">
                <div className='doctors-img'>
                  <img src={DOC5} alt="DOC5" />
                </div>
                <div className='card-text'>
                  <p className='card-icon'><GoDotFill /> Available</p>
                  <h5>Dr. Jennifer Garcia</h5>
                  <p>Neurologist</p> 
                </div>
                </Link>
              </div>
              <div className='card2'>
              <Link to={"/DocAndrew"} className="card-link">
                  <div className='doctors-img'>
                <img src={DOC6} alt="DOC6" />
                </div>
                <div className='card-text'>
                  <p className='card-icon'><GoDotFill /> Available</p>
                  <h5>Dr. Andrew Williams</h5>
                  <p>Gastroenterologist</p>
                </div>
                </Link>
              </div>
              <div className='card3'>
              <Link to={"/DocDavis"} className="card-link">
                <div className='doctors-img'>
                  <img src={DOC7} alt="DOC7" />
                </div>
                <div className='card-text'>
                  <p className='card-icon'><GoDotFill /> Available</p>
                  <h5>Dr. Christopher Davis</h5>
                  <p> General physician</p>
                </div>
                </Link>
              </div>
              <div className='card4'>
              <Link to={"/DocTimothy"} className="card-link">
                <div className='doctors-img'>
                  <img src={DOC8} alt="DOC8" />
                </div>
                <div className='card-text'>
                  <p className='card-icon'><GoDotFill /> Available</p>
                  <h5>Dr. Timothy White</h5>
                  <p>Gynecologist</p>
                </div>
                </Link>
              </div>
            </div>
           
           <Link to="/AllDoctors" className='doctors-link'><div className='doctors-more'>More</div></Link>
          </div>

          {/* :::::::::::::::::::::::::::::DOCTORS ENDS HERE::::::::::::::::::::::::::::::::::  */}


          <div className='appointment'>
            <div className='appointment-text'>
              <h1>Book Appointment With 100+ Trusted Doctors</h1>
              <div className='appointment-btn'>Create account <FaArrowRightLong /></div>
            </div>
            <div className='appointment-img'>
              <img src={APPOINTMENTDOC} alt="IMG1"/>
            </div>
          </div>

          {/* :::::::::::::::::::::::::::::APPOINTMENT ENDS HERE::::::::::::::::::::::::::::::::::  */}

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

export default HomePage;














