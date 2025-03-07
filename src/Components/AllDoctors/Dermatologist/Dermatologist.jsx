import React from 'react';
import "./Dermatologist.css";
// LINKS
import { Link } from "react-router-dom";
// ICONS
import { GoDotFill } from "react-icons/go";
import DOC3 from "../IMGS/doc3.png"
import DOC9 from "../IMGS/doc9.png"
import DOC15 from "../IMGS/doc15.png"



function Dermatologist() {

    return (
        <div className="row">
        <div className="col-12">
        <div className="alldoctors-cards">
          <div className="card1">
            <Link to={"/DocSarah"} className="card-link">
              <div className="doctors-img">
                <img src={DOC3} alt="DOC3" />
              </div>
              <div className="card-text">
                <p className="card-icon">
                  <GoDotFill /> Available
                </p>
                <h5>Dr. Sarah Patel</h5>
                <p>Dermatologis</p>
              </div>
            </Link>
          </div>
          <div className="card2">
            <Link to={"/DocAva"} className="card-link">
              <div className="doctors-img">
                <img src={DOC9} alt="DOC9" />
              </div>
              <div className="card-text">
                <p className="card-icon">
                  <GoDotFill /> Available
                </p>
                <h5>Dr. Ava Mitchell</h5>
                <p>Dermatologis</p>
              </div>
            </Link>
          </div>
          <div className="card3">
            <Link to={"/DocAmelia"} className="card-link">
              <div className="doctors-img">
                <img src={DOC15} alt="DOC15" />
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
    </div>
    )
}



export default Dermatologist;