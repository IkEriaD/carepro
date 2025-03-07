import React, { useState } from "react";
import "./AllDoctors.css";
// LINKS
import { Link } from "react-router-dom";
// ICONS
import { GoDotFill } from "react-icons/go";
// IMGS
import DOC1 from "../AllDoctors/IMGS/doc1.png";
import DOC2 from "../AllDoctors/IMGS/doc2.png";
import DOC3 from "../AllDoctors/IMGS/doc3.png";
import DOC4 from "../AllDoctors/IMGS/doc4.png";
import DOC5 from "../AllDoctors/IMGS/doc5.png";
import DOC6 from "../AllDoctors/IMGS/doc6.png";
import DOC7 from "../AllDoctors/IMGS/doc7.png";
import DOC8 from "../AllDoctors/IMGS/doc8.png";
import DOC9 from "../AllDoctors/IMGS/doc9.png";
import DOC10 from "../AllDoctors/IMGS/doc10.png";
import DOC11 from "../AllDoctors/IMGS/doc11.png";
import DOC12 from "../AllDoctors/IMGS/doc12.png";
import DOC13 from "../AllDoctors/IMGS/doc13.png";
import DOC14 from "../AllDoctors/IMGS/doc14.png";
import DOC15 from "../AllDoctors/IMGS/doc15.png";
import GeneralPhysician from "./GeneralPhysician/GeneralPhysician";
import Dermatologist from "./Dermatologist/Dermatologist";
import Gynecologist from "./Gynecologist/Gynecologist";
import Pediatricians from "./Pediatricians/Pediatricians";
import Neurologist from "./Neurologist/Neurologist";
import Gastroenterologist from "./Gastroenterologist/Gastroenterologist";

function AllDoctors() {
  const [activeSection, setActiveSection] = useState("allDoctors"); // Default to 'allDoctors'

  // Content for General Physician (or other categories)
  const generalPhysicianContent = (
   <div>
     < GeneralPhysician />
   </div>
  );
  
  const gynecologistContent = (
   <div>
     <Gynecologist />
   </div>
  );

  const dermatologistContent = (
   <div>
     <Dermatologist />
   </div>
  );
 
  const pediatriciansContent = (
   <div>
     <Pediatricians />
   </div>
  );

  const neurologistContent = (
   <div>
     <Neurologist />
   </div>
  );

  const gastroenterologistContent = (
   <div>
     <Gastroenterologist />
   </div>
  );

  return (
    <div className="row">
      <div className="col-12">
        <div className="alldoctors-page">
          <h6>Browse through the doctors specialist.</h6>
          <div className="alldoctors-items">
            <div className="alldoctors-link">
            <Link className="alldoctors-a" onClick={() => setActiveSection("generalPhysician")}>
                <p className="alldoctors-p">General physician</p>
              </Link>
            <Link className="alldoctors-a" onClick={() => setActiveSection("gynecologist")}>
                <p className="alldoctors-p">Gynecologist</p>
              </Link>
            <Link className="alldoctors-a" onClick={() => setActiveSection("dermatologist")}>
                <p className="alldoctors-p">Dermatologist</p>
              </Link>
            <Link className="alldoctors-a" onClick={() => setActiveSection("pediatricians")}>
                <p className="alldoctors-p">Pediatricians</p>
              </Link>
            <Link className="alldoctors-a" onClick={() => setActiveSection("neurologist")}>
                <p className="alldoctors-p">Neurologist</p>
              </Link>
            <Link className="alldoctors-a" onClick={() => setActiveSection("gastroenterologist")}>
                <p className="alldoctors-p">Gastroenterologist</p>
              </Link>
            </div>

       <div>
      {/* Conditional Content Rendering */}
      {activeSection === "generalPhysician" && generalPhysicianContent}
      {activeSection === "gynecologist" && gynecologistContent}
      {activeSection === "dermatologist" && dermatologistContent}
      {activeSection === "pediatricians" && pediatriciansContent}
      {activeSection === "neurologist" && neurologistContent}
      {activeSection === "gastroenterologist" && gastroenterologistContent}
      {activeSection === "allDoctors" &&  (
        <div>
          <div className="alldoctors-cards">
            <div className="card1">
              <Link to={"/Appointment"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC1} alt="DOC1" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Richard James</h5>
                  <p>General Physician</p>
                </div>
              </Link>
            </div>
            <div className="card2">
              <Link to={"/DocEmily"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC2} alt="DOC2" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Emily Larson</h5>
                  <p>Gynecologist</p>
                </div>
              </Link>
            </div>
            <div className="card3">
              <Link to={"/DocSarah"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC3} alt="DOC3" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Sarah Patel</h5>
                  <p>Dermatologist</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="alldoctors-cards2">
            <div className="card1">
              <Link to={"/Appointment"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC4} alt="DOC1" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Christopher Lee</h5>
                  <p> Pediatricians</p>
                </div>
              </Link>
            </div>
            <div className="card2">
              <Link to={"/DocEmily"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC5} alt="DOC2" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Jennifer Garcia</h5>
                  <p>Neurologist</p>
                </div>
              </Link>
            </div>
            <div className="card3">
              <Link to={"/DocSarah"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC6} alt="DOC3" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Andrew Williams</h5>
                  <p>Gastroenterologist</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="alldoctors-cards3">
            <div className="card1">
              <Link to={"/Appointment"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC7} alt="DOC1" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Christopher Davis</h5>
                  <p>General Physician</p>
                </div>
              </Link>
            </div>
            <div className="card2">
              <Link to={"/DocEmily"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC8} alt="DOC2" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Timothy White</h5>
                  <p>Gynecologist</p>
                </div>
              </Link>
            </div>
            <div className="card3">
              <Link to={"/DocSarah"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC9} alt="DOC3" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Ava Mitchell</h5>
                  <p>Dermatologist</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="alldoctors-cards4">
            <div className="card1">
              <Link to={"/Appointment"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC10} alt="DOC1" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Jeffrey King</h5>
                  <p>Pediatricians</p>
                </div>
              </Link>
            </div>
            <div className="card2">
              <Link to={"/DocEmily"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC11} alt="DOC2" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Zoe Kelly</h5>
                  <p> Neurologist</p>
                </div>
              </Link>
            </div>
            <div className="card3">
              <Link to={"/DocSarah"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC12} alt="DOC3" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Patrick Harris</h5>
                  <p>Gastroenterologis</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="alldoctors-cards5">
            <div className="card1">
              <Link to={"/DocJennifer"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC13} alt="DOC5" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Chloe Evans</h5>
                  <p>General physician</p>
                </div>
              </Link>
            </div>
            <div className="card2">
              <Link to={"/DocAndrew"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC14} alt="DOC6" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Ryan Martinez</h5>
                  <p>Gynecologist</p>
                </div>
              </Link>
            </div>
            <div className="card3">
              <Link to={"/DocDavis"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC15} alt="DOC7" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Amelia Hill</h5>
                  <p>Dermatologist</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
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

export default AllDoctors;








