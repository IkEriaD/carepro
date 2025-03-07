import React from 'react';
import "./Neurologist.css";
// LINKS
import { Link } from "react-router-dom";
// ICONS
import { GoDotFill } from "react-icons/go";
import DOC5 from "../IMGS/doc5.png"
import DOC11 from "../IMGS/doc11.png"



function Neurologist() {

    return (
        <div className="row">
        <div className="col-12">
        <div className="alldoctors-cards">
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
                <p>Neurologist</p>
              </div>
            </Link>
          </div>
          <div className="card2">
            <Link to={"/DocZoe"} className="card-link">
              <div className="doctors-img">
                <img src={DOC11} alt="DOC11" />
              </div>
              <div className="card-text">
                <p className="card-icon">
                  <GoDotFill /> Available
                </p>
                <h5>Dr. Zoe Kelly</h5>
                <p>Neurologist</p>
              </div>
            </Link>
          </div>
        </div>
        </div>
    </div>
    )
}



export default Neurologist;