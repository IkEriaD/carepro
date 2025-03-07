import React from 'react';
import "./Pediatricians.css";
// LINKS
import { Link } from "react-router-dom";
// ICONS
import { GoDotFill } from "react-icons/go";
import DOC4 from "../IMGS/doc4.png"
import DOC10 from "../IMGS/doc10.png"



function Pediatricians() {

    return (
        <div className="row">
        <div className="col-12">
        <div className="alldoctors-cards">
          <div className="card1">
            <Link to={"/DocChristopher"} className="card-link">
              <div className="doctors-img">
                <img src={DOC4} alt="DOC4" />
              </div>
              <div className="card-text">
                <p className="card-icon">
                  <GoDotFill /> Available
                </p>
                <h5>Dr. Christopher Lee</h5>
                <p>Pediatricians</p>
              </div>
            </Link>
          </div>
          <div className="card2">
            <Link to={"/DocJeffrey"} className="card-link">
              <div className="doctors-img">
                <img src={DOC10} alt="DOC10" />
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
        </div>
        </div>
    </div>
    )
}



export default Pediatricians;