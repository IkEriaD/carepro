import React from 'react';
import "./Gastroenterologist.css";
// LINKS
import { Link } from "react-router-dom";
// ICONS
import { GoDotFill } from "react-icons/go";
import DOC6 from "../IMGS/doc6.png"
import DOC12 from "../IMGS/doc12.png"



function Gastroenterologist() {

    return (
        <div className="row">
        <div className="col-12">
        <div className="alldoctors-cards">
          <div className="card1">
            <Link to={"/DocAndrew"} className="card-link">
              <div className="doctors-img">
                <img src={DOC6} alt="DOC6" />
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
          <div className="card2">
            <Link to={"/DocPatrick"} className="card-link">
              <div className="doctors-img">
                <img src={DOC12} alt="DOC12" />
              </div>
              <div className="card-text">
                <p className="card-icon">
                  <GoDotFill /> Available
                </p>
                <h5>
                Dr. Patrick Harris</h5>
                <p>Gynecologist</p>
              </div>
            </Link>
          </div>
        </div>
        </div>
    </div>
    )
}



export default Gastroenterologist;