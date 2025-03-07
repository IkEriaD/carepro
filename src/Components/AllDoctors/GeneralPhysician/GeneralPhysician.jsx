import React from 'react';
import "./GeneralPhysician.css";
// LINKS
import { Link } from "react-router-dom";
// ICONS
import { GoDotFill } from "react-icons/go";
// IMGS 
import DOC1 from "../IMGS/doc1.png"
import DOC7 from "../IMGS/doc7.png"
import DOC13 from "../IMGS/doc13.png"



function GeneralPhysician() {

    return (
        <div className="row">
            <div className="col-12">
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
                    <p>General physician</p>
                  </div>
                </Link>
              </div>
              <div className="card2">
                <Link to={"/DocDavis"} className="card-link">
                  <div className="doctors-img">
                    <img src={DOC7} alt="DOC7" />
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
              <div className="card3">
                <Link to={"/DocChloe"} className="card-link">
                  <div className="doctors-img">
                    <img src={DOC13} alt="DOC13" />
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
            </div>
            </div>
        </div>
    );
}



export default GeneralPhysician;