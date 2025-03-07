import React from 'react';
import "./Gynecologist.css";
// LINKS
import { Link } from "react-router-dom";
// ICONS
import { GoDotFill } from "react-icons/go";
import DOC2 from "../IMGS/doc2.png"
import DOC8 from "../IMGS/doc8.png"
import DOC14 from "../IMGS/doc14.png"



function Gynecologist() {

    return (
        <div className="row">
        <div className="col-12">
        <div className="alldoctors-cards">
          <div className="card1">
            <Link to={"/DocEmily"} className="card-link">
              <div className="doctors-img">
                <img src={DOC2} alt="DOC1" />
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
          <div className="card2">
            <Link to={"/DocTimothy"} className="card-link">
              <div className="doctors-img">
                <img src={DOC8} alt="DOC7" />
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
            <Link to={"/DocRyan"} className="card-link">
              <div className="doctors-img">
                <img src={DOC14} alt="DOC13" />
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
        </div>
        </div>
    </div>
    )
}



export default Gynecologist;