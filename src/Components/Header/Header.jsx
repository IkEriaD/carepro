import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  // FOR SCROLLBAR 
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
  // :::::::::::::::::::::::::::SCROLL BAR ENDS HERE::::::::::::::::::::::::::::::::::::

  return (
    <header className={isNavBg ? "nav-bg" : ""}>
      <div className="header-container">
        <div className="brand">
          <div className="circle blue"></div>
          <div className="circle pink"></div>
          <div className="logo">
            <Link to="/">CarePro</Link>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/AllDoctors">ALL DOCTORS</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>
        <div className="create_account">
          <Link to="/signup">Create account</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;



