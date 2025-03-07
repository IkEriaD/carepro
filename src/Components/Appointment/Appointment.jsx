import React from "react";
import "./Appointment.css";
// LINKS
import { Link } from "react-router-dom";
// ICONS
import { GoDotFill } from "react-icons/go";
// IMGS
import DOC1 from "../Appointment/IMGS/doc1.png";
import DOC7 from "../Appointment/IMGS/doc7.png";
import DOC13 from "../Appointment/IMGS/doc13.png";
import VERIFY from "../Appointment/IMGS/verify.svg";
import EXCLAMATION from "../Appointment/IMGS/exclamation.svg";

function Appointment() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="appointment-page">
          <div className="appointment-page-img">
            <img src={DOC1} alt="DOC1" />
          </div>
          <div className="appointment-page-text">
            <h1>
              Dr. Richard James{" "}
              <img src={VERIFY} alt="VERIFY" className="verify-img" />
            </h1>
            <p>
              MBBS - General Physician{" "}
              <span className="appointment-page-span">2 Years</span>
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
              Dr. Davis has a strong commitment to delivering comprehensive
              medical care, focusing on preventive medicine, early diagnosis,
              and effective treatment strategies. Dr. Davis has a strong
              commitment to delivering comprehensive medical care, focusing on
              preventive medicine, early diagnosis, and effective treatment
              strategies.
            </p>
            <p className="appointment-fee-p">
              Appointment fee: <span className="appointment-fee-span">$50</span>{" "}
            </p>
          </div>
        </div>

        <div className="booking">
          <h4>Booking slots</h4>
          <div className="booking-days">
            <div className="booking-days-text">
              <p>MON</p>
              <p>10</p>
            </div>
            <div className="booking-days-text">
              <p>TUE</p>
              <p>11</p>
            </div>
            <div className="booking-days-text">
              <p>WED</p>
              <p>12</p>
            </div>
            <div className="booking-days-text">
              <p>THU</p>
              <p>13</p>
            </div>
            <div className="booking-days-text">
              <p>FRI</p>
              <p>14</p>
            </div>
            <div className="booking-days-text">
              <p>SAT</p>
              <p>15</p>
            </div>
            <div className="booking-days-text">
              <p>SUN</p>
              <p>16</p>
            </div>
          </div>

          <div className="booking-time">
            <div>8.00 am</div>
            <div>8.30 am</div>
            <div>9.00 am</div>
            <div>9.30 am</div>
            <div>10.00 am</div>
            <div>10.30 am</div>
            <div>11.00 am</div>
            <div>11.30 am</div>
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
              <Link to={"/DocDavis"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC7} alt="DOC1" />
                </div>
                <div className="card-text">
                  <p className="card-icon">
                    <GoDotFill /> Available
                  </p>
                  <h5>Dr. Christopher Davis</h5>
                  <p>General physician</p>
                </div>
              </Link>
            </div>
            <div className="card2">
              <Link to={"/DocEmily"} className="card-link">
                <div className="doctors-img">
                  <img src={DOC13} alt="DOC2" />
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

export default Appointment;






// CODE FOR HOVER TO WORK
// import React, { useState } from "react";
// import "./Appointment.css";
// // IMGS
// import DOC1 from "../Appointment/IMGS/doc1.png";
// import VERIFY from "../Appointment/IMGS/verify.svg";
// import EXCLAMATION from "../Appointment/IMGS/exclamation.svg";

// function Appointment() {
//   // State to track the active booking day
//   const [activeDay, setActiveDay] = useState(null);

//   // State to track the active booking time
//   const [activeTime, setActiveTime] = useState(null);

//   // Days data for easy mapping
//   const days = [
//     { day: "MON", date: 10 },
//     { day: "TUE", date: 11 },
//     { day: "WED", date: 12 },
//     { day: "THU", date: 13 },
//     { day: "FRI", date: 14 },
//     { day: "SAT", date: 15 },
//     { day: "SUN", date: 16 },
//   ];

//   // Times data for easy mapping
//   const times = [
//     "8.00 am",
//     "8.30 am",
//     "9.00 am",
//     "9.30 am",
//     "10.00 am",
//     "10.30 am",
//     "11.00 am",
//     "11.30 am",
//   ];

//   return (
//     <div className="row">
//       <div className="col-12">
//         <div className="appointment-page">
//           <div className="appointment-page-img">
//             <img src={DOC1} alt="DOC1" />
//           </div>
//           <div className="appointment-page-text">
//             <h1>
//               Dr. Richard James <img src={VERIFY} alt="VERIFY" className="verify-img" />
//             </h1>
//             <p>
//               MBBS - General Physician <span className="appointment-page-span">2 Years</span>
//             </p>
//             <h6>
//               About <img src={EXCLAMATION} alt="EXCLAMATION" className="exclamation-img" />
//             </h6>
//             <p className="appointment-page-text-p">
//               Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing
//               on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis
//               has a strong commitment to delivering comprehensive medical care, focusing on
//               preventive medicine, early diagnosis, and effective treatment strategies.
//             </p>
//             <p className="appointment-fee-p">
//               Appointment fee: <span className="appointment-fee-span">$50</span>{" "}
//             </p>
//           </div>
//         </div>

//         <div className="booking">
//           <h4>Booking slots</h4>

//           {/* Booking Days */}
//           <div className="booking-days">
//             {days.map((day, index) => (
//               <div
//                 key={index}
//                 className={`booking-days-text ${activeDay === index ? "active" : ""}`}
//                 onClick={() => setActiveDay(index)} // Set the clicked day as active
//               >
//                 <p>{day.day}</p>
//                 <p>{day.date}</p>
//               </div>
//             ))}
//           </div>

//           {/* Booking Times */}
//           <div className="booking-time">
//             {times.map((time, index) => (
//               <div
//                 key={index}
//                 className={`booking-time-slot ${activeTime === index ? "active" : ""}`}
//                 onClick={() => setActiveTime(index)} // Set the clicked time as active
//               >
//                 {time}
//               </div>
//             ))}
//           </div>

//           <div className="booking-btn">Book an appointment</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Appointment;

