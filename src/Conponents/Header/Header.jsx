import React, {useEffect, useState} from "react";
import "../Header/Header.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import FindHospital from "../FindHospital/FindHospital";
import Saved from "../Saved/Saved";
import Signup from "../Signup/Signup";




function Header() {

  const [isNavBg, setIsNavBg] = useState(false);

  const handleScroll = () => {
    setIsNavBg(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
    <header className={isNavBg ? "nav-bg" : ""}>
      <div className='header-container'>
          <div className='brand'>
            <div className="circle blue"></div>
            <div className="circle pink"></div>
            <div className="logo"><Link to={"/"}>CarePro</Link></div>
          </div>

          <ul className='nav-links'>
            <li>
              <i class="ri-hotel-line icon"></i>
              <Link to={"/"}>Find Hospital</Link>
            </li>

            <li>
            <i class="ri-heart-2-line icon"></i>
              <Link to={"/saved"}>Saved</Link>
            </li>

            <li>
              <i class="ri-user-6-line icon"></i>
              <Link to={"/signup"}>Signup</Link>
            </li>
          </ul>
        </div>
    </header>

    <div>
        <Routes>
            <Route path="/" element={<FindHospital/>}></Route>
            <Route path="/Saved" element={<Saved/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default Header;